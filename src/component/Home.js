 import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './Home.css';

function Home() {
  const [store, setStore] = useState({
    name: '',
    mobile: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStore(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/num', 
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(store)
      
    });

    let result = await response.json();
    console.log(result);
    // alert(result.message);
      alert("Sign Up Successful");
      window.location.reload();
  }

  return (
    <div className="radio-group-container">
      <div className="radio-group">
        <form onSubmit={handleSubmit}autoComplete="off">
          <h1 className="number"><i>Sign Up Page</i></h1>

          <label>
            Name:
            <input className="input"type="text"name="name"value={store.name}onChange={handleChange}required  autoComplete="off"/>
          </label>

          <br/>

          <label>
            Mobile:
            <input className="input"type="text"name="mobile"value={store.mobile}onChange={handleChange}required  autoComplete="off"/>
          </label>

          <br/>

          <label>
            Email:
            <input className="input"type="text"name="email"value={store.email}onChange={handleChange}required  autoComplete="off"/>
          </label>

          <br/>

          <label>
            Password:
            <div className="password-input-container">

              <input className="password-input"type={showPassword ? "text" : "password"}name="password"value={store.password}onChange={handleChange}required  autoComplete="off"/>
             
              <span className="password-toggle-icon"
                onClick={() => setShowPassword(prev => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                role="button"
                tabIndex={0}
                on={e => { if (e.key === 'Enter') setShowPassword(prev => !prev) }}>
                    
                {showPassword ? <FaEyeSlash /> : <FaEye />}

              </span>

            </div>
          </label>

          <br />

          <button className="text" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;




