import React, { useState,useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


function AddTransaction() {
   

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const {addTransaction}=useContext(GlobalContext)
  const onsubmit=e=>{
      e.preventDefault()
      const newTransaction={
        id:Math.floor(Math.random()
        *100000000),
        text,
        amount:+amount
        
      }

      addTransaction(newTransaction)

    }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onsubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"
           name=""
           value={text}
            placeholder="Enter text.."
            onChange={(e)=>(setText(e.target.value))}
             />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense , positve -income)
          </label>
          <input
            type="number"
            name=""
            value={amount}
            onChange={(e)=>(setAmount(e.target.value))}
            placeholder="Enter amount.."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
