import React, { useState } from 'react'
import Axios from 'axios'
import Footer from '../components/footer'
// import Navbar from "../components/navbar"
import swal from 'sweetalert';
import "../App.css"
export default function ContactUs() {
    const [state, Setstate] = useState({
        name: "",
        email: "",
        number: "",
        lname: ""
    })
    const [name,set_name]= useState("")
    const [last_name,set_last_name]= useState("")
    const [email,set_email]= useState("")
    const [mobile,set_mobile]= useState("")
    const onHandleChange = (event) => {
        Setstate({
            [event.target.name]: event.target.value
        })
    }


    React.useEffect(()=>{
        // onSubmit()
    },[])
    
    const onSubmit = (e) => {
        e.preventDefault()
        Axios.post("http://192.168.29.232:5000/set_data",{
            body:{
                name:name,
                last_name:last_name,
                email:email,
                mobile:mobile
            }
        }).then((res)=>{
            console.log(res)
                if(res.data.code==200){
                    swal("Message", "Thank you.", "success");
                }else{
                    swal("Oops!", "Something went wrong! please try again", "error");
                }
        })
    }
    return (
        <div>
            {/* <Navbar /> */}
            <div class="row" >
                <div class="col-md-6" >
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "green" }}>
                        <h5 style={{ textalign: "center", fontFamily: "-moz-initial", color: "white", fontWeight: "bolder", fontSize: 30 }}>content</h5>
                    </div>
                </div>
                <div class="col-md-6" style={{ marginTop: "100px" }} >
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <h5 style={{ textalign: "center", fontFamily: "-moz-initial", fontWeight: "bolder", fontSize: 30 }}>Contact Us</h5>
                    </div>
                    <input className="input" onChange={(text)=>{set_name(text.target.value)}} placeholder="Name" name="name" style={{ width: "90%", margin: "20px", height: "50px", padding: "20px", borderRadius: "30px" }} />
                    <input className="input" onChange={(text)=>{set_last_name(text.target.value)}} placeholder="Last Name" name="lname" style={{ width: "90%", margin: "20px", height: "50px", padding: "20px", borderRadius: "30px" }} />
                    <input className="input" onChange={(text)=>{set_email(text.target.value)}} placeholder="Email" name="email" style={{ width: "90%", margin: "20px", height: "50px", padding: "20px", borderRadius: "30px" }} />
                    <input maxLength="10" minLength="10" className="input" onChange={(text)=>{set_mobile(text.target.value)}} placeholder="Number" name="number" style={{ width: "90%", margin: "20px", height: "50px", padding: "20px", borderRadius: "30px" }} /><br />
                    <button className="button" style={{ width: "90%", margin: "20px", height: "50px", borderRadius: "30px" }} onClick={(e)=>{onSubmit(e)}}>Submit</button>
                </div>
            </div>

            <Footer />
        </div>

    )
}
