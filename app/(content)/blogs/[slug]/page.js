import { notFound } from "next/navigation";

import Link from "next/link";
import { getBlogsItem } from "@/lib/blogs";

export default async function BlogDetailsPage({ params }) {
  const blogSlug = params.slug;
  const blogItem = await getBlogsItem(blogSlug);

  const formattedContent = blogItem.content.replace(/\n/g, "<br />");

  if (!blogItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/blogs/${blogItem.slug}/image`}>
          <img src={`/images/news/${blogItem.image}`} />
        </Link>
        <h1>{blogItem.title}</h1>
        <time dateTime={blogItem.date}>{blogItem.date}</time>
      </header>
      <p dangerouslySetInnerHTML={{ __html: formattedContent }} />
    </article>
  );
}
