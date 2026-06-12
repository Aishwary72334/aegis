import { Link } from "react-router-dom"
export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <div className="flex">

                {/* Sidebar */}
                <aside className="w-64 min-h-screen bg-slate-800 p-6">
                    <h1 className="text-3xl font-bold mb-10">
                        🛡️ Aegis
                    </h1>

                    <nav className="space-y-4">
                        <Link
                            to="/"
                            className="block hover:text-blue-400 cursor-pointer"
                        >
                            Dashboard
                        </Link>

                        <Link to="/calendar" className="block hover:text-blue-400">
                            Calendar
                        </Link>

                        <Link to="/tasks" className="block hover:text-blue-400">
                            Tasks
                        </Link>

                        <Link to="/deadlines" className="block hover:text-blue-400">
                            Deadlines
                        </Link>

                        <Link to="/goals" className="block hover:text-blue-400">
                            Goals
                        </Link>

                        <Link to="/notes" className="block hover:text-blue-400">
                            Notes
                        </Link>

                        <Link to="/settings" className="block hover:text-blue-400">
                            Settings
                        </Link>
                    </nav>
                </aside>

                {/* Page Content */}
                <main className="flex-1 p-10">
                    {children}
                </main>

            </div>
        </div>
    )
}