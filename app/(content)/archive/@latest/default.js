import BlogsList from "@/components/blogs-list";
import { getLatestBlogs } from "@/lib/blogs";

export default async function LatestBlogsPage() {
  const latestBlogs = await getLatestBlogs();

  return (
    <>
      <h2>Latest Blogs</h2>
      <br></br>
      <BlogsList blogs={latestBlogs} />
    </>
  );
}
