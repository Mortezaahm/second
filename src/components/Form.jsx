import React, { useState } from 'react'


function Form() {
    //const [firstName , setFirstName] = useState('');
    //const [email , setEmail] = useState('');
    const [people, setPeople] = useState ({firstname: "", email: "", age: ""})
    const [user , setUser] = useState([]);
    //console.log(user);

    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPeople({...people, [name]: value})
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        if (people.firstname && people.email && people.age) {
            const newPeople = {...people, id: new Date().getTime().toString()};
            setUser([...user, newPeople]);
            setPeople({firstname: "", email:"", age:""});
        }
    }

  return (
    <>
    <form onSubmit={handelSubmit}>
        <div className="form-group">
            <input type="text"
             name='firstname' 
             placeholder='First Name'
             value={people.firstname}
             onChange={handelChange}
            />
        </div>
        <div className="form-group">
            <input type="email" 
            name='email' 
            placeholder='Email'
            value={people.email}
            onChange={handelChange} 
            />
        </div>
        <div className="form-group">
            <input type="text" 
            name='age' 
            placeholder='Age'
            value={people.age}
            onChange={handelChange} 
            />
        </div>
        <div className="form-group">
            <button type='submit' className='btn' onClick={handelSubmit}>Create User</button>
        </div>
    </form>
    {
        user.map ((item)=>{
            const {id, firstname, email, age} = item;
            return (
                <div className='users' key={id}>
                <h2>{firstname}</h2>
                <h2>{age}</h2>
                <h2>{email}</h2>
                </div>
            )
            
        })
    }
    </>
  );
}

export default Form
