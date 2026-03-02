import { useState } from "react";
import { CalendarDays, Users, LogOut } from "lucide-react";

const MOCK_BOOKINGS = [
  { id: 1, name: "James Ochieng", phone: "0712345678", suite: "Executive", checkIn: "2026-03-05", checkOut: "2026-03-07", status: "confirmed" },
  { id: 2, name: "Amina Kato", phone: "0798765432", suite: "Deluxe", checkIn: "2026-03-06", checkOut: "2026-03-09", status: "pending" },
  { id: 3, name: "David Mwangi", phone: "0723456789", suite: "Executive", checkIn: "2026-03-10", checkOut: "2026-03-11", status: "confirmed" },
];

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [pin, setPin] = useState("");

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="glass rounded-2xl p-8 w-full max-w-sm">
          <h1 className="font-serif text-2xl font-bold gold-text mb-6 text-center">Manager Portal</h1>
          <input
            type="password"
            placeholder="Enter PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 mb-4"
          />
          <button
            onClick={() => pin === "2024" && setLoggedIn(true)}
            className="w-full gold-gradient text-primary-foreground font-semibold py-3 rounded-full"
          >
            Login
          </button>
          <p className="text-xs text-muted-foreground mt-3 text-center">Default PIN: 2024</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="glass-strong border-b border-border px-4 sm:px-6 h-16 flex items-center justify-between">
        <h1 className="font-serif text-lg font-bold gold-text">Maya Stays — Manager</h1>
        <button onClick={() => setLoggedIn(false)} className="text-muted-foreground hover:text-foreground transition-colors">
          <LogOut size={20} />
        </button>
      </header>

      <main className="max-w-5xl mx-auto p-4 sm:p-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { label: "Active Bookings", value: "3", icon: CalendarDays },
            { label: "Guests This Week", value: "5", icon: Users },
            { label: "Occupancy", value: "67%", icon: CalendarDays },
          ].map((s) => (
            <div key={s.label} className="glass rounded-xl p-5">
              <s.icon size={20} className="text-primary mb-2" />
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Bookings */}
        <div className="glass rounded-xl overflow-hidden">
          <div className="p-5 border-b border-border">
            <h2 className="font-serif text-lg font-semibold">Recent Bookings</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted-foreground border-b border-border">
                  <th className="p-4">Guest</th>
                  <th className="p-4">Suite</th>
                  <th className="p-4">Check-in</th>
                  <th className="p-4">Check-out</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_BOOKINGS.map((b) => (
                  <tr key={b.id} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                    <td className="p-4">
                      <div className="font-medium">{b.name}</div>
                      <div className="text-xs text-muted-foreground">{b.phone}</div>
                    </td>
                    <td className="p-4">{b.suite}</td>
                    <td className="p-4">{b.checkIn}</td>
                    <td className="p-4">{b.checkOut}</td>
                    <td className="p-4">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          b.status === "confirmed"
                            ? "bg-primary/20 text-primary"
                            : "bg-accent/20 text-accent"
                        }`}
                      >
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
