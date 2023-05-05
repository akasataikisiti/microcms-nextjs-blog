import { client, cmsBlog, getPost } from "@/libs/client";
import formatIsoToJst from "@/utility/timeconvert";
import { usePathname } from "next/navigation";
// import JumpToHeadings from "@/app/components/jumpToHeadings";
import PostBody from "@/app/components/postbody";

// 静的生成のためのパスを指定します
export async function generateStatisParams() {}

export default async function BlogId({ params }) {
  const id = params.id;
  const post = await getPost(id);
  const body = post.body;
  // console.log(body);
  return (
    <>
      <div className="relative bg-teal-400 h-auto overflow-y-auto">
        <main className="relative flex top-28 justify-start gap-4 bg-gray-100">
          <div className="w-2/12">
            <h1>test string</h1>
          </div>
          <PostBody post={post} />
          <div className="relative">
            <div className="fixed p-4 w-3/12 h-full">
              {/* <JumpToHeadings body={body} /> */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
