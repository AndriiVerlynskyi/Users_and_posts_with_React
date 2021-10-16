import React, {useState, useEffect} from 'react';
import userDetails from '../Components/UserDetails';
import UsersList from '../Components/UsersList';
// import PostsPage from ''

const usersPage = function UsersPage() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')      
        .then(res => {
            return res.json()
        })
        .then(data => {
            setUsers(data)
        })
    }, [])
    
    return (
      <div>
        {users && <UsersList users={users}/>}
      </div>
    )
};

export default usersPage