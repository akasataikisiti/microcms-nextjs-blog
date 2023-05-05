import { Inter } from "next/font/google";
import { nonImgUrl } from "@/constants/constants";
import Brog from "@/app/components/blog";
import { cmsBlog } from "@/libs/client";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage({ blogs }: { blogs: cmsBlog[] }) {
  return (
    <Suspense fallback={<div>loading</div>}>
      <div className="h-32"></div>
      <main
        className={`flex min-h-[calc(100vh-150px)] flex-col items-center justify-between ${inter.className}`}
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
    </Suspense>
  );
}
