import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../components/header";
import { nonImgUrl, tmpheaders } from "@/constants/constants";
import Brog from "@/components/blog";
import getBlogList, { cmsBlog } from "@/libs/client";

const inter = Inter({ subsets: ["latin"] });

//SSG
export async function getStaticProps() {
  const data = await getBlogList();
  console.log(data);
  return {
    props: {
      blogs: data,
    },
    revalidate: 60 * 60,
  };
}

export default function Home({ blogs }: { blogs: cmsBlog[] }) {
  return (
    <>
      <Head>
        <title>MyBlog</title>
      </Head>
      <Header categories={tmpheaders.categories} logoSrc={tmpheaders.logoSrc} />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="w-9/12">
          <div className="grid grid-cols-3 gap-4">
            {blogs.map((blog, i) => {
              return (
                <Brog
                  key={i}
                  id={blog.id}
                  title={blog.title}
                  date={blog.createdAt}
                  category={blog.category}
                  imgurl={blog.preview ? blog.preview.url : nonImgUrl}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
