import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center">
      <div
        className="bg-white h-screen text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex"
        style={{
          width: "414px",
        }}
      >
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
