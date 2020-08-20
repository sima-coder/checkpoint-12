import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
    const [listOfUser, setListOfUser] = useState( [] );
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
             );
            setListOfUser(result.data);
        };
        fetchData();
    }, []);

    return (
      <>
        <h1>List of users</h1>
        <ul>
          {listOfUser.map(user => (
            <li key={user.id}>
              <a href={user.website}>{user.name}</a>
            </li>
          ))}
        </ul>  
      </>  
    );
}

export default UserList;
