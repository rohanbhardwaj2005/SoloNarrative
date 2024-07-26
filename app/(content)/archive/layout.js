export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <br></br>
      <br></br>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
