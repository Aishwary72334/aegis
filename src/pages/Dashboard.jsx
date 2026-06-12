export default function Dashboard() {
  return (
    <>
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
    </>
  )
}