import React from "react";


function GifList({gifs}) {


    return  <ul>
                {gifs.map(gif => <li><img src={gif.images.original.url} alt="gif"/></li>)}
            </ul>
}


export default GifList;