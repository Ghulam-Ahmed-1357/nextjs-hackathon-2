import { AppProps } from "next/app";
import { CartProvider } from "@/components/cartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;