import "./Users.css"
import { useEffect, useState } from "react";
import axios from "axios";



function Users() {

    const [movie, setmovie] = useState([]);
    const [input, setimput] = useState("games");
    useEffect(() => {
        GetMethod();
    }, [input]);

    async function GetMethod() {
        let { data } = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=8e331135');
        setmovie(data.Search);
    }
    
    function onChangeInput(e) {
    // e.preventDefault();
        let result = e.target.value
        setimput(result)
        
    }
    function SearchMovie() {
      console.log(movie)

    }

    return (
          onChangeInput,
          SearchMovie

    )
}

export default Users;