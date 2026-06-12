import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"

export default function Calendar() {
  return (
    <>
      <h2 className="text-4xl font-bold mb-6">
        Calendar
      </h2>

      <p className="text-slate-400 mb-10">
        Organize your schedule and stay on top of your commitments.
      </p>

      <div className="bg-slate-800 p-6 rounded-xl">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
          ]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height="auto"
        />
      </div>
    </>
  )
}