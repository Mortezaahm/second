import React, { useReducer, useState } from 'react';
import Modal from './Modal';
import {data} from '../data'

function Reducer() {

    const reducer = (state, action) => {
        if (action.type === 'ADD_ITEM') {
            const newPeople = [...state.people, action.payload]
            return{
                ...state,
                people: newPeople,
                isModalOpen: true,
                modalContent: "Item Added"
            }
        }
        if (action.type === 'NO_VALUE') {
            return{
                ...state,
                isModalOpen: true,
                modalContent: 'Please Enter Value'
            }
        }
        if (action.type === 'CLOSE_MODAL') {
            return{
                ...state,
                isModalOpen: false
            }
        }
        if (action.type === 'REMOVE_ITEM'){
            const newPeople = state.people.filter((person)=>
                person.id !== action.payload       
            )
            return {
                ...state,
                people: newPeople,
            }
        }
        throw new Error ('No matching Value');

    }

    const defaultState = {
        people: [],
        isModalOpen: false,
        modalContent: "Hello Mori",
    }
    
    const [name, setName] = useState("");
    //const [people, setPeople] = useState(data);
    //const [showModal, setShowModal] = useState(false);
    const [state, dispatch] = useReducer (reducer, defaultState);

    const handelSubmit = (e) => {
        e.preventDefault();
        if (name){
           const newItem = {id: new Date().getTime().toString(), name}
           dispatch ({type: "ADD_ITEM", payload: newItem})
           setName("")
        }else {
           dispatch({type: "NO_VALUE"})
        }
    }

    const closeModal = () => {
        dispatch({type: "CLOSE_MODAL"})
    }

  return (
    <>
        {state.isModalOpen
         && 
         <Modal 
         modalContent={state.modalContent}
         closeModal={closeModal}
         />}
        <form onSubmit={handelSubmit}>
            <div className="form-group">
                <input type="text"
                 value={name}
                 onChange={(e) => setName(e.target.value)} 
                />
            </div>

            <div className="form-group">
                <button type='submit' className='btn'>Add Item</button>
            </div>
        </form>

        <ul>
            {state.people.map((item) => {
                return (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <button className='btn' onClick={()=>dispatch({type:"REMOVE_ITEM", payload:item.id})}>Remove</button>
                    </li>
                )
            })}
        </ul>  







    </>
  );
}

export default Reducer
