import { deleteTask } from "@/utils/actions";
import prisma from "@/utils/db";

const DeleteForm = ({ id }) => {

    // prisma.task.delete({
    //     where: {
    //         id: id
    //     }
    // });

    return (
        <form action={deleteTask}>
            <input type='hidden' name='id' value={id} />
            <button className="btn btn-error btn-xs">delete</button>
        </form>
    );
}

export default DeleteForm;