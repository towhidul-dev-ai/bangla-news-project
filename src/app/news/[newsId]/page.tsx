// import React from 'react';

// const NewsDetailsPage = async ({params}: {params:{newsId: string}}) => {
//     const {newsId} = await params;
//     // console.log(newsId)
//     const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`);
//     const data = await res.json();
//     const news = data.data;
//     console.log(news);
//     return (
//         <div>
//             <h1>{news.title}</h1>
//             {/* image */}

//             <p>{news.text}</p>
//         </div>
//     );
// };

// export default NewsDetailsPage;

import Image from "next/image";

const NewsDetailsPage = async ({
  params,
}: {
  params: { newsId: string };
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );

  const data = await res.json();
  const news = data.data;

  return (
    <main className="bg-white">
      {/* Main article container */}
      <article className="max-w-[720px] mx-auto px-4 py-8">

        {/* ================= TITLE ================= */}

        <h1 className="text-4xl md:text-5xl font-bold leading-[1.3] text-gray-900">
          {news.title}
        </h1>

        {/* ================= DESCRIPTION ================= */}

        {news.description?.blocks?.[0]?.model?.blocks?.[0]?.model
          ?.text && (
          <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600">
            {
              news.description.blocks[0].model.blocks[0].model
                .text
            }
          </p>
        )}

        {/* ================= DATE ================= */}

        <div className="border-t border-gray-200 mt-7" />

        <div className="py-4 flex items-center gap-4 text-sm text-gray-500">
          <span>
            {new Date(news.firstPublished).toLocaleDateString("bn-BD", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>

          <span>•</span>

          <span>{news.wordCount} শব্দ</span>
        </div>

        <div className="border-t border-gray-200 mb-10" />

        {/* ================= MAIN IMAGE ================= */}

        {news.imageUrl && (
          <figure>
            <Image
              src={news.imageUrl}
              alt={news.title}
              width={1024}
              height={576}
              priority
              className="w-full rounded-xl object-cover"
            />

            {news.body?.[0]?.caption && (
              <figcaption className="mt-2 text-sm text-gray-500">
                {news.body[0].caption}
              </figcaption>
            )}
          </figure>
        )}

        {/* ================= ARTICLE BODY ================= */}

        <div className="mt-10">
          {news.body?.map((block: any, index: number) => {

            // Don't show the first image again
            if (block.type === "image" && index === 0) {
              return null;
            }

            {/* Paragraph */}
            if (block.type === "text") {
              return (
                <p
                  key={index}
                  className="text-lg leading-9 text-gray-800 mb-7"
                >
                  {block.text}
                </p>
              );
            }

            {/* Heading */}
            if (block.type === "subheading") {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold text-gray-900 mt-12 mb-6"
                >
                  {block.text}
                </h2>
              );
            }

            {/* Article image */}
            if (block.type === "image") {
              return (
                <figure key={index} className="my-10">
                  <Image
                    src={block.url}
                    alt={block.altText || news.title}
                    width={block.width || 1024}
                    height={block.height || 576}
                    className="w-full rounded-xl"
                  />

                  {block.caption && (
                    <figcaption className="mt-2 text-sm text-gray-500">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            return null;
          })}
        </div>

        {/* ================= TAGS ================= */}

        {news.tags?.length > 0 && (
          <div className="border-t border-gray-200 mt-12 pt-6 mb-8">
            <div className="flex flex-wrap gap-3">
              {news.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

      </article>
    </main>
  );
};

export default NewsDetailsPage;