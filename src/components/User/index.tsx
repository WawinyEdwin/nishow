"use client";
import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

export default async function User() {
  let session = await auth();
  let user = session?.user;

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
            {/* <form
              action={async () => {
                // "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className=" flex cursor-pointer  items-center justify-between bg-primary px- py-4 text-base text-white "
              >
                Sign Out
              </button> */}
            {/* </form> */}
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
