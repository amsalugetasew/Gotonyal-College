import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopMenu from '../TopMenu/TopMenu';
import "./contact.scss";
import Footer from '../Footer/Footer';
import MenuIndex from '../Menu/MenuIndex';
const Contact = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        coment: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };



    const [formError, setFormError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();  
        const newPerson = { ...data };
        if(data.firstName.trim().length===0){
            setFormError("First Name is required")
        }
        else if(data.lastName.trim().length===0){
            setFormError("Last Name is required")
        }
        else if(data.email.trim().length===0){
            setFormError("Email is required")
        }
        else if(data.phone.trim().length===0){
            setFormError("Phone Number is required")
        }
        else if(data.coment.trim().length===0){
            setFormError("Comment is required")
        }
        else{     
            try{
        await fetch("http://localhost:5000/users/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
            .catch(error => {
                window.alert(error);
                if (error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
                ) {
                    setError(error.response.data.message);
                }
                return;
            });

        setData({ firstName: "", lastName: "", email: "",phone:"", coment: "" });
        navigate("/Home");
    }
    catch(error){
        if(error.response && 
            error.response.status >= 400 &&
            error.response.status <= 500
            ){
                setError(error.response.data.message);
            }
    }
    }
}
    return (
        <div className='contactTop'>
         <div className="contactTopmenu">
                <TopMenu />
            </div>
            <div className="menuContainer">
                <MenuIndex />
            </div>
        <div className="contact_container">
            <div className="contact_form_container">
                <div className="left">
                    <div className='h'>
                        <h6>Address</h6>
                        <h8>+251-582-110-481</h8>
                        <h8>+251-940-961-646</h8>
                        <h8> aragawm2016@gmail.com</h8>
                        
                    </div>
                    <h1><a href="https://www.google.com/maps/place/Gondar/@12.6142319,37.4290276,12.21z/data=!4m5!3m4!1s0x164328823d244edf:0x7826245358a8a65!8m2!3d12.6030181!4d37.4521319" target="_blank" rel="noopener noreferrer">Google Map</a></h1>
                </div>
                <div className="right">
                    <form className="form_container" onSubmit={handleSubmit}>
                        <h1>Contact Us</h1>
                        <input
                            type="text"
                            placeholder="Abel"
                            name="firstName"
                            value={data.firstName}
                            className="input"
                            onChange={handleChange}
                        />
                        {/* <p className='error_msg'>{formError.firstName}</p> */}
                        <input
                            type="text"
                            placeholder="Yonas"
                            name="lastName"
                            value={data.lastName}
                            className="input"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            name="email"
                            value={data.email}
                            className="input"
                            onChange={handleChange}
                        />
                         <input
                            type="text"
                            placeholder="+251-928-531-589"
                            name="phone"
                            value={data.phone}
                            className="input"
                            onChange={handleChange}
                        />
                        
                        <input
                            type="textarea"
                            placeholder="Coment"
                            name="coment"
                            value={data.coment}
                            className="input"
                            onChange={handleChange}
                        />
                        {formError && <div className="error_msg" id='error_msg'>{formError}</div>}
                        {error && <div className="error_msg">{error}</div>}
                        <button type='submit' className="green_btn">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
        {/* <div className="image">
                <Image />
            </div> */}
            <div className="bottom2">
                <Footer />
            </div>
        </div>
    )
}

export default Contact
