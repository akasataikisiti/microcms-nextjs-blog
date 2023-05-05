import { client, cmsBlog, getPost } from "@/libs/client";
import PostBody from "@/app/components/postbody";

// 静的生成のためのパスを指定します
export async function generateStatisParams() {}

export default async function BlogId({ params }) {
  const id = params.id;
  const post = await getPost(id);
  const body = post.body;
  return (
    <>
      <div className="relative gb-gray-100 min-h-[calc(100vh-110px)] overflow-y-auto">
        <main className="relative flex justify-start gap-4 bg-gray-100">
          <div className="w-2/12">
            <h1>test string</h1>
          </div>
          <PostBody post={post} />
          <div className="relative">
            <div className="f-hull">{/* <JumpToHeadings body={body} /> */}</div>
          </div>
        </main>
      </div>
    </>
  );
}
