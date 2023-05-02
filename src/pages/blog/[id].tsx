import Header from "@/components/header";
import { tmpblogs, tmpheaders } from "@/constants/constants";
import { client } from "../../libs/client";
import formatIsoToJst from "@/utility/timeconvert";
// export type BlogProps = {
//   id: string;
//   title: string;
//   date: string;
//   category: string;
//   imgurl: string;
// };

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
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
  return (
    <>
      <Header categories={tmpheaders.categories} logoSrc={tmpheaders.logoSrc} />
      <main className="w-screen flex justify-center gap-4">
        <div className="p-4 w-7/12">
          <section className="">
            <div className="mb-6">
              <p className="text-xs inline-block mx-2">{`投稿日: ${postDate}`}</p>
              <p className="text-xs inline-block mx-2">{`更新日: ${updateDate}`}</p>
              <h1 className="text-2xl">{blog.title} </h1>
            </div>
            <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }}></div>
          </section>
        </div>
      </main>
    </>
  );
}
