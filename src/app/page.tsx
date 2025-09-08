import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <Container>
          <div className="py-8">
            <p className="text-gray-600 mb-6">Bienvenue sur le blog de Partenar, votre source d'information sur les partenariats entre marques et créateurs de contenu.</p>
            <h1 className="text-2xl font-bold text-gray-900">Article à la une</h1>
          </div>
          <div className="pb-8">
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          </div>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </main>
    </>
  );
}
