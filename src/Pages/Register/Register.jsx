import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Register.module.css"
import RegisterImg from '../../assets/Images/RegisterImg.png'


const Register = () => {
const [formData, setFormData] = useState({
  name: "",
  email: "",
  mobile: "",
  userName: "",
  isAgreed: false
});
const navigate = useNavigate();
const inputName = useRef()
const inputEmail = useRef()
const inputMobile = useRef()
const inputuserName = useRef()

const [error, setError] = useState({})

const handleChnage = (e) =>{
setFormData({...formData, [e.target.name]: e.target.value})
}

const handleSubmit = (e) =>{
  console.log(formData)
  e.preventDefault()
  const error = {}
  if(!formData.name.length){
    error.name = 'Name Required'
    inputName.current.style.border = "2px solid red"
  }
  if(!formData.mobile.trim().length){
    error.mobile = 'Mobile Required'
    inputMobile.current.style.border = "2px solid red"
  }
  if(!formData.email.trim().length){
    error.email = 'Email Required'
    inputEmail.current.style.border = "2px solid red"
  }
  if(!formData.userName.trim().length){
    error.userName = 'Username Required'
    inputuserName.current.style.border = "2px solid red"
  }
  if(!formData.isAgreed){
    error.isAgreed = 'Terms required'
  }
  setError(error)
  if (!Object.keys(error).length) {
    localStorage.setItem("userData", JSON.stringify(formData));
    navigate("/genre");
}
  }

  useEffect(()=>{
    console.log(error)
  },[error])

  return (
 <>
 <div id={styles.register}>
<div id={styles.image}><img src={RegisterImg} /></div>
<div className={styles.form}>
  <h1>Super App</h1>
  <span>create your new account</span><br /><br />
  <form action="">
  <input type="text" className={styles.box} name="name" placeholder='Name' ref={inputName} onChange={(e)=>handleChnage(e)}/>
  {error.name ? <p className={styles.error}>{error.name}</p> :<></>}
  <br/><input type="text" className={styles.box} name="userName" placeholder='Username' ref={inputuserName} onChange={(e)=>handleChnage(e)} />
  {error.userName ? <p className={styles.error}>{error.userName}</p> :<></>}
  <br/><input type="text" className={styles.box} name="email" placeholder='Email' ref={inputEmail} onChange={(e)=>handleChnage(e)} />
  {error.email ? <p className={styles.error}>{error.email}</p> :<></>}
  <br/><input type="tel" className={styles.box} name="mobile" placeholder='Mobile' ref={inputMobile} onChange={(e)=>handleChnage(e)}/>
  {error.mobile ? <p className={styles.error}>{error.mobile}</p> :<></>}
  <br /><span className={styles.check}><input type="checkbox" name="isAgreed" onChange={(e)=>setFormData({...formData, [e.target.name]: e.target.checked})} />Share my registration data with Superapp</span>
  <br /><br/>{error.isAgreed ? <p className={styles.error}>{error.isAgreed}</p> :<></>}
<br /><br />
  <button onClick={handleSubmit}>SIGN Up</button>
  <br /><br />
  </form>
  <p>
    By clicking on Sign up. you agree to Superapp <span className={styles.para}>Terms and  <br /> conditions of use</span><br /><br />
    To learn more about how Superapp collects, uses, shares and <br /> protects your personal data plaese head Superapp<span className={styles.para}>Privacy <br /> Policy</span> 
  </p>
</div>
  </div>
 </>
  )
}

export default Register
