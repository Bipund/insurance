import React from 'react'
import icon1 from "../assets/health-insurance.png";
import icon2 from "../assets/life-insurance.png";
import icon3 from "../assets/travel-insurance.png";
import icon4 from "../assets/car-insurance.png";
import icon5 from "../assets/bike-insurance.png";
import icon6 from "../assets/investment-plans.png";
import "../App.css";
import Accordion from '../components/accordion';
import Footer from '../components/footer';
export default function HomeComponent() {
    return (
        <div>
             <div style={{ backgroundColor: "#4370ff", height: "35px", width: "100%", marginTop: "60px" }}>
          <div>
            <h5 style={{ color: "white", padding: "auto", display: "flex", marginTop: "10px", fontFamily: "Lato, Helvetica, Arial", justifyContent: "center", textAlign: "center", alignItems: "center", marginTop: "20px" }}>India's Best Insurance Portal</h5>
  
          </div>
  
        </div>
        <div class="container">
          <div class="row">
            <div class="col card shadow p-3 mb-5 bg-white rounded">
              <div className="card-body align-items-center d-flex justify-content-center" style={{ flexDirection: "column" }}>
                <img src={icon1} height="80" width="80" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} />
                <h6 style={{ margin: "5px" }}><b>Health Insurance</b></h6>
              </div>
            </div>
            <div class="col card shadow p-3 mb-5 bg-white rounded">
              <div className="card-body align-items-center d-flex justify-content-center" style={{ flexDirection: "column" }}>
                <img src={icon2} height="80" width="80" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} />
                <h6 style={{ margin: "5px" }}><b>Life Insurance</b></h6>
              </div>
            </div>
            <div class="col card shadow p-3 mb-5 bg-white rounded">
              <div className="card-body align-items-center d-flex justify-content-center" style={{ flexDirection: "column" }}>
                <img src={icon3} height="80" width="80" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} />
                <h6 style={{ margin: "5px" }}><b>Travel Insurance</b></h6>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col card shadow p-3 mb-5 bg-white rounded">
              <div className="card-body align-items-center d-flex justify-content-center" style={{ flexDirection: "column" }}>
                <img src={icon4} height="80" width="80" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} />
                <h6 style={{ margin: "5px" }}><b>Car Insurance</b></h6>
              </div></div>
            <div class="col card shadow p-3 mb-5 bg-white rounded">
              <div className="card-body align-items-center d-flex justify-content-center" style={{ flexDirection: "column" }}>
                <img src={icon5} height="80" width="80" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} />
                <h6 style={{ margin: "5px" }}><b>Bike Insurance</b></h6>
              </div>
            </div>
            <div class="col card shadow p-3 mb-5 bg-white rounded">
              <div className="card-body align-items-center d-flex justify-content-center" style={{ flexDirection: "column" }}>
                <img src={icon6} height="80" width="80" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} />
                <h6 style={{ margin: "5px" }}><b>Investment Plans</b></h6>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#4370ff", height: "20%", width: "100%", marginTop: "35px", color:"white", }}>
          <div style={{display:"flex", justifyContent:"center",marginTop:"20px",  alignItems:"center",flexDirection:"column", padding:'10px'}}>
            <h1 className="logo" style={{marginTop:"20px"}}>Why To Compare Insurance</h1>
            <p style={{fontFamily:"unset"}}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
        </div>
        <Accordion/>
        <Footer/>
        </div>
    )
}
