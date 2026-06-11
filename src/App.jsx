export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="flex">
        
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-slate-800 p-6">
          <h1 className="text-3xl font-bold mb-10">
            🛡️ Aegis
          </h1>

          <nav className="space-y-4">
            <div className="hover:text-blue-400 cursor-pointer">
              Dashboard
            </div>

            <div className="hover:text-blue-400 cursor-pointer">
              Calendar
            </div>

            <div className="hover:text-blue-400 cursor-pointer">
              Tasks
            </div>

            <div className="hover:text-blue-400 cursor-pointer">
              Deadlines
            </div>

            <div className="hover:text-blue-400 cursor-pointer">
              Goals
            </div>

            <div className="hover:text-blue-400 cursor-pointer">
              Notes
            </div>

            <div className="hover:text-blue-400 cursor-pointer">
              Settings
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10">
          <h2 className="text-4xl font-bold mb-6">
            Welcome back, Aishwary.
          </h2>

          <p className="text-slate-400 mb-10">
            Your personal command center is ready.
          </p>

          <div className="grid grid-cols-3 gap-6">
            
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">
                Today's Priorities
              </h3>

              <ul className="space-y-2">
                <li>• Finish Aegis Setup</li>
                <li>• Push to GitHub</li>
                <li>• Plan Calendar Module</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">
                Upcoming Events
              </h3>

              <p>No events scheduled.</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">
                Deadlines
              </h3>

              <p>No deadlines yet.</p>
            </div>

          </div>
        </main>

      </div>
    </div>
  )
}