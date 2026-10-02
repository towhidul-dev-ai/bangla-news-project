import Marquee from "@/components/Marquee";
import Image from "next/image";

export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  console.log(mainNews);
  return (
    <div >
      <Marquee></Marquee>
      <div className="grid grid-cols-3 max-w-7xl mx-auto">
        {/* news section */}
        <div className="bg-red-500 col-span-2 p-10"></div>
        {/* most read section */}
        <div className="bg-green-500 col-span-1 p-10"></div>
      </div>
    </div>
  );
}
