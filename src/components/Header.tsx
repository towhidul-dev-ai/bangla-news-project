// import Image from "next/image";
// import NavLinks from "./NavLink";
// import UserInfo from "./UserInfo";

// const Header = () => {
//   const date = new Date().toLocaleDateString("bn-BD", {
//     dateStyle: "full",
//   });

//   return (
//     <header className="w-full bg-white">
//       {/* ================= TOP SECTION ================= */}
//       <div className="mx-auto grid min-h-[135px] max-w-7xl grid-cols-3 items-start px-4 pt-4">
        
//         {/* Left side - empty */}
//         <div></div>

//         {/* Logo + Website Name - Center */}
//         <div className="flex items-center justify-center gap-2">
//           <Image
//             src="/logo.webp"
//             alt="Bangla News 24"
//             width={50}
//             height={50}
//             priority
//           />

//           <div className="flex flex-col">
//             <span className="text-3xl font-bold text-red-700">
//               Bangla News 24
//             </span>

//             <span className="text-xs text-neutral-500">
//               {date}
//             </span>
//           </div>
//         </div>

//         {/* User - Right */}
//         <div className="flex justify-end">
//           <UserInfo />
//         </div>
//       </div>

//       {/* ================= NAVIGATION ================= */}
//       <div className="flex justify-center pb-4">
//         <NavLinks />
//       </div>
//     </header>
//   );
// };

// export default Header;

import Image from "next/image";
import NavLinks from "./NavLink";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="border-b border-red-600 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 pt-5">
        
        {/* Logo + Title + Date + Navbar */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Bangla News 24"
              width={50}
              height={50}
              priority
            />

            <div>
              <h1 className="text-3xl font-bold text-red-700">
                Bangla News 24
              </h1>

              <p className="text-xs text-gray-500">
                {date}
              </p>
            </div>
          </div>

          {/* Navbar directly under date */}
          <NavLinks />
        </div>

        {/* Profile on right corner */}
        <div className="absolute right-4 top-3 ">
          <UserInfo />
        </div>
      </div>
    </header>
  );
};

export default Header;