import { signIn } from "@/lib/auth";

export default async function Login() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="">
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
            <h1 className="text-center">Login to your Nishow account to access more features.</h1>
            <div className="p-3"></div>
            <button className="shadow-xs mb-6 h-12 w-52 bg-indigo-600 text-center text-base font-semibold text-white transition-all duration-700 hover:bg-indigo-800">
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
