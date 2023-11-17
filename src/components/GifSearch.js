import React, { useState } from 'react';


const GifSearch = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    
    // Handling Submit
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(query);
    };



    // Handling the input change
    const handleChange = event => {
        setQuery(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter a search term:
                <input type="text" value={query} onChange={handleChange} />
            </label>
            <button type="submit">Find Gifs</button>
        </form>
    );
};



export default GifSearch;