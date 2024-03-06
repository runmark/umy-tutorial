import { createTask } from "@/utils/actions";

const TaskForm = () => {
    return (
        <form action={createTask}>
            <div className="join w-full">
                <input type="text" name="content" placeholder="Type Here" required
                    className="input input-bordered join-item w-full"
                />
                <button type="submit" className="btn join-item btn-primary">create task</button>
            </div>
        </form>
    );
}

export default TaskForm;