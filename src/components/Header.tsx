// import Image from 'next/image';
// import React from 'react';

// const Header = () => {
//     const date = new Date().toLocaleDateString('bn-BD', {
//         dateStyle: 'full',
//         // weekday: 'long',
//         // year: 'numeric',
//         // month: 'long',
//         // day: 'numeric'
//     });
//     // console.log(date);
//     return (
//        <header className='relative mx-auto max-w-7xl px=4 py-4'>
//          <div className='flex flex=col items-center justify-center
//          gap-1 sm: flex-row sm: gap-2'>
            
//                 <Image src={'/logo.webp'} alt="Logo"
//                  width={40} height={40}
//                 priority />
//                 <div className='flex flex-col items-center sm: items-start'>
//                  <span className='text-2xl font-bold text-red-700'>Bangla News 24</span>             
//                 <span className='text-xs text-neutral-500'>
//                     {date}</span>
//                 </div>
//             </div>
//             <div className='absolute right-4 top-4 flex items-center gap-3 text-sm'>
               
//                 <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700">সাইন ইন</button>
//             <button className="btn bg-red-700 px-3 py-1.5 font-semibold text-white transition-colors hover: text-red-500">সাইন আপ</button>
//             </div>
        

//        </header>
//     );
// };

// export default Header;


import Image from 'next/image';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {
    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full',
    });

    return (
        <header className="border-t border-gray-200">
            <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-4">

                {/* Empty left side */}
                <div className="w-40"></div>

                {/* Logo + Name + Date - Center */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.webp"
                        alt="Bangla News 24 Logo"
                        width={100}
                        height={100}
                        className="w-12 h-12"
                    />

                    <div>
                        <h1 className="text-3xl font-bold text-red-700 leading-none">
                            Bangla News 24
                        </h1>

                        <p className="text-sm text-gray-500 mt-1">
                            {date}
                        </p>
                    </div>
                </div>

                {/* Buttons - Right */}
                <div className="w-40 flex items-center justify-end gap-3">
                    <button className="btn btn-ghost">
                        সাইন ইন
                    </button>

                    <button className="btn bg-red-700 text-white border-none">
                        সাইন আপ
                    </button>
                </div>

            </div>
            <NavLink></NavLink>
        </header>
    );
};

export default Header;
