export default function BlogDetailLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
