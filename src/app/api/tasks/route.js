const { default: prisma } = require("@/utils/db");

export const GET = async (request) => {
    const tasks = await prisma.task.findMany();
    return Response.json({ data: tasks });
};

export const POST = async (request) => {
    const data = await request.json();

    // console.log(data);
    const task = await prisma.task.create({
        data: {
            content: data.content,
        }
    });

    return Response.json({ data: task });
}