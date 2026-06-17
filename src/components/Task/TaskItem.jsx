import { usePomodoro } from "../../context/PomodoroContext"

function TaskItem({ task }) {
  const { toggleTask, deleteTask } = usePomodoro()

  return (
    <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 border border-white/5">
      {/* checkbox */}
      <button
        onClick={() => toggleTask(task.id)}
        className={[
          "w-5 h-5 rounded-md border transition-all flex items-center justify-center",
          task.done
            ? "bg-red-500 border-red-500"
            : "border-white/30 hover:border-red-400",
        ].join(" ")}
        aria-label="Toggle task"
      >
        {task.done && <span className="text-white text-xs font-bold">✓</span>}
      </button>

      {/* text */}
      <p
        className={[
          "flex-1 text-sm",
          task.done ? "text-white/40 line-through" : "text-white",
        ].join(" ")}
      >
        {task.text}
      </p>

      {/* delete (only if you have deleteTask in context) */}
      {typeof deleteTask === "function" && (
        <button
          onClick={() => deleteTask(task.id)}
          className="text-white/30 hover:text-red-400 text-xs transition-all"
          aria-label="Delete task"
        >
          Delete
        </button>
      )}
    </div>
  )
}

export default TaskItem