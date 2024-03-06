
'use server';

import { revalidatePath } from "next/cache";
import prisma from "./db";

export const deleteTask = async (formData) => {
    const id = formData.get("id");
    await prisma.task.delete({ where: { id } });
    revalidatePath("/tasks");
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

export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: "desc",
        }
    });
}
