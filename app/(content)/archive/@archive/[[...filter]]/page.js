import Link from "next/link";

import { Suspense } from "react";

import BlogsList from "@/components/blogs-list";
import {
  getAvailableBlogsMonths,
  getAvailableBlogsYears,
  getBlogsForYear,
  getBlogsForYearAndMonth,
} from "@/lib/blogs";

async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableBlogsYears(0);
  let links = availableYears;

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableBlogsMonths(year).includes(month))
  ) {
    throw new Error("Invalid filter.");
  }

  if (year && !month) {
    links = getAvailableBlogsMonths(year).filter(
      (item, index) => getAvailableBlogsMonths(year).indexOf(item) === index,
    );
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredBlogs({ year, month }) {
  let blogs;

  if (year && !month) {
    blogs = await getBlogsForYear(year);
  } else if (year && month) {
    blogs = await getBlogsForYearAndMonth(year, month);
  }

  let blogsContent;

  if (blogs && blogs.length > 0) {
    blogsContent = <BlogsList blogs={blogs} />;
  }

  return blogsContent;
}

export default async function FilteredBlogsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      
      <Suspense fallback={<p>Loading blogs for the selected period...</p>}>
        <FilteredBlogs year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
