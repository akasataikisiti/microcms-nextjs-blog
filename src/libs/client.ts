// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || "",
  apiKey: process.env.API_KEY || "",
});

export type cmsBlog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  category: string;
  preview: {
    url: string;
    height: number;
    width: number;
  };
};

export async function getBlogList(): Promise<cmsBlog[]> {
  const response = await client.getList<cmsBlog>({ endpoint: "blog" });
  const blog = response.contents;
  // console.log(blog.contents[0].preview);
  return blog;
}
//
// データをテンプレートに受け渡す部分の処理を記述します
export async function getPost(id: string): Promise<cmsBlog> {
  const data: cmsBlog = await client.get({ endpoint: "blog", contentId: id });

  return data;
}

// getBlogList()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
