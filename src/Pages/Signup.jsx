import { useState } from 'react';
// import axios from 'axios';
import './CSS/Signup.css';

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // const handleSubmit = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:5000/api/signup", formData);
  //     alert(res.data.message);
  //   } catch (err) {
  //     alert(err.response?.data?.message || "Error occurred");
  //   }
  // };

  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div className="signup-fields">
          <input type="text" name="name" placeholder='Your Name' onChange={handleChange} />
          <input type="email" name="email" placeholder='Email Address' onChange={handleChange} />
          <input type="password" name="password" placeholder='Password' onChange={handleChange} />
        </div>
        <button >Continue</button>
        <p className='signup-login'>Already have an account? <span style={
          {cursor: 'pointer', color: 'blue'}
        } onClick={() => {
            window.location.href = '/login';
        }}>Login here</span></p>
        <div className="signup-agree">
          <input type='checkbox' id='terms' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
