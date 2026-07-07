import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { dark, setDark } = useTheme();

  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-slate-800 text-white px-4 py-2 rounded-lg"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;