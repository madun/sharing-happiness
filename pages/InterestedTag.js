import React, { useState } from "react";
import categoryList from "../category-list.json";
import { Tag } from "../components/molecules";
import sdgs from "../sdgs.json";

export default function InterestedTag({ setItem }) {
  const updatedCategorySdg = sdgs.map((item) => ({ ...item, check: false }));
  const updatedCategory = categoryList.map((obj) => ({ ...obj, check: false }));
  const [dataSdgs, setSdg] = useState(updatedCategorySdg);
  const [categories, setCategory] = useState(updatedCategory);
  const [sdgChecked, setSdgChecked] = useState(false);

  function setActiveCategory(item) {
    const filtered = categories.map((category) =>
      category.id === item.id
        ? { ...category, check: !category.check }
        : category
    );
    setCategory(filtered);
  }

  function setActiveCategorySdg(item) {
    const filtered = dataSdgs.map((sdgItem) =>
      sdgItem.id === item.id ? { ...sdgItem, check: !sdgItem.check } : sdgItem
    );
    setSdg(filtered);
  }

  function saveCategories() {
    const checkedCategory = categories.filter(
      (category) => category.check === true
    );
    const categoriesSdgs = dataSdgs.filter((sdgItem) => sdgItem.check === true);
    // localStorage.setItem("interested", JSON.stringify(checked));
    setItem(sdgChecked ? categoriesSdgs : checkedCategory);
  }

  function appendSdgChilds() {
    setSdg(sdgs); // set dafault
    setSdgChecked(!sdgChecked);
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
          Select what you're into. We'll help you find great things to make
          Impact!.
        </div>
      </div>
      <div className="flex-4 overflow-y-auto mt-4">
        <div className="flex w-full flex-wrap">
          <Tag
            active={sdgChecked}
            data={{ title: "SDGs" }}
            image="/sdg.png"
            onClick={() => appendSdgChilds()}
          />

          {dataSdgs.map((item, key) => {
            if (sdgChecked) {
              return (
                <Tag
                  key={key}
                  active={item.check ? true : false}
                  onClick={(data) => setActiveCategorySdg(data)}
                  data={item}
                />
              );
            }
            return null;
          })}

          {categories.map((item, key) => {
            if (!sdgChecked) {
              return (
                <Tag
                  key={key}
                  active={item.check ? true : false}
                  onClick={(data) => setActiveCategory(data)}
                  data={item}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
      <div className="flex-1 px-2 text-center my-8 flex items-end">
        <button
          className="btn btn-primary btn-lg w-full"
          onClick={() => saveCategories()}
        >
          Let's Start! 😊
        </button>
      </div>
    </div>
  );
}
