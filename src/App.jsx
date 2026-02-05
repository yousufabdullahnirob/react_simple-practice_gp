// cspell:ignore worksample
import { useState, useEffect } from 'react'
import User from './UserComponent.jsx'
import NavBar from './NavBar.jsx'
import From from './From.jsx'
export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.users))
      .catch(err => console.error("Failed to fetch users:", err));
  }, []);
  console.log(users);
  return (
    <>
    <NavBar/>
    <From/>
    
      <div className="flex justify-center flex-wrap flex gap-4">
        {
          users.map(user => <User key={user.id} userInfo={user} />)

        }
        
        </div>

    </>
  );
}
