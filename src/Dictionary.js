import React,{useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionResponse); 

        
        let pexelsApiKey = "563492ad6f9170000100000187756afbbb2c4888b6740f993204d1f7";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
      
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();  
    }

    

    function handleKeywordChange(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if(loaded) {
return (
    <div className="Dictionary">
        <section>
        <form onSubmit={handleSubmit}>
            <input className="inputSearch"type="search" placeholder="Search for a word" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
            <input className="inputSubmit" type="submit" />
        </form>
        <div className="hint">
            suggested words: sunset, wine, yoga, plant...
        </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
        </div>);
    } else {
        load();
        return "Loading...";
    }

    
}