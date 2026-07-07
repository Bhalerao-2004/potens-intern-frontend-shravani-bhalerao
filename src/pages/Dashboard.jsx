import DashboardLayout from "../components/DashboardLayout";
import QuickActions from "../components/QuickActions";
import TeamStatus from "../components/TeamStatus";
import CalendarCard from "../components/CalendarCard";
import Notifications from "../components/Notifications";
import ActionCard from "../components/ActionCard";
import AnomalyCard from "../components/AnomalyCard";
import ActivityCard from "../components/ActivityCard";
import LiveCounter from "../components/LiveCounter";
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <DashboardLayout>

      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 text-white shadow-2xl mb-8">
        <h1 className="text-4xl font-bold">
          Good Morning, Sarah 👋
        </h1>

        <p className="mt-2 text-slate-300">
          Monday • 09:00 AM •
          5 tasks require attention.
        </p>
      </div>

      <QuickActions />

      <div className="grid lg:grid-cols-4 gap-6 mb-8">

        <StatCard
          title="Pending"
          value="5"
        />

        <StatCard
          title="Incidents"
          value="3"
        />

        <StatCard
          title="Health"
          value="98%"
        />

        <LiveCounter />

      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 space-y-6">

  <ActionCard
    item={{
      title: "Invoice Batch #2481",
      context: "Vendor invoices pending release.",
      priority: "High",
    }}
  />

  <ActionCard
    item={{
      title: "Shipment #8291",
      context: "Delivery delay needs approval.",
      priority: "Medium",
    }}
  />

  <ActionCard
    item={{
      title: "Refund Request",
      context: "Customer escalation pending.",
      priority: "High",
    }}
  />

  <ActionCard
    item={{
      title: "Security Review",
      context: "Access request awaiting approval.",
      priority: "Low",
    }}
  />

  <ActionCard
    item={{
      title: "Payroll Exception",
      context: "Salary discrepancy detected.",
      priority: "Medium",
    }}
  />

  <TeamStatus />

</div>

        <div className="space-y-6">

  <AnomalyCard
    item={{
      title: "Unusual Transaction Volume",
      severity: "High",
      time: "Detected 15 minutes ago",
    }}
  />

  <AnomalyCard
    item={{
      title: "Server Response Delay",
      severity: "Medium",
      time: "Detected 1 hour ago",
    }}
  />

  <AnomalyCard
    item={{
      title: "Payment Failure Spike",
      severity: "High",
      time: "Detected 2 hours ago",
    }}
  />

  <ActivityCard />
  <CalendarCard />
  <Notifications />

</div>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;