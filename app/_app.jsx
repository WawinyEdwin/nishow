import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <SnackbarProvider
        autoHideDuration={1000}
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      > <Component {...pageProps} />
      </SnackbarProvider>
     
    </SessionProvider>
  );
}
