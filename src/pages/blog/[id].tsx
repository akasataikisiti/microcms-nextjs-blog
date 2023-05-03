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
      element.id = element.innerText;
      return {
        id: element.id,
        text: element.innerText,
      };
    });
    setHeadings(h2Array);
  }, [blog.body]);
  return (
    <>
      <Header categories={tmpheaders.categories} logoSrc={tmpheaders.logoSrc} />
      <main className="w-screen flex justify-center gap-4">
        <div className="2-3/12">
          <h1>test string</h1>
        </div>
        <div className="p-4 w-7/12">
          <section className="blog-body">
            <div className="mb-6">
              <p className="text-xs inline-block mx-2">{`投稿日: ${postDate}`}</p>
              <p className="text-xs inline-block mx-2">{`更新日: ${updateDate}`}</p>
              <h1 className="text-2xl">{blog.title} </h1>
            </div>
            <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }}></div>
          </section>
        </div>
        <div className="p-4 w-2/12">
          <JumpToHeadings headings={headings} />
        </div>
      </main>
    </>
  );
}
