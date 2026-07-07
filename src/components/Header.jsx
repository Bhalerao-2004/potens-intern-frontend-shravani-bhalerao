import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import BandwidthToggle from "./BandwidthToggle";

function Header({ low, setLow }) {
  return (
    <header className="bg-white dark:bg-slate-900 border-b p-6 flex justify-between items-center">

      <div>
        <h1 className="text-3xl font-bold dark:text-white">
          Operations Cockpit
        </h1>

        <p className="text-slate-500">
          Monday · 9:00 AM · 5 items need attention
        </p>
      </div>

      <div className="flex gap-3">
        <BandwidthToggle low={low} setLow={setLow} />
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
}

export default Header;