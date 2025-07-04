 import React, { useState } from 'react';

function Text() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/up', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    alert(result.message);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <h2>Sign Up</h2>
      <label>
       <b>Name ➞</b>
        <input type="text"name="name"value={formData.name}onChange={handleChange}required/>
      </label>

      <br /><br/>

      <label>
        <b>Mobile ➞</b>
        <input type="number"name="mobile"value={formData.mobile}onChange={handleChange}required />
      </label>

      <br /><br />
      <label>
        <b>Email ➞</b>
        <input type="text"name="email"value={formData.email}onChange={handleChange}required />
      </label>
      <br></br>

      <label>
        <b>Password ➞</b>
        <input type="text"name="password"value={formData.password}onChange={handleChange}required />
      </label>
      
      
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Text;