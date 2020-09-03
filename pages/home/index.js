import Link from "next/link";
import { SearchOutlined, Whatshot } from "@material-ui/icons";

import moment from "moment";
import BaseLayout from "../../components/layouts/BaseLayout";
import { Card } from "../../components/molecules";
import { useState } from "react";
import Meta from "../../components/Meta";
import { CheckIcon } from "../../components/atoms/Icons";
moment.locale("id");

export default function index() {
  const [data, setData] = useState([
    {
      id: 34,
      image:
        "https://images.unsplash.com/photo-1588779481061-1706804c9556?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800",
      category: "ART",
      title: "Bangkitnya para pahlawan negeri",
      avatar: "https://randomuser.me/api/portraits/men/63.jpg",
      username: "Kevin Mitnich",
      target: 50000000,
      collected: 5000000,
    },
    {
      id: 35,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      category: "MUSIC",
      title: "Music Indonesia melegenda di luar Negeri",
      avatar: "https://randomuser.me/api/portraits/women/11.jpg",
      username: "MadunSki",
      target: 120000000,
      collected: 60000000,
    },
    {
      id: 36,
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800",
      category: "WORLD",
      title: "Berita Dunia dalam amukan masa",
      avatar: "https://randomuser.me/api/portraits/women/74.jpg",
      username: "Gwen Station",
      target: 700000000,
      collected: 43000000,
    },
  ]);

  return (
    <BaseLayout>
      <Meta
        title="SharingHappiness.org | Social Fundraising Platform"
        description="Platform penggalangan dana untuk program dan inisiatif sosial dengan lebih mudah"
        url="https://sharinghappiness.org"
      />

      <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
        <div className="flex mb-4">
          <a className="block w-1/4 mr-4 my-auto" href="/">
            <img src="https://sharinghappiness.org/assets/img/logo.png" />
          </a>
          <div className="relative w-3/4 mx-auto text-gray-600">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-8 rounded-lg text-sm appearance-none focus:outline-none w-full"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
              <SearchOutlined />
            </button>
          </div>
        </div>
        <div className="mb-3">
          <h1 className="text-3xl font-bold">Today</h1>
          <p className="text-sm text-gray-500 uppercase font-bold">
            {moment().format("DD, MMMM ")}
          </p>
        </div>
        <div className="mb-5">
          <Link href="/[slug]" as={`/${"slug-campaign-1"}`}>
            <a>
              <Card
                size="lg"
                background="https://sharinghappiness.imgix.net/files/programgalleries/f679c878dbd0dcf6d77a58bd6ba0e84f-20190513071715.jpg"
                title="Bangun Teras Tahfizh Untuk Pemuda Penghapal Qur'an"
                avatar="https://randomuser.me/api/portraits/women/74.jpg"
                avatarname="Ilman manarul qori"
                funded={"7K"}
              />
            </a>
          </Link>
        </div>
        <div className="mb-5">
          <Link href="/[slug]" as={`/${"slug-campaign-2"}`}>
            <a>
              <Card
                size="lg"
                background="https://images.unsplash.com/photo-1593113616828-6f22bca04804?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800"
                title="Top 5 Cocktail Bars in&nbsp;NYC"
                avatar="https://randomuser.me/api/portraits/women/55.jpg"
                avatarname="Kayden Buckley"
                //   countliked={"7K"}
              />
            </a>
          </Link>
        </div>
        <div className="mb-3">
          <h1 className="text-3xl font-bold">Yesterday</h1>
          <p className="text-sm text-gray-500 uppercase font-bold">
            {moment().add(-1, "days").format("DD, MMMM ")}
          </p>
        </div>
        <div className="flex -mx-1 mb-5">
          <div className="w-1/2 px-1">
            <a
              href="#"
              className="flex items-end h-40 block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1593113598332-cd288d649433?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <h3 className="text-lg font-bold text-white leading-tight">
                DJ Dan Spins The Wheels
              </h3>
            </a>
            <a
              href="#"
              className="flex items-end h-56 block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1593113630400-ea4288922497?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <h3 className="text-lg font-bold text-white leading-tight">
                Top Travels Destinations For 2020
              </h3>
            </a>
          </div>
          <div className="w-1/2 px-1">
            <a
              href="#"
              className="flex items-end h-56 block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <h3 className="text-lg font-bold text-white leading-tight">
                M&S Launches New Makeup Range!
              </h3>
            </a>
            <a
              href="#"
              className="flex items-end h-40 block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <h3 className="text-lg font-bold text-white leading-tight">
                APT Set To Be A&nbsp;Ripper
              </h3>
            </a>
          </div>
        </div>
        <div className="mb-3">
          <h1 className="text-3xl font-bold">Previous</h1>
        </div>
        {data.map((item, key) => {
          return (
            <a
              href="#"
              key={item.id}
              className="flex items-center w-full transform transition-all duration-300 scale-100 hover:scale-95 border-b last:border-b-0 last:pb-0 pb-4 first:pt-0 pt-4"
            >
              <div
                className="block h-24 w-2/5 rounded overflow-hidden"
                style={{
                  background: `url(${item.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="pl-3 w-3/5">
                <div className="h-9 overflow-hidden mb-1">
                  <div
                    className="font-semibold leading-tight overflow-hidden text-sm"
                    style={{
                      textOverflow: "ellipsis",
                      wordWrap: "break-word",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      height: "inherit",
                    }}
                  >
                    {item.title}
                  </div>
                </div>
                <div className="flex w-full items-center text-xs text-gray-500 font-medium mb-1">
                  <div className="max-w-xs truncate">{item.username}</div>
                  <div className="flex rounded-full w-3 h-3 ml-2 bg-green-400 text-white items-center justify-center">
                    <CheckIcon style={{ width: 12, height: 12 }} />
                  </div>
                </div>
                <div className="h-1 bg-gray-300 rounded-full w-full mb-1">
                  <div
                    className="h-full bg-teal-400 rounded-full"
                    style={{
                      width: `${(item.collected / item.target) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs">
                  <div>Terkumpul</div>
                  <div>Sisa hari</div>
                </div>
                <div className="flex justify-between text-xs font-semibold">
                  <div>Rp {item.collected}</div>
                  <div>45</div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </BaseLayout>
  );
}
