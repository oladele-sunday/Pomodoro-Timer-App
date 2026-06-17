function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-12 border-t border-surface-variant">

      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left side */}
        <div>

          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary text-headline-md">
              bubble_chart
            </span>
            <span className="text-headline-md font-bold text-primary">
              FocusFlow
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-6 max-w-sm">
            © 2024 FocusFlow Productivity. Designed for Deep Work.
          </p>

          <div className="flex gap-4">
            <a className="text-gray-500 hover:text-primary underline text-sm" href="#">Privacy</a>
            <a className="text-gray-500 hover:text-primary underline text-sm" href="#">Terms</a>
            <a className="text-gray-500 hover:text-primary underline text-sm" href="#">Support</a>
            <a className="text-gray-500 hover:text-primary underline text-sm" href="#">Blog</a>
          </div>

        </div>

        {/* Right side */}
        <div className="md:text-right">

          <p className="text-sm mb-4">
            Join our newsletter for focus tips
          </p>

          <div className="flex max-w-md md:ml-auto">
            <input
              className="flex-grow border border-gray-300 rounded-l-xl px-4 py-2 outline-none focus:ring-1 focus:ring-red-500"
              placeholder="Email address"
              type="email"
            />

            <button className="bg-black text-white px-6 py-2 rounded-r-xl">
              Join
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;