import ModalBackDrop from "@/components/modal-backdrop";
import { getBlogsItem } from "@/lib/blogs";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({ params }) {
  const blogSlug = params.slug;
  const blogItem = await getBlogsItem(blogSlug);

  if (!blogItem) {
    notFound();
  }

  return (
    <>
      <ModalBackDrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${blogItem.image}`} alt={blogItem.title} />
        </div>
      </dialog>
    </>
  );
}
