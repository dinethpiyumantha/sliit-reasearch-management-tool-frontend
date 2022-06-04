import axios from "axios";
import React, { useState } from "react";
import FooterBar from "../../components/footer-bar/FooterBar";
import PanelMemberNavigationBar from "../../components/navigation-bar/PanelMemberNavigationBar";

export default function EvaluateTopic() {

  const [form, setform] = useState({
    groupId: "2022S2_JUN_01",
    topic: "A Sensitive Data Leakage Detection and Privacy Policy Analyzing Application for Android Systems (PriVot)",
    acceptancestatus: "Accepted",
    evaluationstatus: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
      e.preventDefault();
      console.log(form);
      axios.post(`http://localhost:5000/api/topicevaluate`, form)
      .then(res => {
        console.log(res.data);
        alert("Prsentation evaluation marks saved successfully");
        navigate("/index");
        
      })
      .catch(err => {
        console.log(err);
      });
  }

  const back = () => {
    navigate(-1);
  }

  return (
    <div>
    <PanelMemberNavigationBar/>
    <div className="container mt-md-5 pb-md-5 p-3 mb-2 bg-light text-dark">
      <div className="container d-flex justify-content-center pt-4">
        <div className="col-md-6 pt-6">
          <h2 className="text-capitalize mb-3 mt-5">Research Topic Evaluation</h2>
          <form onSubmit={submit} style={{width: '50rem'}} >
            <div className="form-group mb-4">
              <label htmlFor="groupId">Group ID</label>
              <input onChange={handleChange} type="text" className="form-control" id="groupId" name="groupId" value="2022S2_JUN_01"/>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="topic">Research Topic</label>
              <input onChange={handleChange} type="text" className="form-control" id="topic" name="topic" value="A Sensitive Data Leakage Detection and Privacy Policy Analyzing Application for Android Systems (PriVot)"/>
            </div>
            <div className="form-group mb-4">
                <label htmlFor="acceptancestatus">Supervisor Acceptance Status</label>
                <input onChange={handleChange} type="text" className="form-control" id="acceptancestatus" name="acceptancestatus" value="Accepted"/>
            </div>
            <div className="form-group mb-4">
                <label htmlFor="evaluationstatus">Evaluation Status</label>
                <select className="form-select"  onChange={handleChange} name="evaluationstatus" id="evaluationstatus" defaultValue="Select type">
                  <option defaultValue="Pending">Pending</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Rejected">Rejected</option></select>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="feedback">Feedback</label>
              <textarea onChange={handleChange} style={{hieght:"50rem"}} className="form-control" id="feedback" name="feedback" />
            </div>
           
            <input type="submit" className="btn btn-primary" value="Submit" style={{width: '50rem'}}/>
          </form>
        </div>
      </div>
      </div>
      <FooterBar />
    </div>
  );
}