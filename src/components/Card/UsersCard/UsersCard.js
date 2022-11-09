import "./UsersCard.css"
import Axios from "axios";
import { useEffect, useState } from "react";
import CardComponent from "../CardComponent";


function UsersCard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        MethodGet()
    }, []);

    async function MethodGet() {
        let { data } = await Axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(data)
    }

    const mapUsers = users.map((item, i) =>
        <CardComponent
            key={i}
            image={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"}
            title={item.name}
            description={item.email}
        />)


    return (
        <div className="map">
            {mapUsers}
        </div>

    )
}

export default UsersCard;