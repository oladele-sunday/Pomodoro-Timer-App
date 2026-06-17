import { createContext, useContext, useState, useEffect } from "react"


const PomodoroContext = createContext()

export function PomodoroProvider({ children }) {

  // TIMER DURATIONS (in minutes)
  const [settings, setSettings] = useState({
    focusDuration:      25,
    shortBreakDuration:  5,
    longBreakDuration:  15,
  })

  //TIME R STATE 
  const [mode, setMode]           = useState("focus")       
  const [timeLeft, setTimeLeft]   = useState(25 * 60)       
  const [isRunning, setIsRunning] = useState(false)         
  const [sessions, setSessions]   = useState(0)             

  // TASK STATE 
  const [tasks, setTasks] = useState([
    { id: 1, text: "Read Chapter 1",     done: false },
    { id: 2, text: "Complete exercises", done: false },
  ])

  // COUNTDOWN LOGIC
  useEffect(() => {
    if (!isRunning) return  
    if (timeLeft === 0) {
      setIsRunning(false)
      if (mode === "focus") {
        setSessions(prev => prev + 1)
      }
      return
    }

    const countdown = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(countdown)

  }, [isRunning, timeLeft, mode])

  // TIMER FUNCTIONS
  function changeMode(newMode) {
    setIsRunning(false)   

    const durations = {
      focus:      settings.focusDuration      * 60,
      shortBreak: settings.shortBreakDuration * 60,
      longBreak:  settings.longBreakDuration  * 60,
    }

    setMode(newMode)
    setTimeLeft(durations[newMode])
  }

  function toggleTimer() {
    setIsRunning(prev => !prev)
  }

  function resetTimer() {
    setIsRunning(false)

    const durations = {
      focus:      settings.focusDuration      * 60,
      shortBreak: settings.shortBreakDuration * 60,
      longBreak:  settings.longBreakDuration  * 60,
    }

    setTimeLeft(durations[mode])
  }

  // TASK FUNCTIONS 
  function addTask(text) {
    const newTask = {
      id:   Date.now(),   
      text: text,
      done: false,
    }
    setTasks(prev => [...prev, newTask])
  }

  // Tick a task as done (or undo it)
  function toggleTask(id) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, done: !task.done }  
          : task                            
      )
    )
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  // SETTINGS FUNCTION 
  function updateSettings(newSettings) {
    setSettings(newSettings)
    setIsRunning(false)
    setTimeLeft(newSettings.focusDuration * 60)
    setMode("focus")
  }

  return (
    <PomodoroContext.Provider
      value={{
        mode, timeLeft, isRunning, sessions, settings,
        changeMode, toggleTimer, resetTimer,
        tasks,
        addTask, toggleTask, deleteTask,
        updateSettings,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  )
}


// Usage inside any component:
//   const { timeLeft, toggleTimer } = usePomodoro()
export function usePomodoro() {
  return useContext(PomodoroContext)
}