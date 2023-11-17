/*
    Steps to finish project
    1. Get data from API
        --> Strore first 3 Gifs from the response

    2. Pass data to GifList component as props
        --> Gif is is a UL with a LI for each gif
        
    3. Implement GifSearch component
        --> Is a form which sends a request to the Giphy API
          -> to be a controlled form, the value of the input should be saved to state
            -> the state should be updated when a user types in the input field
            -> the callback prop should invoke the fetch function
              -> the fetch function should pass the search term to the query string
                -> the fetch function should pass the results to the callback prop
    
    4. Test and commit



*/






import React, {useState, useEffect} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const API_KEY = "IvKBlRjGHJN2rmcZIgeZX29vkQGuxhKk";
const API_LINK = `https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${API_KEY}&rating=g`




function GifListContainer() {


    const [gifs, setGifs] = useState([])



    function getData() {
        fetch(API_LINK)
        .then(resp => resp.json())
        .then(data => {
            // Getting first 3 gifs from the response
            console.log(data.data.slice(0, 3));
            setGifs(data.data.slice(0, 3));

        })
    }



    useEffect(() => {
        getData()
    }, [])


    // // Creating function to handle search term
    const onSubmit = async (query) => {
        // Use the query to fetch data
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=3`);
        const data = await response.json();
        // Do something with the data...
        setGifs(data.data);
    };


  return (
    <div>
    <GifSearch onSubmit={onSubmit} />
    <GifList gifs={gifs}/>
    </div>
  );
}

export default GifListContainer;