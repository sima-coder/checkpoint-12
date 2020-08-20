import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {

    const [geo, setGeo] = useState({lat : "", lng: ""});

    const [address, setAddress] = useState({street: "", suite: "", city: "", zipcode:"", geo: geo});
    
    const [company, setCompany] = useState({name:"", catchPhrase:"", bs: ""});

    const [user, setUser] = useState({
        fullname: "",
        username: "",
        email: "",
        address: address,
        phone:"",
        website:"",
        company: company 
    });

    const handleChangeGeo = event => {
        // console.log(event.target.value);
        setGeo({ ...geo, [event.target.name] : event.target.value });
    };

    const handleChangeAddress = event => {
        // console.log(event.target.value);
        setAddress({ ...address, [event.target.name] : event.target.value, geo: geo });
    };

    const handleChangeCompany = event => {
        // console.log(event.target.value);
        setCompany({ ...company, [event.target.name] : event.target.value });
    };

    const handleChange = event => {
        // console.log(event.target.value);
        setUser({ ...user, [event.target.name] : event.target.value, company: company, address: address });
    }; 

    const handleSubmit = event => {
        event.preventDefault();
       
        axios
        .post(`https://jsonplaceholder.typicode.com/users`, {user} )
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    };
   
    return (
        
        <form onSubmit={e => handleSubmit(e)}>
            <fieldset>
                <legend>User Form</legend>
                <div>
                    <label>Person Name :</label>
                    <input type="text" name="fullname" onChange={e => handleChange(e)} />
                </div>
                <div>
                    <label>Userame :</label>
                    <input type="text" name="username" onChange={e => handleChange(e)} />
                </div>
                <div>
                    <label>Email :</label>
                    <input type="email" name="email" onChange={e => handleChange(e)} />
                </div>
                <div className="input">
                    <label>Address:</label>
                    <br/>
                    <input type="text" name="street" placeholder="Street" onChange={e => handleChangeAddress(e)} />
                    <input type="text" name="suite" placeholder="Suite" onChange={e => handleChangeAddress(e)} />
                    <input type="text" name="city" placeholder="City" onChange={e => handleChangeAddress(e)} />
                    <input type="text" name="zipcode" placeholder="Zipcode" onChange={e => handleChangeAddress(e)} />
                    <input type="text" name="lat" placeholder="geo-lat" onChange={e => handleChangeGeo(e)}  /> 
                    <input type="text" name="lng" placeholder="geo-lng" onChange={e => handleChangeGeo(e)} />

                </div>
                <div>
                    <label>Phone :</label>
                    <input type="text" name="phone" onChange={e => handleChange(e)} />
                </div>
                <div>
                    <label>Website :</label>
                    <input type="text" name="website" onChange={e => handleChange(e)} />
                </div>
                <div className="input">
                    <label>Company :</label>
                    <br/>
                    <input type="text" name="name"  placeholder="Company name" onChange={e => handleChangeCompany(e)} />
                    <input type="text" name="catchPhrase"  placeholder="Company catchPhrase" onChange={e => handleChangeCompany(e)} />
                    <input type="text" name="bs"  placeholder="Company bs" onChange={e => handleChangeCompany(e)} />
                </div>

                <button type="submit">Add</button>
           </fieldset>
        </form>
    );
}

export default UserForm;
