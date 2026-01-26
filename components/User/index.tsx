import Image from "next/image";
import Link from "next/link";
import { auth } from "../../lib/auth";

export default async function User() {
  const session = await auth();
  const user = session?.user;

  return (
    <>
      <li className="group relative mt-4">
        {user?.image ? (
          <div className="flex">
            <Image
              src={user?.image ?? "/placeholder-user.jpg"}
              width={46}
              height={36}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            />
          </div>
        ) : (
          <Link href={"/login"}>
            <p className=" flex cursor-pointer  items-center justify-between bg-primary px-8 py-4 text-base text-white ">
              Login
            </p>
          </Link>
        )}
      </li>
    </>
  );
}
