import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function Timer() {
  const modes = {
    focus: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  };

  const [currentMode, setCurrentMode] = useState("focus");
  const [timeLeft, setTimeLeft] = useState(modes.focus);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef(null);

  const radius = 180;
  const circumference = 2 * Math.PI * radius;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const progress = timeLeft / modes[currentMode];
  const offset = circumference - progress * circumference;

  // 🔥 AUTO SWITCH LOGIC
  const switchMode = () => {
    if (currentMode === "focus") {
      setCurrentMode("shortBreak");
      setTimeLeft(modes.shortBreak);
    } else {
      setCurrentMode("focus");
      setTimeLeft(modes.focus);
    }
  };

  const toggleTimer = () => setIsRunning((p) => !p);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(modes[currentMode]);
  };

  const skipSession = () => {
    setIsRunning(false);
    switchMode();
  };

  const changeMode = (mode) => {
    setCurrentMode(mode);
    setTimeLeft(modes[mode]);
    setIsRunning(false);
  };

  // TIMER LOOP
  useEffect(() => {
    if (!isRunning) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setIsRunning(false);

          // 🔥 AUTO SWITCH ON FINISH
          setTimeout(() => {
            switchMode();
            setIsRunning(true); // auto start next session
          }, 500);

          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isRunning, currentMode]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* NAVBAR */}
      <Navbar />
      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-center pt-20">
        {/* MODE BUTTONS */}
        <div className="flex gap-3 mb-8">
          {Object.keys(modes).map((mode) => (
            <button
            key={mode}
            onClick={() => changeMode(mode)}
            className={`px-4 py-2 rounded-full ${
              currentMode === mode ? "bg-black text-white" : "bg-gray-200"
            }`}
            >
              {mode}
            </button>
            ))}
        </div>
        {/* TIMER RING */}
        <div className="relative w-[320px] h-[280px]">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 520 520">
            <circle
            cx="260"
            cy="260"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="20"
            fill="none"
            />
            <circle
            cx="260"
            cy="260"
            r={radius}
            stroke="#E74C3C"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition: "stroke-dashoffset 0.5s linear",
            }}
            />

          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold">
              {formatTime(timeLeft)}
            </h1>
            <p className="text-red-500 font-semibold tracking-widest">
              {currentMode.toUpperCase()}
            </p>
          </div>

        </div>

        {/* CONTROLS */}
        <div className="flex gap-5 mt-10">
          <button onClick={resetTimer} className="p-4 bg-gray-200 rounded-full">
            Reset
          </button>
          <button
          onClick={toggleTimer}
          className="p-6 bg-red-500 text-white rounded-full"
          >
          {isRunning ? "Pause" : "Play"}
          </button>
          <button onClick={skipSession} className="p-4 bg-gray-200 rounded-full">
            Skip
          </button>

        </div>
      </div>

      {/* FOOTER */}
      <Footer />
      
    </div>
  );

}


export default Timer;