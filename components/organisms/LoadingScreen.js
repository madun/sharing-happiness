import React from "react";
import Lottie from "lottie-react-web";
import BaseLayout from "../../components/layouts/BaseLayout";
import plane from "../../assets/lottie/plane-loop.json";

export default function LoadingScreen(props) {
  return (
    <div
      className="flex w-full items-center justify-center max-w-md border"
      style={{ minHeight: "calc(-4rem + 100vh)" }}
    >
      <style jsx>
        {`
          .loading {
            opacity: 1;
            transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
            transition-duration: 8s, 0s;
          }
          .done {
            opacity: 0;
            transition-duration: ${props.duration}ms;
            transition-delay: 0s, ${props.duration}ms;
          }
        `}
      </style>
      <div
        className={
          props.loading === null ? "" : props.loading ? "loading" : "done"
        }
      >
        <Lottie
          width="260px"
          //   {...props}
          options={{
            animationData: plane,
          }}
        />
      </div>
    </div>
  );
}
