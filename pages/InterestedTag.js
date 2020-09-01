import React, { useState } from "react";
import categoryList from "../category-list.json";
import { Tag } from "../components/molecules";

export default function InterestedTag({ setItem }) {
  const updatedCategory = categoryList.map((obj) => ({ ...obj, check: false }));
  const [categories, setCategory] = useState(updatedCategory);

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
              <Tag
                key={key}
                active={item.check ? true : false}
                onClick={(data) => setActiveCategory(data)}
                data={item}
              />
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
