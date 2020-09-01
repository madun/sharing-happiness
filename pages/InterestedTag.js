import React, { useState } from "react";
import categoryList from "../category-list.json";
import { CheckIcon } from "../components/atoms/Icons";

export default function InterestedTag({ setItem }) {
  const updatedCategory = categoryList.map((obj) => ({ ...obj, check: false }));
  const [categories, setCategory] = useState(updatedCategory);

  const baseTag =
    "relative rounded shadow px-4 py-2 text-sm cursor-pointer m-2 transform transition-all duration-300 hover:scale-95";
  const activeTag = "text-white bg-red-500 scale-95";
  const defaultTag = "text-gray-700 bg-gray-300 scale-100";

  function setActiveCategory(item) {
    const filtered = categories.map((category) =>
      category.id === item.id
        ? { ...category, check: !category.check }
        : category
    );
    setCategory(filtered);
  }

  function saveCategories() {
    const checked = categories.filter((category) => category.check === true);

    // console.log("checked", checked);
    // localStorage.setItem("interested", JSON.stringify(checked));
    setItem(checked);
  }

  return (
    <div className="relative flex flex-1 flex-col px-5">
      <div className="flex-2">
        <div className="flex my-4">
          <a className="block w-1/4 mr-4 my-auto" href="/">
            <img src="https://sharinghappiness.org/assets/img/logo.png" />
          </a>
        </div>
        <div className="font-bold text-2xl text-center mt-4">
          Dive deeper on categories that matter to you.
        </div>
        <div className="font-medium text-center mt-2">
          Select what you're into. We'll help you find great things to read.
        </div>
      </div>
      <div className="flex-4 overflow-y-auto mt-4">
        <div className="flex w-full flex-wrap">
          {categories.map((item, key) => {
            return (
              <div
                key={key}
                className={
                  item.check
                    ? [baseTag, activeTag].join(" ")
                    : [baseTag, defaultTag].join(" ")
                }
                onClick={() => setActiveCategory(item)}
              >
                <span>{item.title}</span>
                {item.check && (
                  <div className="absolute" style={{ top: -5, right: -10 }}>
                    <div className="rounded-full bg-teal-500 w-6 h-6 text-center">
                      <CheckIcon
                        style={{ width: 16, height: 16, color: "white" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1 px-2 text-center my-8 flex items-end">
        <button
          className="btn btn-primary btn-lg w-full"
          onClick={() => saveCategories()}
        >
          Ayo Mulai! 😊
        </button>
      </div>
    </div>
  );
}
