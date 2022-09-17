import React,{useState} from "react";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert (`Searching for ${keyword} definition`);
    }

    function handleKeywordChange(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" placeholder="Search for a word" onChange={handleKeywordChange}/>
            <input type="submit" />
        </form>
        </div>);
}