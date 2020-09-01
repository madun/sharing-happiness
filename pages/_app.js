import "../styles/index.css";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <div className="min-w-screen bg-gray-200 flex items-center justify-center overflow-hidden md:h-screen">
        <div className="bg-white text-gray-800 relative flex max-w-md w-full md:h-screen">
          <Component {...pageProps} />
        </div>
      </div>
    </CookiesProvider>
  );
}

export default MyApp;
