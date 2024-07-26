import BlogsList from "@/components/blogs-list";
import { getAllBlogs } from "@/lib/blogs";

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <>
      <br></br>
      <br></br>
      <BlogsList blogs={blogs} />
    </>
  );
}
