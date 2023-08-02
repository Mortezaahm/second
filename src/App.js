import React, {useState} from 'react';
import { data } from './data';


function App() {

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
    name:"morteza",
    age: 36,
    message: "Hello"
  });

  const changeMsg = () => {
    setPerson({...person, message:"Develop everyday..."})
  }

  return (
    <>
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
    </>
  );
}

export default App;
