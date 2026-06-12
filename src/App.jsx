import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"

import Dashboard from "./pages/Dashboard"
import Calendar from "./pages/Calendar"
import Tasks from "./pages/Tasks"
import Deadlines from "./pages/Deadlines"
import Goals from "./pages/Goals"
import Notes from "./pages/Notes"
import Settings from "./pages/Settings"

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route path="/calendar" element={<Calendar />} />

          <Route path="/tasks" element={<Tasks />} />

          <Route path="/deadlines" element={<Deadlines />} />

          <Route path="/goals" element={<Goals />} />

          <Route path="/notes" element={<Notes />} />

          <Route path="/settings" element={<Settings />} />

        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}