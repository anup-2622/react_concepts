import React from "react";
import emojipedia from "./emojipedia";
import EmojiCard from "./EmojiCard";
import Higheorder from "./Higherorder";

// console.log(emojipedia);
function Emoji() {
  return (
    <div className="w-full font-serif text-lg text-center bg-green-600 ">
      <h2>Emoji Meaning</h2>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {emojipedia.map((emoji) => (
          <EmojiCard key={emoji.id} data={emoji} />
        ))}
      </div>
      <Higheorder/>
    </div>
  );
}

export default Emoji;
