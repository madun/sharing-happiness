import React from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import Head from "next/head";

export default function index() {
  return (
    <BaseLayout>
      <Head>
        <title>Account</title>
        <meta property="og:title" content="Account" key="account" />
      </Head>
      Account
    </BaseLayout>
  );
}
