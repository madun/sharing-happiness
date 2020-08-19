import React from "react";
import Head from "next/head";
import BaseLayout from "../../components/layouts/BaseLayout";

export default function index() {
  return (
    <BaseLayout>
      <Head>
        <title>Product</title>
        <meta property="og:title" content="Product" key="product" />
      </Head>
      product
    </BaseLayout>
  );
}
