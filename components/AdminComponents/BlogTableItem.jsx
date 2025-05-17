import { CircleUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogTableItem({ mongoId, authorImg, title, author }) {
  return (
    <tr className="bg-black border-b">
      <td className="hidden sm:table-cell px-6 py-4 font-medium text-gray-100 whitespace-nowrap">
        <Link href={`/blogs/${mongoId}`}>
          <div className="flex items-center gap-2">
            {authorImg ? (
              <Image src={authorImg} alt="Author" width={32} height={32} />
            ) : (
              <CircleUser />
            )}
            <p>{author ? author : "No author"}</p>
          </div>
        </Link>
      </td>
      <td className="px-6 py-4 text-gray-300">{title || "no title"}</td>
      <td className="px-6 py-4 text-gray-300">11 Jan 2025</td>
      <td className="px-6 py-4 hover:text-gray-300 cursor-pointer">x</td>
    </tr>
  );
}
