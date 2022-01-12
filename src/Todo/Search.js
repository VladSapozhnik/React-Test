import React, {useState} from "react";
import Items from "./Items";
import axios from "axios";

function Search () {

    const [countries, setCountries] = useState([])
    const getCountries = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                setCountries(response.data)
                console.log(response.data)
            })
    }

    return (
        <div>
            {
                countries.map((country, index) => {
                    return (
                        <Items country={country} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default Search