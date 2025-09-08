import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="mb-12">
      <div className="mb-12 rounded-lg overflow-hidden shadow-sm">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
        <div className="mb-8 md:mb-0">
          <h3 className="mb-6 text-2xl md:text-3xl leading-tight font-semibold text-gray-900">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:text-primary transition-colors"
            >
              {title}
            </Link>
          </h3>
          <div className="text-gray-500 text-sm uppercase tracking-wide font-medium">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-gray-600">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
