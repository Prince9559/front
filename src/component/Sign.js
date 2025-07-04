 import React, { useState } from "react";

function Sign() {
  const [number, setNumber] = useState({
    name: '',
    mobile: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNumber(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/page', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(number)
    });


const result = await response.json();
console.log(result);
alert(result.message);


  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Page</h1>
        
        <label>
          <b>Name :</b>
          <input type="text" name="name" value={number.name} onChange={handleChange} required/>
        </label>
        <br />

        <label>
          <b>Mobile :</b>
          <input type="text" name="mobile" value={number.mobile} onChange={handleChange} required/>
        </label>
        <br />

        <label>
          <b>Email :</b>
          <input type="text" name="email" value={number.email} onChange={handleChange} required/>
        </label>
        <br />

        <label>
          <b>Password :</b>
          <input type="password" name="password" value={number.password} onChange={handleChange} required/>
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Sign;
