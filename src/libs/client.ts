// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MicroCMSListResponse, createClient } from "microcms-js-sdk";

// console.log(process.env.SERVICE_DOMAIN);
export const client = createClient({
  // serviceDomain: "kskmyblog" || "",
  // apiKey: "9KdxtceUSxAYj2Y7ItvcRb0GELhMdtSKQv2k" || "",
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

export default async function getBlogList(): Promise<cmsBlog[]> {
  const response = await client.getList<cmsBlog>({ endpoint: "blog" });
  const blog = response.contents;
  console.log(blog);
  // console.log(blog.contents[0].preview);
  return blog;
}

// export default async function getBlogList(): Promise<
//   MicroCMSListResponse<Blog>
// > {
//   const blog = await client.getList<Blog>({ endpoint: "blog" });
//   console.log(blog);
//   // console.log(blog.contents[0].preview);
//   return blog;
// }

getBlogList()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
