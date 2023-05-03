import Header from "@/components/header";
import { tmpheaders } from "@/constants/constants";
import { client } from "../../libs/client";
import formatIsoToJst from "@/utility/timeconvert";
import { useEffect, useState } from "react";
import JumpToHeadings from "@/components/jumpToHeadings";

export interface Heading {
  id: string;
  text: string;
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map(
    (content: { id: any }) => `/blog/${content.id}`
  );
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: any } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export default function BlogId({ blog }) {
  const postDate = formatIsoToJst(blog.publishedAt).split(" ")[0];
  const updateDate = formatIsoToJst(blog.updatedAt).split(" ")[0];
  const [headings, setHeadings] = useState<Heading[]>([]);
  useEffect(() => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(blog.body, "text/html");
    const h2Elements = htmlDoc.querySelectorAll("h2");
    const h2Array: Heading[] = Array.from(h2Elements).map((element, index) => {
      return {
        id: element.id,
        text: element.innerText,
      };
    });
    setHeadings(h2Array);
  }, [blog.body]);
  return (
    <>
      <div className="relative bg-teal-400 h-auto overflow-y-auto">
        <Header
          categories={tmpheaders.categories}
          logoSrc={tmpheaders.logoSrc}
        />
        <main className="relative flex top-28 justify-start gap-4 bg-gray-100">
          <div className="w-2/12">
            <h1>test string</h1>
          </div>
          <div className="p-4 w-6/12 bg-yellow-100 rounded-md my-3">
            <section className="blog-body">
              <div className="mb-6">
                <p className="text-xs inline-block mx-2">{`投稿日: ${postDate}`}</p>
                <p className="text-xs inline-block mx-2">{`更新日: ${updateDate}`}</p>
                <h1 className="text-2xl">{blog.title} </h1>
              </div>
              <div
                className="[&_*]:break-all [&_code]:block [&_code]:bg-gray-200 [&_code]:rounded-md [&_code]:p-4 [&_code]:text-sm [&_code]:text-gray-800 [&_code]: "
                dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
              ></div>
            </section>
          </div>
          <div className="relative">
            <div className="fixed p-4 w-3/12 h-full">
              <JumpToHeadings headings={headings} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
