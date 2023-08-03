import React, {useState, useEffect} from 'react';
import { data } from './data';
const url = "https://api.github.com/users";


function App() {

  const [users, setUsers] = useState([]);

  const getUser = async() => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }

  useEffect(()=>{
    getUser();
  },[])

  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(()=>{
     window.addEventListener ("resize", checkSize);
     return ()=>{
      window.removeEventListener("resize", checkSize)
     }
  })


  const [name, setName] = useState(data);

  const selectItem = (id) => {
    const newItem = name.filter((item)=> item.id === id);
    setName(newItem)
  }

  const removeItem = (id) => {
    const newItem = name.filter((item)=> item.id !== id);
    setName(newItem)
  }

  const [person, setPerson] = useState({
    name:"Morteza",
    age: 36,
    message: "Hello"
  });

  const changeMsg = () => {
    setPerson({...person, message:"Develop everyday..."})
  }

  return (
    <>
    <h2>GitHub Users</h2>
    <ul>
    {
      users.map((user)=>{
        const {id, login, avatar_url, html_url} = user;
        return (
          <li key={id}>
            <img src= {avatar_url} alt={login} />
            <div>
              <h2>{login}</h2>
              <a href={html_url}>Profile</a>
            </div>
          </li>
        )

      })
    }
    </ul>
      {
        name.map((item) => { 
          const {id, name} = item;
          return (
            <div className="list" key={id}>
              <h2>{name}</h2>
              <div className="btnArrange">
                <button className="select" onClick={()=>selectItem(id)}>Select this one</button>
                <button className="remove" onClick={()=>removeItem(id)}>Remove Item</button>
              </div>
            </div>
          );

        })
      }
      <button className="btn" onClick={()=>setName([])}>ClearList</button>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button className="btn" onClick={changeMsg}>Change Message</button>
      <h2>Window Width</h2>
      <h2>{size} px</h2>
    </>
  );
}

export default App;
