import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/file-based-routing">File-based Routing</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}
