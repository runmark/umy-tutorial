// 'use client';
import { editTask } from "@/utils/actions";

const EditForm = ({ task }) => {

    return (
        <form action={editTask}
            className="max-w-sm bg-base-100 p-12 border border-base-300 rounded-lg"
        >
            <input type="hidden" name="id" value={task.id} />

            <input type="text" name="content" defaultValue={task.content} required
                className="input input-bordered w-full"
            ></input>
            <div className="form-control my-4">
                <label className="label cursor-pointer" htmlFor="completed">
                    <span className="label-text">Completed</span>
                    <input type="checkbox" name="completed" defaultChecked={task.completed}
                        className="checkbox checkbox-primary checkbox-sm"
                        id="completed"
                    ></input>
                </label>
            </div>
            <button type="submit" className="btn btn-primary w-full btn-sm">EDIT</button>
        </form>
    );
}

export default EditForm;