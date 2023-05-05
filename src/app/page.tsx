import { getBlogList } from "@/libs/client";
import HomePage from "./home-page";

export const metadata = {
  title: "MyBlog",
};

export default async function Page() {
  const blogs = await getBlogList();
  return <HomePage blogs={blogs} />;
}
