import React from "react";

function EmojiCard(props){
    console.log(props.data);
    return (
        <div className="rounded  bg-lime-200">
            <p className="text-3xl">{props.data.emoji}</p>
            <h4 className="font-mono text-xl">{props.data.name}</h4>
            <p>
                {props.data.meaning}
            </p>
        </div>
    )
}
export default EmojiCard