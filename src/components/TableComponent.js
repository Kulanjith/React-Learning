import React from 'react'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TableItem = ({
        id,
        avatar,
        first_name,
        last_name,
        email
    }) => {

    return (
        <tbody key={id}>
            <tr>
                <td>{id}</td>
                <td><img className="avatar" src={avatar} alt="profile" style={{cursor:'pointer'}}/></td>
                <td> {first_name}</td>
                <td>{last_name}</td>
                <td>{email}</td>
                <td> active</td>
                <td> <Link to={`/users/${id}`}> view profile </Link></td>
                {/* <td><FcAutomatic style={{color:'red', cursor:'pointer'}}/></td> */}
            </tr>
        </tbody>
    );
}

export const TableComponent = ({users}) => {
    return (
        <div className="tablestyle">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Account</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>email</th>
                    <th>Status</th>
                    <th>View</th>
                    </tr>
                </thead>
                {users.length > 0 && users.map((user)=>{
                    return(
                        <TableItem 
                            key={user.id}
                            id={user.id}
                            avatar={user.avatar}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            email={user.email}
                        />
                    )
                })}
                
            </Table>
        </div>
    )
}
