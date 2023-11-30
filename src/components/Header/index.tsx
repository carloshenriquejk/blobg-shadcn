import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const Header = () => {
  return (
    <header className="border-b-[1px] border-b-zink-700">
      <Link href="/" className=" w-fit p-6 flex gap-4">
        <Avatar className="w-fit h-full">
          <AvatarImage src="/icon.svg" />
          <AvatarFallback>
            <strong>B</strong>
          </AvatarFallback>
        </Avatar>

        <div>
          <strong className="text-3xl">blob.g</strong>
          <p>Noticias do mundo </p>
        </div>
      </Link>
    </header>
  );
};
