import axios from "axios";
import React, { useState } from "react";
import FooterBar from "../../components/footer-bar/FooterBar";
import PanelMemberNavigationBar from "../../components/navigation-bar/PanelMemberNavigationBar";

export default function PresentationEvaluation() {

  const [form, setform] = useState({
    evaluationType: "",
    groupId: "",
    supervisorName: "",
    totalEvaluatedMark: ""
  });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
      e.preventDefault();
      console.log(form);
      axios.post(`http://localhost:5000/api/evaluatePresentations`, form)
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
          <h2 className="text-capitalize mb-3 mt-5">Presentation Evaluation</h2>
          <form onSubmit={submit} style={{width: '50rem'}} >
            <div className="form-group mb-4">
              <label htmlFor="groupId">Group ID</label>
              <input onChange={handleChange} type="text" className="form-control" id="groupId" name="groupId"/>
            </div>
            <div className="form-group mb-4">
                <label htmlFor="evaluationType">Presentation Type</label>
                <select className="form-select"  onChange={handleChange} name="evaluationType" id="evaluationType" defaultValue="Select presentation type">
                  <option defaultValue="Select presentation type">Select presentation type</option>
                  <option value="PP1">PP1</option>
                  <option value="PP2">PP2</option></select>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="totalEvaluatedMark">Total Marks</label>
              <input onChange={handleChange} type="number" min={0} max={100} className="form-control" id="totalEvaluatedMark" name="totalEvaluatedMark"/>
            </div>
            <div className="form-group mb-4">
                <label htmlFor="supervisorName">Evaluated By</label>
                <input onChange={handleChange} type="text" className="form-control" id="supervisorName" name="supervisorName"/>
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