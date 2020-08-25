import React from "react";
import Head from "next/head";
import BaseLayout from "../../components/layouts/BaseLayout";
import Meta from "../../components/Meta";
import { SearchOutlined } from "@material-ui/icons";

export default function index() {
  return (
    <BaseLayout>
      <Meta
        title="SharingHappiness.org | Product"
        description="Product description"
        url="https://sharinghappiness.org/prduct"
      />
      <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
        <div className="flex mb-4">Product</div>
      </div>
    </BaseLayout>
  );
}
