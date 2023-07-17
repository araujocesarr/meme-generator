import { useState } from "react";
import React from "react";
import memesData from "../assets/memesData.js";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage(event) {
    event.preventDefault();
    console.log(meme);
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
    console.log(meme);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

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
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Bottom text"
          className="indent-3 h-9 rounded-md border border-solid border-gray-300"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button
          onClick={getMemeImage}
          className="col-span-2 
        bg-[linear-gradient(90.41deg,_#711F8D_1.14%,_#A818DA_100%)] rounded-md
        text-white cursor-pointer"
        >
          Get a new meme image
        </button>
      </form>

      <div className="relative">
        <img
          src={meme.randomImage}
          alt=""
          className="max-w-full mt-5 rounded-lg"
        />

        <h2
          className="absolute w-4/5 
        text-center left-1/2 translate-x-[-50%]
        my-4 mx-0 py-0 px-1 top-0
        font-impact text-[2em]
        uppercase text-white
        tracking-[1px]"
        >
          {meme.topText}
        </h2>

        <h2
          className="absolute w-4/5 
        text-center left-1/2 translate-x-[-50%]
        my-4 mx-0 py-0 px-1 bottom-0
        font-impact text-[2em]
        uppercase text-white
        tracking-[1px]"
        >
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
}
