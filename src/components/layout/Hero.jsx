import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto px-6">

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-white/40 mb-8 animate-fade-in">
          <span className="material-symbols-outlined text-tomato text-[18px]">
            timer
          </span>
          <span className="text-label-md text-secondary">
            The Science of Deep Work
          </span>
        </div>

        <h1 className="font-headline-lg text-headline-lg md:text-[64px] md:leading-[1.1] mb-6 tracking-tight max-w-4xl mx-auto">
          Stay Focused. <span className="text-tomato">Get More Done.</span>
        </h1>

        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          Unlock peak productivity with our modern Pomodoro engine.
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">

          <button className="bg-tomato text-white px-8 py-4 rounded-xl w-full sm:w-auto">
            Start Focusing Free
          </button>

          <Link
          to="/timer"
          className="glass-card text-on-surface px-8 py-4 rounded-xl w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">play_circle</span>
            See How it Works
          </Link>

        </div>

        {/* Timer Card */}
        <div className="max-w-3xl mx-auto glass-card rounded-[32px] p-8 md:p-12 shadow-[0px_40px_80px_rgba(0,0,0,0.06)] animate-slide-up">

          <div className="flex flex-col items-center">

            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
              <svg className="w-full h-full transform -rotate-90">

                <circle
                  className="text-surface-container-high"
                  cx="50%"
                  cy="50%"
                  fill="transparent"
                  r="48%"
                  stroke="currentColor"
                  strokeWidth="8"
                />

                <circle
                  cx="50%"
                  cy="50%"
                  fill="transparent"
                  r="48%"
                  stroke="#E74C3C"
                  strokeDasharray="1000"
                  strokeDashoffset="300"
                  strokeLinecap="round"
                  strokeWidth="8"
                />

              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display-timer text-[60px]">
                  25:00
                </span>
                <span className="text-label-md text-tomato uppercase tracking-widest">
                  Deep Focus
                </span>
              </div>

            </div>

            <div className="flex gap-6">

              <button className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center">
                refresh
              </button>

              <button className="w-20 h-20 rounded-full bg-tomato text-white flex items-center justify-center">
                play
              </button>

              <button className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center">
                next
              </button>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;