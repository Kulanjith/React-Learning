import React from 'react'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'


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
                {users.length && users.map((user)=>{
                    return(
                        <tbody key={user.id}>
                            <tr>
                            <td>{user.id}</td>
                            <td><img className="avatar" src={user.avatar} alt="profile" style={{cursor:'pointer'}}/></td>
                            <td> {user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td> active</td>
                            <td> <Link to={`/users/${user.id}`}> view profile </Link></td>
                            {/* <td><FcAutomatic style={{color:'red', cursor:'pointer'}}/></td> */}
                            </tr>
                        </tbody>
                    )
                })}
                
            </Table>
        </div>
    )
}
