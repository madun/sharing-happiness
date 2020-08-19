import React from "react";
import Head from "next/head";
import BaseLayout from "../../components/layouts/BaseLayout";

export default function index() {
  return (
    <BaseLayout>
      <Head>
        <title>Inbox</title>
        <meta property="og:title" content="Inbox" key="inbox" />
      </Head>
      Inbox
    </BaseLayout>
  );
}
