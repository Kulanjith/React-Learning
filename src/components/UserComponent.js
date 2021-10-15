import React from 'react'
import { useParams } from 'react-router';
import { FaUserCircle,  } from 'react-icons/fa';
import { MdEmail, MdHomeWork} from 'react-icons/md';
import { BsTelephoneFill} from 'react-icons/bs';
import {useState, useEffect} from 'react';

export const UserComponent = () => {

    const { id } = useParams();
    const [user, setUser] = useState({});
    
    useEffect(()=>{
        const getUser =  async() => {
            const user = await fetchUser(id);
            setUser(user.data);
        }
        getUser();
    },[id]);

    // fetch user
    const fetchUser = async (id) => {
       const res = await fetch(`https://reqres.in/api/users/${id}`)
       const data = await res.json();
       return data;
    }

    return (
        <div>
            <div className="profilehead">
                <h3> <FaUserCircle /> Personal Profile </h3>
                <hr className="horizonline"/>
            </div>
            <div className="firstpart">
                <img className="propicture" src={user.avatar} alt="profile"/>
                    <div className="fistinner">
                        <div className="firstpart">
                            <h1 style={{paddingLeft:'15%'}}>{user.first_name}</h1>
                            <h1 style={{paddingLeft:'3%'}}>{user.last_name}</h1>
                        </div>
                        <h5>Designation</h5>
                    </div>
            </div>
            <hr className="shorthorizonline"/>
            <div className="secondpart">
                <h6>Personal Information</h6>
                <div className="firstpart">
                    <h5><MdEmail/></h5>
                    <h5 style={{paddingLeft:"3%"}}>{user.email}</h5>
                </div>
                <div className="firstpart">
                    <h5><BsTelephoneFill/></h5>
                    <h5 style={{paddingLeft:"3%"}}> 0771234567 </h5>
                </div>
                <div className="firstpart">
                    <h5><MdHomeWork/></h5>
                    <h5 style={{paddingLeft:"3%"}}> No xx, xxxxxx xxxxx, xxxxx</h5>
                </div>
            </div>
            <hr className="shorthorizonline"/>
        </div>
    )
}
