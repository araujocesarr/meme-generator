import React from "react";
import memesData from "../assets/memesData.js";

export default function Meme() {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const { url } = memesArray[randomNumber];
    console.log(randomNumber);
    console.log(memesArray);
    console.log(url);
  }
  getMemeImage();

  return (
    <main className="font-Karla p-9">
      <form
        className="
      grid grid-rows-2 grid-cols-2 gap-4 gap-y-4"
      >
        <input
          type="text"
          placeholder="Top text"
          className="indent-3 h-9 rounded-md border border-solid border-gray-300"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="indent-3 h-9 rounded-md border border-solid border-gray-300"
        />
        <button
          className="col-span-2 
        bg-[linear-gradient(90.41deg,_#711F8D_1.14%,_#A818DA_100%)] rounded-md
        text-white cursor-pointer"
        >
          Get a new meme image
        </button>
      </form>
    </main>
  );
}
