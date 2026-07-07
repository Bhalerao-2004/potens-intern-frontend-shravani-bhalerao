import Sidebar from "./Sidebar"
import Topbar from "./Topbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <main className="
        bg-slate-100
        p-8
        min-h-screen
        ">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;