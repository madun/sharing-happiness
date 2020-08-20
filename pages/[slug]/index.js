import { useRouter } from "next/router";
import StackLayout from "../../components/layouts/StackLayout";
import renderHTML from "react-render-html";
import dumy from "../../data-dumy.json";
import decode from "decode-html";
import Card from "../../components/molecules/Card";
import { useState } from "react";

export default function index() {
  const router = useRouter();
  const [showMore, setShowMore] = useState(false);
  return (
    <StackLayout title={dumy.title}>
      {/* <div>detail {router.query.slug}</div> */}
      <div className={showMore ? "" : "h-64 overflow-hidden"}>
        <div className="description">
          <Card
            size="lg"
            background={dumy.cover_picture.image_large_square}
            title={dumy.title}
            avatar={dumy.user.picture}
            avatarname={dumy.user.name}
          />
          {renderHTML(decode(dumy.description))}
        </div>
      </div>
      <div onClick={() => setShowMore(!showMore)} className="text-center mt-4">
        <span className="text-blue-500 font-bold py-2 px-4 cursor-pointer">
          {showMore ? "Show less" : "Show more"}
        </span>
      </div>
      <div className="mt-8">
        <h1 className="text-xl font-bold">Konten serupa</h1>
      </div>
    </StackLayout>
  );
}
