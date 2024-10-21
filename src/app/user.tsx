import { auth, signOut } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

export default async function User() {
  let session = await auth();
  let user = session?.user;

  return (
    <>
      <li className="group relative mt-4">
        {user?.image ? (
          <Image
            src={user?.image ?? "/placeholder-user.jpg"}
            width={36}
            height={36}
            alt="Avatar"
            className="overflow-hidden rounded-full"
          />
        ) : (
          <Link href={"/login"}>
            <p className=" flex cursor-pointer  items-center justify-between bg-primary px-8 py-4 text-base text-white ">
              Login
            </p>
          </Link>
        )}
      </li>
      <li>
        <form
          action={async () => {
            // "use server";
            await signOut();
          }}
        >
          <button type="submit">Sign Out</button>
        </form>
      </li>
    </>
  );
}
