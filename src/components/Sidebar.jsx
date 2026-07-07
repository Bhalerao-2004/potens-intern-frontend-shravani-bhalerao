import {
  FiHome,
  FiCheckSquare,
  FiBarChart2,
  FiFileText,
  FiSettings,
} from "react-icons/fi";

function Sidebar() {
  const menus = [
    {
      name: "Dashboard",
      icon: <FiHome />,
    },
    {
      name: "Actions",
      icon: <FiCheckSquare />,
    },
    {
      name: "Analytics",
      icon: <FiBarChart2 />,
    },
    {
      name: "Reports",
      icon: <FiFileText />,
    },
    {
      name: "Settings",
      icon: <FiSettings />,
    },
  ];

  return (
    <aside className="w-72 bg-slate-900 text-white p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-10">
        Ops Cockpit
      </h1>

      <nav className="space-y-3">
        {menus.map((item) => (
          <button
            key={item.name}
            className="
              w-full
              flex
              items-center
              gap-3
              p-3
              rounded-xl
              hover:bg-slate-800
              transition
            "
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;