import sql from "better-sqlite3";

const db = sql("data.db");

export async function getAllBlogs() {
  const blogs = db.prepare("SELECT * FROM blogs").all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return blogs;
}

export async function getBlogsItem(slug) {
  const newsItem = db.prepare("SELECT * FROM blogs WHERE slug = ?").get(slug);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem;
}

export async function getLatestBlogs() {
  const latestBlogs = db
    .prepare("SELECT * FROM blogs ORDER BY date DESC LIMIT 3")
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestBlogs;
}

export async function getAvailableBlogsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM blogs")
    .all()
    .map((year) => year.year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return years;
}

export function getAvailableBlogsMonths(year) {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM blogs WHERE strftime('%Y', date) = ?",
    )
    .all(year)
    .map((month) => month.month);
}

export async function getBlogsForYear(year) {
  const blogs = db
    .prepare(
      "SELECT * FROM blogs WHERE strftime('%Y', date) = ? ORDER BY date DESC",
    )
    .all(year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return blogs;
}

export async function getBlogsForYearAndMonth(year, month) {
  const blogs = db
    .prepare(
      "SELECT * FROM blogs WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC",
    )
    .all(year, month);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return blogs;
}
