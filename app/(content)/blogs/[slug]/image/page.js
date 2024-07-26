
import { getBlogsItem } from "@/lib/blogs";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
  const blogSlug = params.slug;
  const blogItem = await getBlogsItem(blogSlug);

  if (!blogItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${blogItem.image}`} alt={blogItem.title} />
    </div>
  );
}
