import { Header } from './components/Header';
import { TableComponent } from './components/TableComponent';
import {useState, useEffect} from 'react'
import { Pagination } from './components/Pagination';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import { UserComponent } from './components/UserComponent';

function App() {

  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  
  useEffect(()=>{
      const getUsers = async ()=>{
         const userList = await fetchUsers();
         setUsers(userList.data);
         setTotalPages(userList.total_pages);
      }
      getUsers();
  },[pageNumber]);
  
  // fetch users
  const fetchUsers = async() =>{
    const res = await fetch(`https://reqres.in/api/users?page=${pageNumber}`);
    const data = await res.json();
    return data;
  }
  
  // pagination
  const paginate = (num) => {
      setPageNumber(num);
  }
   
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={"/users/:id"}>
            <Header text1="User" text2="Profiles"/>
            <UserComponent/>
          </Route>
          <Route path="/">
            <Header text1="User" text2="Management"/>
            <TableComponent users={users}/>
            <Pagination totalpages={totalPages} fetchUsers={paginate}/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
