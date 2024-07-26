import GoBack from "@/components/go-back";

export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <br></br>
      <br></br>
      <GoBack />
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
