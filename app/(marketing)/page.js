import logo from "@/assets/logo.jpg";
import Link from "next/link";

export default function HomePage() {
  return (
    <div id="home">
      <img src={logo.src} alt="A newspaper" />
      <h1>Your Stories, Your Voice</h1>
      <p>
        Welcome to Solo Narrative, my personal blog space where my unique voice
        shines through every post.
      </p>

      <p>
        Here, you’ll find a collection of engaging stories, insightful
        reflections, and thought-provoking ideas that resonate with readers from
        all walks of life. Whether you’re seeking inspiration, knowledge, or a
        moment of connection, Solo Narrative is your destination for authentic
        and compelling content.
      </p>

      <p>
        Join me as we explore the world through the lens of my personal
        experience, one blog at a time. Your journey, your narrative, awaits.
      </p>

      <p>
        <Link href="/blogs">Read my blogs</Link>
      </p>
    </div>
  );
}
