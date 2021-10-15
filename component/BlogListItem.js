import { format, parseISO } from "date-fns";
import Link from "next/link";

export default function BlogListItem({ slug, title, date, content }) {
  return (
    <div className="border border-purple-500 shadow hover:shadow-md hover:border-pink-600 rounded-md p-4 transition duration-500 ease-in">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="text-lg font-bold">{title}</a>
        </Link>
      </div>
      <div className="text-gray-400 text-xs">
        {format(parseISO(date), "MMMM do, uuu")}
      </div>
      <div>{content.substr(0, 300)}</div>
    </div>
  );
}
