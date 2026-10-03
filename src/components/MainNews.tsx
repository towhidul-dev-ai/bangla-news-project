// import Image from "next/image";
// import Link from "next/link";

// interface News {
//     id: string,
//     title: string,
//     description: string,
//     category: string,
//     imageUrl: string,
//     imageAlt: string,
// }



// const MainNews = ({news}: { news: News[] }) => {
//     const [firstNews, ...otherNews] = news;

//     // const otherNews = news.slice(1);
//     // console.log(otherNews);
//     return (
        
//         <div className="flex gap-2">
//             <Link href={`/news/${firstNews.id}`}>
//             <div className="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <Image
//       src={firstNews.imageUrl}
//       height={600}
//         width={600}
//       alt={firstNews.imageAlt} />
//   </figure>
//   <div className="card-body">
//     <p className="text-red-600 font-semibold">{firstNews.category}</p>
//     <h2 className="card-title">{firstNews.title}</h2>
//     <p>{firstNews.description}</p>
    
//   </div>
// </div>
//             </Link>

// <div className="grid gap-2">
//     {
//         otherNews.slice(0,4).map(on => 
//         <Link href={`/news/${on.id}`}>
//         <div className="card bg-base-100 border
//          border-gray-300 p-5 " key={on.id}>
//             <p className="text-red-600 font-semibold">{firstNews.category}</p>
//             <div>{on.title}</div>
            
//              </div></Link>
//              )
//     }
// </div>

// </div>
//     );
// };

// export default MainNews;


import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  const [firstNews, ...otherNews] = news;

  return (
    <div className="flex gap-4">
      {/* Main News */}
      <Link href={`/news/${firstNews.id}`} className="w-96">
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <Image
              src={firstNews.imageUrl}
              height={600}
              width={600}
              alt={firstNews.imageAlt}
              className="w-full"
            />
          </figure>

          <div className="card-body">
            <p className="text-red-600 font-semibold">
              {firstNews.category}
            </p>

            <h2 className="card-title">{firstNews.title}</h2>

            <p>{firstNews.description}</p>
          </div>
        </div>
      </Link>

      {/* Other News */}
      <div className="grid flex-1 gap-2">
        {otherNews.slice(0, 4).map((on) => (
          <Link
            href={`/news/${on.id}`}
            key={on.id}
            className="block"
          >
            <div className="card bg-base-100 border border-gray-300 p-5 hover:shadow-md transition-shadow">
              <p className="text-red-600 font-semibold">
                {on.category}
              </p>

              <h3 className="font-semibold text-lg">
                {on.title}
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                {on.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
