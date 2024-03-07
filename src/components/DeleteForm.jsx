'use client';

import { deleteTask } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitButton = () => {

    const { pending } = useFormStatus();

    return (
        <button className="btn btn-error btn-xs" disabled={pending}>
            {pending ? "deleting...." : "delete"}
        </button>
    );
};

const initialState = {
    message: null,
}

const DeleteForm = ({ id }) => {

    const [state, deleteTaskHandler] = useFormState(deleteTask, initialState);

    useEffect(() => {
        if (state.message === "success") {
            toast.success("delete success!");
            return;
        }

        if (state.message === "error") {
            toast.error("error");
            return;
        }

    }, [state]);

    return (
        <form action={deleteTaskHandler}>
            <input type='hidden' name='id' value={id} />
            <SubmitButton />
        </form>
    );
}

export default DeleteForm;