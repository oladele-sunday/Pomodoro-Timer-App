function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="flex justify-between items-center p-2 border rounded">
      
      <span
        onClick={() => toggleTask(task.id)}
        className={`cursor-pointer ${
          task.done ? "line-through text-gray-400" : ""
        }`}
      >
        {task.text}
      </span>

      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;