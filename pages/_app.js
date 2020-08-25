import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-w-screen bg-gray-200 flex items-center justify-center overflow-hidden">
      <div className="bg-white text-gray-800 relative flex max-w-md w-full">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
