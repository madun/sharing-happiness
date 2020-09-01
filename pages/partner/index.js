import React, { useState } from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import Head from "next/head";
import Meta from "../../components/Meta";
import Link from "next/link";
import { Card } from "../../components/molecules";

export default function index() {
  return (
    <BaseLayout>
      <Meta
        title="SharingHappiness.org | Partner"
        description="Partner description"
        url="https://sharinghappiness.org/prduct"
      />
      <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
        <div className="mb-5">
          <Link href="/[slug]" as={`/${"slug-campaign-1"}`}>
            <a>
              <Card
                size="lg"
                background="https://sharinghappiness.imgix.net/files/partners.jpeg"
                title="Happiness Collaborations"
                avatar="https://randomuser.me/api/portraits/women/74.jpg"
                avatarname="Ilman manarul qori"
                //   countliked={"7K"}
              />
            </a>
          </Link>
        </div>
      </div>
    </BaseLayout>
  );
}
