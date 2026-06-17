import { useState } from "react"
import { usePomodoro } from "../../context/PomodoroContext"
import TaskItem from "./TaskItem"

function TaskList() {
  const [inputText, setInputText] = useState("")
  const { tasks, addTask, clearCompleted } = usePomodoro()
  const remaining = tasks.filter(task => !task.done).length

  // ADD TASK HANDLER
  function handleAdd() {
    if (inputText.trim() === "") return  
    addTask(inputText.trim())            
    setInputText("")                     
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleAdd()
  }

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-4">
      {/* ── HEADING ROW ── */}
      <div className="flex items-center justify-between">
        <h2 className="text-white font-semibold text-base">
          Today's Tasks
        </h2>

        {/* Tasks left to do */}
        {tasks.length > 0 && (
          <span className="text-white/40 text-xs">
            {remaining} of {tasks.length} remaining
          </span>
        )}
      </div>

      {/* ── INPUT ROW ── */}
      <div className="flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task..."
          className="
            flex-1 bg-white/10 text-white text-sm
            placeholder-white/30 rounded-xl px-4 py-2.5
            outline-none border border-transparent
            focus:border-red-500 transition-all
          "
        />

        <button
          onClick={handleAdd}
          className="
            bg-red-500 hover:bg-red-400 active:scale-95
            text-white text-sm font-semibold
            px-5 py-2.5 rounded-xl transition-all
          "
        >
          Add
        </button>

      </div>

      {/* ── TASK LIST ── */}
      {tasks.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-white/20 text-sm">
            No tasks yet. Add one above! 👆
          </p>
        </div>

      ) : (

        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>

      )}

      {/* CLEAR DONE BUTTON */}
      {tasks.some(task => task.done) && (
        <button
          onClick={clearCompleted}
          className="text-white/30 hover:text-red-400 text-xs text-center transition-all mt-1"
        >
          Clear completed tasks
        </button>
      )}

    </div>
  )
}

export default TaskList