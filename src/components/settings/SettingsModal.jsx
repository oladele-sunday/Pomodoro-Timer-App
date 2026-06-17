import { useState } from "react"
import { usePomodoro } from "../../context/PomodoroContext"

function SettingsModal({ isOpen, onClose }) {

  const { settings, updateSettings } = usePomodoro()
  const [focusDuration,      setFocusDuration]      = useState(settings.focusDuration)
  const [shortBreakDuration, setShortBreakDuration]  = useState(settings.shortBreakDuration)
  const [longBreakDuration,  setLongBreakDuration]   = useState(settings.longBreakDuration)


  // SAVE HANDLER
  function handleSave() {
    if (focusDuration < 1 || shortBreakDuration < 1 || longBreakDuration < 1) {
      alert("All durations must be at least 1 minute!")
      return
    }

    updateSettings({
      focusDuration,
      shortBreakDuration,
      longBreakDuration,
    })
    onClose() 
  }

  // CANCEL HANDLER
  function handleCancel() {
    setFocusDuration(settings.focusDuration)
    setShortBreakDuration(settings.shortBreakDuration)
    setLongBreakDuration(settings.longBreakDuration)
    onClose() 
  }

  if (!isOpen) return null


  // WHAT SHOWS ON SCREEN 
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
      onClick={handleCancel}
    >
      <div
        className="bg-[#16213e] border border-white/10 rounded-2xl p-6 w-full max-w-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── MODAL HEADER ── */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-bold text-lg">
            ⚙️ Settings
          </h2>
        
          <button
            onClick={handleCancel}
            className="text-white/30 hover:text-white text-xl transition-all"
          >
            ✕
          </button>
        </div>

        {/* ── FORM FIELDS ── */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-white/60 text-sm font-medium">
              🍅 Focus Duration
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="1"
                max="60"
                value={focusDuration}
                onChange={(e) => setFocusDuration(Number(e.target.value))}
                className="
                  w-full bg-white/10 text-white text-sm rounded-xl
                  px-4 py-2.5 outline-none border border-transparent
                  focus:border-red-500 transition-all
                "
              />
              <span className="text-white/40 text-sm shrink-0">min</span>
            </div>
          </div>

          {/* Short Break Duration */}
          <div className="flex flex-col gap-1.5">
            <label className="text-white/60 text-sm font-medium">
              ☕ Short Break
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="1"
                max="30"
                value={shortBreakDuration}
                onChange={(e) => setShortBreakDuration(Number(e.target.value))}
                className="
                  w-full bg-white/10 text-white text-sm rounded-xl
                  px-4 py-2.5 outline-none border border-transparent
                  focus:border-red-500 transition-all
                "
              />
              <span className="text-white/40 text-sm shrink-0">min</span>
            </div>
          </div>

          {/* Long Break Duration */}
          <div className="flex flex-col gap-1.5">
            <label className="text-white/60 text-sm font-medium">
              🛋️ Long Break
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="1"
                max="60"
                value={longBreakDuration}
                onChange={(e) => setLongBreakDuration(Number(e.target.value))}
                className="
                  w-full bg-white/10 text-white text-sm rounded-xl
                  px-4 py-2.5 outline-none border border-transparent
                  focus:border-red-500 transition-all
                "
              />
              <span className="text-white/40 text-sm shrink-0">min</span>
            </div>
          </div>

        </div>

        {/* ── INFO NOTE ── */}
        <p className="text-white/20 text-xs mt-4">
          * Saving will reset the current timer.
        </p>
        {/* ── BUTTONS ROW ── */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleCancel}
            className="
              flex-1 py-2.5 rounded-xl text-sm text-white/60
              bg-white/10 hover:bg-white/20 transition-all
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="
              flex-1 py-2.5 rounded-xl text-sm text-white
              font-bold bg-red-500 hover:bg-red-400
              active:scale-95 transition-all
            "
          >
            Save
          </button>

        </div>

      </div>
    </div>
  )
}

export default SettingsModal