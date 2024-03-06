import { updateTask } from "@/utils/actions";

const TaskPage = () => {
    return (
        <div>
            <form action={updateTask}>
                <input type="hidden" name="id" value={id} />
                <input type="text" name="content" required></input>
                <input type="radio" name="completed" required></input>
                <button type="submit">EDIT</button>
            </form>
        </div>
    );
}

export default TaskPage;