// "use client";

// import { authClient } from "@/lib/auth-client";
// import Link from "next/link";

// const UserInfo = () => {
//   const { data: session } = authClient.useSession();
//   const user = session?.user;

//   const handleSignout = async () => {
//     await authClient.signOut();
//   };

//   return (
//     <div className="flex flex-col items-center gap-1">
//       {user ? (
//         <>
//           {/* Profile Image */}
//           <Link href="/profile">
//             <div className="avatar">
//               <div className="w-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
//                 {user.image ? (
//                   <img
//                     src={user.image}
//                     alt={user.name || "User"}
//                     className="h-10 w-10 rounded-full object-cover"
//                   />
//                 ) : (
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 font-bold text-gray-700">
//                     {user.name?.charAt(0).toUpperCase() || "U"}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </Link>

//           {/* User Name */}
//           <Link
//             href="/profile"
//             className="whitespace-nowrap text-sm font-medium"
//           >
//             {user.name}
//           </Link>

//           {/* Signout */}
//           <button
//             onClick={handleSignout}
//             className="btn btn-error btn-sm mt-1"
//           >
//             Sign out
//           </button>
//         </>
//       ) : (
//         <div className="flex items-center gap-5">
//           <Link href="/signin">
//             <button className="btn btn-ghost text-neutral-700 hover:text-red-700">
//               সাইন ইন
//             </button>
//           </Link>

//           <Link href="/signup">
//             <button className="btn bg-red-700 px-4 font-semibold text-white hover:bg-red-800">
//               সাইন আপ
//             </button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserInfo;

"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="flex flex-col items-center gap-1">
      {user ? (
        <>
          <Link href="/profile">
            <div className="avatar">
              <div className="w-10 rounded-full ring-2 ring-primary ring-offset-2">
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name || "User"}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 font-bold">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
              </div>
            </div>
          </Link>

          <Link
            href="/profile"
            className="whitespace-nowrap text-sm"
          >
            {user.name}
          </Link>

          <button
            onClick={handleSignout}
            className="btn btn-error btn-sm"
          >
            Sign out
          </button>
        </>
      ) : (
        <div className="flex items-center gap-4">
          <Link href="/signin">
            <button className="btn btn-ghost">
              সাইন ইন
            </button>
          </Link>

          <Link href="/signup">
            <button className="btn bg-red-700 text-white">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;