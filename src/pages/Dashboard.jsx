import { useState } from "react"
import Header        from "../components/layout/Header"
import Footer        from "../components/layout/Footer"

// import Timer         from "../components/Timer/Timer"
import TaskList      from "../components/Task/TaskList"
// import SettingsModal from "../components/settings/SettingsModal"

function Dashboard() {
  const [showSettings, setShowSettings] = useState(false)

  return (
    <div className="min-h-screen bg-[rgb(246,238,243)] flex flex-col">

      {/* TOP BAR */}
      <Header onSettingsClick={() => setShowSettings(true)} />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col items-center gap-8 px-4 py-10">

        {/* Page heading */}
        <h2 className="text-white/40 text-sm uppercase tracking-widest">
          Stay focused. One session at a time.
        </h2>

        {/* <Timer /> */}

        {/* Divider line */}
        <div className="w-full max-w-md border-t border-white/10" />
        <TaskList />

      </main>

      {/* ── FOOTER ── */}
      <Footer />

      {/* ── SETTINGS MODAL ── */}
      {/* <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      /> */}

    </div>
  )
}

export default Dashboard