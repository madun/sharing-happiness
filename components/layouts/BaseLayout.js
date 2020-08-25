import React, { useState } from "react";
import Router from "next/router";
import Navbar from "../organisms/Navbar";
import LoadingScreen from "../organisms/LoadingScreen";

const DONE_DURATION = 250;

export default function BaseLayout(props) {
  const [loading, setLoading] = React.useState(null);
  const [timeoutId, setTimeoutId] = React.useState(null);

  const onLoad = () => setLoading(true);
  const onDone = () => {
    setLoading(false);
    setTimeoutId(
      setTimeout(() => {
        setTimeoutId(null);
        setLoading(null);
      }, DONE_DURATION)
    );
  };

  React.useEffect(() => {
    Router.events.on("routeChangeStart", onLoad);
    Router.events.on("routeChangeComplete", onDone);
    Router.events.on("routeChangeError", onDone);

    return () => {
      Router.events.off("routeChangeStart", onLoad);
      Router.events.off("routeChangeComplete", onDone);
      Router.events.off("routeChangeError", onDone);
    };
  });

  React.useEffect(
    () => () => {
      if (timeoutId) clearTimeout(timeoutId);
    },
    [timeoutId]
  );

  return (
    <div className="flex-1 h-full">
      {loading && <LoadingScreen loading={loading} />}
      {/* <LoadingScreen loading={true} /> */}
      {!loading && props.children}
      <Navbar />
    </div>
  );
}
