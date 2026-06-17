function Timer() {
  return (
    <div className="min-h-screen bg-white font-[Inter]">

      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 border-b">

        <div className="flex items-center gap-2">
          <i className="fa-solid fa-bullseye"></i>
          <h1 className="font-bold text-xl">FocusFlow</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2">
            <i className="fa-solid fa-expand"></i>
            Focus Mode
          </button>

          <img
            src="https://res.cloudinary.com/dkkiuteyj/image/upload/v1781292779/profile_plstto.png"
            className="w-10 h-10 rounded-full"
            alt="profile"
          />
        </div>

      </header>

      {/* MODE TABS */}
      <div className="flex justify-center gap-4 py-4">
        <button className="px-4 py-2 rounded-full bg-black text-white">Focus</button>
        <button className="px-4 py-2 rounded-full">Short Break</button>
        <button className="px-4 py-2 rounded-full">Long Break</button>
      </div>

      {/* TASK */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">CURRENTLY WORKING ON</p>
        <h2 className="text-xl font-semibold">Develop API Endpoints</h2>
      </div>

      {/* TIMER */}
      <div className="flex justify-center mt-10">

        <div className="relative w-[300px] h-[300px]">

          <svg viewBox="0 0 520 520" className="w-full h-full -rotate-90">

            <circle
              cx="260"
              cy="260"
              r="220"
              stroke="#eee"
              strokeWidth="20"
              fill="none"
            />

            <circle
              cx="260"
              cy="260"
              r="220"
              stroke="#E74C3C"
              strokeWidth="20"
              fill="none"
              strokeDasharray="1380"
              strokeDashoffset="400"
              strokeLinecap="round"
            />

          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold">25:00</h1>
            <p className="text-red-500 font-semibold">DEEP FLOW</p>
          </div>

        </div>

      </div>

      {/* CONTROLS */}
      <div className="flex justify-center gap-6 mt-10">

        <button className="p-4 bg-gray-200 rounded-full">
          ⟲
        </button>

        <button className="p-6 bg-red-500 text-white rounded-full">
          ▶
        </button>

        <button className="p-4 bg-gray-200 rounded-full">
          ⏭
        </button>

      </div>

      {/* BOTTOM NAV */}
      <div className="fixed bottom-0 left-0 w-full flex justify-around py-3 border-t bg-white">

        <button>Focus</button>
        <button>Tasks</button>
        <button>Stats</button>
        <button>Profile</button>
        <button>Settings</button>

      </div>

    </div>
  );
}

export default Timer;