import React from "react";
import Head from "next/head";
import getConfig from "next/config";

export default function Meta({ title, description, url }) {
  const { publicRuntimeConfig } = getConfig();

  return (
    <Head>
      <title>{title ? title : publicRuntimeConfig.COMPANY_NAME}</title>
      <meta
        name="title"
        content={title ? title : publicRuntimeConfig.COMPANY_NAME}
      />
      <meta
        name="description"
        content={
          description
            ? description
            : "SharingHappiness merupakan Platform Donasi dan Galang Dana social secara online dalam pengelolaan Yayasan Berbagi Bahagia. Kami menyediakan platform bagi pembuat proyek sosial baik personal maupun organisasi untuk mempresentasikan ide mereka kepada audiens yang terhubung di seluruh dunia agar semakin banyak orang yang dapat berbagi kebahagiaan."
        }
      />
      <meta
        name="keywords"
        content="sharinghappiness,donasi,donatur,kampanye,social crowdfunding"
      />
      <meta property="og:url" content={url ? url : "sharinghappiness.org"} />
      <meta property="og:type" content="article" />
      <meta
        property="og:site_name"
        content={publicRuntimeConfig.COMPANY_NAME}
      />
      <meta
        property="og:title"
        content={title ? title : publicRuntimeConfig.COMPANY_NAME}
      />
      <link
        rel="apple-touch-icon"
        href="https://sharinghappiness.org/assets/img/apple-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://sharinghappiness.org/assets/img/favicon.png"
      />
      <meta
        property="og:description"
        content={
          description
            ? description
            : "SharingHappiness merupakan Platform Donasi dan Galang Dana social secara online dalam pengelolaan Yayasan Berbagi Bahagia. Kami menyediakan platform bagi pembuat proyek sosial baik personal maupun organisasi untuk mempresentasikan ide mereka kepada audiens yang terhubung di seluruh dunia agar semakin banyak orang yang dapat berbagi kebahagiaan."
        }
      />
      <meta
        property="og:image"
        content={"https://sharinghappiness.org/assets/img/logo.png"}
      />
      <meta property="og:image:width" content="540" />
      <meta property="og:image:height" content="281" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={url ? url : "sharinghappiness.org"} />
      <meta
        name="twitter:description"
        content={
          description
            ? description
            : "SharingHappiness merupakan Platform Donasi dan Galang Dana social secara online dalam pengelolaan Yayasan Berbagi Bahagia. Kami menyediakan platform bagi pembuat proyek sosial baik personal maupun organisasi untuk mempresentasikan ide mereka kepada audiens yang terhubung di seluruh dunia agar semakin banyak orang yang dapat berbagi kebahagiaan."
        }
      />
      <meta
        name="twitter:title"
        content={title ? title : publicRuntimeConfig.COMPANY_NAME}
      />
      <meta
        name="twitter:image"
        content={"https://sharinghappiness.org/assets/img/logo.png"}
      />
    </Head>
  );
}
