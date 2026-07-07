import { FiBell, FiSearch } from "react-icons/fi";


function Topbar() {
  return (
    <header className="
      bg-white
      p-6
      flex
      justify-between
      items-center
      border-b
    ">

      <div className="relative">

        <FiSearch className="
          absolute
          left-4
          top-4
          text-gray-500
        " />

        <input
          placeholder="Search..."
          className="
          pl-12
          pr-4
          py-3
          border
          rounded-xl
          w-96
          "
        />
      </div>

      <div className="flex items-center gap-6">

        <div className="relative">
          <FiBell size={22} />

          <span className="
          absolute
          -top-2
          -right-2
          bg-red-500
          text-white
          w-5
          h-5
          rounded-full
          flex
          items-center
          justify-center
          text-xs
          ">
            3
          </span>
        </div>

        <div>
          <h4 className="font-semibold">
            Sarah Johnson
          </h4>

          <p className="text-gray-500 text-sm">
            Senior Operations Manager
          </p>
        </div>

      </div>

    </header>
  );
}

export default Topbar;