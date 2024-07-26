import Link from "next/link";

export default function BlogsList({ blogs }) {
  return (
    <ul className="news-list">
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link href={`/blogs/${blog.slug}`}>
            <img src={`/images/news/${blog.image}`} alt={blog.title} />
            <span style={{ fontFamily: "Josefin Sans" }}>{blog.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
