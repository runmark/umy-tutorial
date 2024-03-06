'use client';

import { createTaskCustom } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";

const SubmitButton = () => {
    // useFormStatus 使用的位置很关键，
    // 如果在 TaskFormCustom 中使用就会导致pending无效果
    const { pending } = useFormStatus();
    return (
        <button type="submit" className="btn join-item btn-primary" disabled={pending}>
            {pending ? 'wait!!.....' : 'create task'}
        </button>
    );
}

const initialState = {
    message: null,
};

const TaskFormCustom = () => {

    const [state, createTaskCustomHandler] = useFormState(createTaskCustom, initialState);

    return (
        <form action={createTaskCustomHandler}>

            {state.message ? <p className="mb-2">{state.message}</p> : null}

            <div className="join w-full">
                <input type="text" name="content" placeholder="Type Here" required
                    className="input input-bordered join-item w-full"
                />
                <SubmitButton />
            </div>
        </form>
    );
}

export default TaskFormCustom;