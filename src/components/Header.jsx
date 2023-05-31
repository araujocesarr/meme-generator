import React from "react";

export default function Header() {
  return (
    <header
      className="h-16 p-5 pr-9 
    bg-[linear-gradient(90deg,_#672280_1.18%,_#A626D3_100%)] to-purple-light
    shadow-header
    font-Karla text-white
    flex items-center"
    >
      <img
        src="src/assets/Troll Face.png"
        alt="logo"
        className="h-full mr-[7px]"
      />
      <h2 className="text-[1.25rem] font-bold font tracking-[-0.1em] mr-auto">
        Meme Generator
      </h2>
      <h4 className="text-sm font-medium">React - Project 4</h4>
    </header>
  );
}

// bg-[linear-gradient(90deg,_#672280_1.18%,_#A626D3_100%)]

//bg-gradient-to-r from-purple-dark from-[1.18%] to-purple-light
