
'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "./db";

import { z } from "zod";

export const deleteTask = async (prevState, formData) => {

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const id = formData.get("id");

    try {
        await prisma.task.delete({ where: { id } });
        revalidatePath("/tasks");

        return { message: "success" };
    } catch (err) {
        return { message: "error" };
    }

}

export const createTask = async (formData) => {
    const content = formData.get("content");
    await prisma.task.create({
        data: {
            content: content,
        }
    });

    revalidatePath("/tasks");
}

export const createTaskCustom = async (prevState, formData) => {

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const Task = z.object({
        content: z.string().min(5),
    });

    const content = formData.get("content");

    try {
        Task.parse({ content, });

        await prisma.task.create({
            data: {
                content: content,
            }
        });

        revalidatePath("/tasks");

        // throw new Error();

        return { message: 'success!!!' };

    } catch (error) {
        return { message: 'error' };
    }
}


export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: "desc",
        }
    });
}

export const getSingleTask = async (id) => {
    return await prisma.task.findUnique({
        where: {
            id,
        },
    });
};

export const editTask = async (formData) => {
    const id = formData.get("id");
    const content = formData.get("content");
    const completed = formData.get("completed");

    await prisma.task.update({
        where: { id },
        data: {
            content,
            completed: completed === "on" ? true : false,
        }
    });

    redirect('/tasks');
}
