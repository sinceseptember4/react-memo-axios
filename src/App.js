import axios from "axios";
import React, {useEffect, useState} from "react";
function App() {
  const [name, setName] = useState('')
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error))
  }, [])

  const handleChange = (e) => {
    setName(e.target.value)
  }
  
  const createNewUser = () => {
    axios.post('https://jsonplaceholder.typicode.com/users', {
      name: name
    })
    .then(response => {
      setUsers([...users, response.data])
    })
    .catch(error => {
      console.log(error);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => {
      console.log(response)
      setUsers(users.filter(user => user.id !== id))
    })
    .catch(error => console.log(error))
  }

  

  

  return (
  <div>
    <input value={name} onChange={handleChange} /><br />
    <button onClick={createNewUser}>作成</button>
      <ul>
    {users.map((user, index) => (
      <li key={index}>{user.name}:
        <button onClick={() => deleteUser(user.id)}>削除</button>
      </li>
    ))}
  </ul>
  </div>
  )
}

export default App;
