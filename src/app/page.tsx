import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { getAllPosts } from "../lib/api";
import Link from "next/link";
import Image from "next/image";
import DateFormatter from "./_components/date-formatter";

export default function Index() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-24">
        <Container>
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Blog</p>
            <h1 className="mx-auto mt-2 max-w-lg text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              Les <span className="gradient-text">actualités</span> des partenariats
            </h1>
          </div>

          {/* Featured Post */}
          {heroPost && (
            <article className="mb-20">
              <Link href={`/posts/${heroPost.slug}`} className="group block">
                <div className="relative aspect-[3/1] mb-6 rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src={heroPost.coverImage}
                    alt={heroPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-4">
                    <time className="text-sm text-gray-500">
                      <DateFormatter dateString={heroPost.date} />
                    </time>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      À la une
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {heroPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-4 line-clamp-2">
                    {heroPost.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                      {heroPost.author.name.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{heroPost.author.name}</span>
                  </div>
                </div>
              </Link>
            </article>
          )}

          {/* More Posts Grid */}
          {morePosts.length > 0 && (
            <section>
              <h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-8">Autres articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {morePosts.map((post) => (
                  <article key={post.slug}>
                    <Link href={`/posts/${post.slug}`} className="group block">
                      <div className="relative aspect-[16/9] mb-4 rounded-xl overflow-hidden bg-gray-100">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        <DateFormatter dateString={post.date} />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-xs">
                          {post.author.name.charAt(0)}
                        </div>
                        <span className="text-sm text-gray-700">{post.author.name}</span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          )}
        </Container>
      </main>
    </>
  );
}
