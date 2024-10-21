import { signIn } from "@/lib/auth";

export default async function Login() {
  return (
    <div className="flex min-h-screen items-start justify-center  md:items-center">
      <div className="card w-full max-w-sm">
        <div className="card-body">
          <form
            action={async () => {
              "use server";
              await signIn("google", {
                redirectTo: "/",
              });
            }}
            className="w-full"
          >
            <button className="shadow-xs mb-6 h-12 w-52 bg-indigo-600 text-center text-base font-semibold text-white transition-all duration-700 hover:bg-indigo-800">
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
