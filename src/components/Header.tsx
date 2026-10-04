import Image from "next/image";
import NavLinks from "./NavLink";
import UserInfo from "./UserInfo";


const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="relative w-full">
      <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
        <Image
          src="/logo.webp"
          alt="Bangla News 24"
          width={40}
          height={40}
          priority
        />
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-2xl font-bold text-red-700">
            Bangla News 24
          </span>
          <span className="text-xs text-neutral-500">{date}</span>
        </div>
      </div>

     <UserInfo/>


      <NavLinks/>


      
    </header>
  );
};

export default Header;


// import Image from 'next/image';
// import React from 'react';
// import NavLink from './NavLink';
// import UserInfo from './UserInfo';

// const Header = () => {
//     const date = new Date().toLocaleDateString('bn-BD', {
//         dateStyle: 'full',
//     });

//     return (
//         <header className="border-t border-gray-200">
//             <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-4">

//                 {/* Empty left side */}
//                 <div className="w-40"></div>

//                 {/* Logo + Name + Date - Center */}
//                 <div className="flex items-center gap-3">
//                     <Image
//                         src="/logo.webp"
//                         alt="Bangla News 24 Logo"
//                         width={100}
//                         height={100}
//                         className="w-12 h-12"
//                     />

//                     <div>
//                         <h1 className="text-3xl font-bold text-red-700 leading-none">
//                             Bangla News 24
//                         </h1>

//                         <p className="text-sm text-gray-500 mt-1">
//                             {date}
//                         </p>
//                     </div>
//                 </div>

//                 {/* Buttons - Right */}
//                 <UserInfo></UserInfo>

//             </div>
//             <NavLink></NavLink>
//         </header>
//     );
// };

// export default Header;
