import React, { useState } from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import Head from "next/head";

export default function index() {
  return (
    <BaseLayout>
      <Meta
        title="SharingHappiness.org | Partner"
        description="Partner description"
        url="https://sharinghappiness.org/prduct"
      />
      Partner
    </BaseLayout>
  );
}
