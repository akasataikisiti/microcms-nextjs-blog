"use client";
export default function PostBody({ post }) {
  return (
    <div className="p-4 min-h-[calc(100vh-150px)] w-6/12 bg-yellow-100 rounded-md my-3">
      <section className="blog-body">
        <div className="mb-6">
          <p className="text-xs inline-block mx-2">{`投稿日: ${post.createdAt}`}</p>
          <p className="text-xs inline-block mx-2">{`更新日: ${post.updatedAt}`}</p>
          <h1 className="text-2xl">{post.title} </h1>
        </div>
        <div
          className="[&_*]:break-all [&_code]:block [&_code]:bg-gray-200 [&_code]:rounded-md [&_code]:p-4 [&_code]:text-sm [&_code]:text-gray-800 [&_code]: "
          dangerouslySetInnerHTML={{ __html: `${post.body}` }}
        ></div>
      </section>
    </div>
  );
}
