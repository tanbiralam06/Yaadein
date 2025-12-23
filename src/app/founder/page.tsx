"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { CheckCircle2, Clock, Package, Eye, XCircle } from "lucide-react";

export default function FounderDashboard() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const fetchSubmissions = async () => {
    try {
      const res = await fetch("/api/submissions");
      const data = await res.json();
      setSubmissions(data.reverse()); // Newest first
    } catch (error) {
      console.error("Failed to fetch", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetchSubmissions();
    }
  }, [authenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "yaadein2025") {
      // Simple hardcoded password for MVP
      setAuthenticated(true);
    } else {
      alert("Invalid password");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-700";
      case "Payment Pending":
        return "bg-yellow-100 text-yellow-700";
      case "In Progress":
        return "bg-purple-100 text-purple-700";
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Closed":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-ivory/20 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-background p-8 rounded-3xl border border-primary/10 shadow-xl">
          <h1 className="text-2xl font-serif font-bold mb-6 text-center">
            Founder Login
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter Access Key"
              className="w-full p-4 rounded-xl border border-primary/10 focus:border-primary outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all">
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory/10">
      <nav className="bg-background border-b border-primary/10 py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-primary">
            Founder Dashboard
          </h1>
          <button
            onClick={() => setAuthenticated(false)}
            className="text-sm text-foreground/40 hover:text-primary transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard
            label="Total Requests"
            value={submissions.length}
            icon={<Package className="w-5 h-5" />}
          />
          <StatCard
            label="New"
            value={submissions.filter((s) => s.status === "New").length}
            icon={<Clock className="w-5 h-5 text-blue-500" />}
          />
          <StatCard
            label="Delivered"
            value={submissions.filter((s) => s.status === "Delivered").length}
            icon={<CheckCircle2 className="w-5 h-5 text-green-500" />}
          />
          <StatCard
            label="Revenue (Est)"
            value={`₹${submissions.length * 499}`}
            icon={<span className="text-lg font-bold text-primary">₹</span>}
          />
        </div>

        <div className="bg-background rounded-3xl border border-primary/10 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans">
              <thead className="bg-ivory/50 border-b border-primary/5 uppercase text-xs tracking-widest font-bold text-foreground/40">
                <tr>
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Occasion</th>
                  <th className="px-6 py-4">Budget</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {submissions.map((sub) => (
                  <tr
                    key={sub.orderId}
                    className="hover:bg-ivory/20 transition-colors"
                  >
                    <td className="px-6 py-4 font-bold text-primary">
                      {sub.orderId}
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-bold">{sub.userName}</div>
                        <div className="text-xs text-foreground/40">
                          {sub.userPhone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">{sub.occasion}</td>
                    <td className="px-6 py-4 text-sm font-medium">
                      {sub.budget}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusColor(
                          sub.status
                        )}`}
                      >
                        {sub.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-2 hover:bg-primary/10 rounded-lg text-primary transition-all">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {loading && (
            <div className="p-12 text-center text-foreground/40 italic">
              Loading requests...
            </div>
          )}
          {!loading && submissions.length === 0 && (
            <div className="p-12 text-center text-foreground/40 italic">
              No requests yet.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-background p-6 rounded-2xl border border-primary/10 flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-widest text-foreground/40 mb-1 font-bold">
          {label}
        </p>
        <p className="text-2xl font-serif font-bold">{value}</p>
      </div>
      <div className="p-3 bg-primary/5 rounded-xl border border-primary/5">
        {icon}
      </div>
    </div>
  );
}
