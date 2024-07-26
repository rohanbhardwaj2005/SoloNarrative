"use client";

export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2>An error occured!</h2>
      <p>
        {error.message === "Invalid filter."
          ? "No blogs found for the selected period"
          : error.message}
      </p>
    </div>
  );
}
