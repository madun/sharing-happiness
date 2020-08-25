import React from "react";
import Head from "next/head";
import BaseLayout from "../../components/layouts/BaseLayout";
import Meta from "../../components/Meta";
import { SearchOutlined } from "@material-ui/icons";

export default function index() {
  return (
    <BaseLayout>
      <Meta
        title="SharingHappiness.org | Social Fundraising Platform"
        description="Platform penggalangan dana untuk program dan inisiatif sosial dengan lebih mudah"
        url="https://sharinghappiness.org"
      />

      <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto"></div>
    </BaseLayout>
  );
}
