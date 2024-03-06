import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import Link from "next/link";

const TasksPage = () => {
    return (
        <div className="max-w-lg">
            <TaskForm />
            <TaskList />
        </div>
    );
}

export default TasksPage;