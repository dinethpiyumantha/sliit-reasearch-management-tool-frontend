import axios from "axios";
import React, { useState } from "react";
import FooterBar from '../../components/footer-bar/FooterBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'

export default function DocEvaluation() {

  const [form, setform] = useState({
    evaluationType: "",
    groupId: "",
    supervisorName: "",
    totalMark: ""
  });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
      e.preventDefault();
      console.log(form);
      axios.post(`http://localhost:5000/api/evaluateDocs`, form)
      .then(res => {
        alert(Success, "Document evaluation marks saved successfully");
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

        <NavigationBar></NavigationBar>
    <div className="container mt-md-5 pb-md-5 p-3 mb-2 bg-light text-dark">
      <div className="container d-flex justify-content-center pt-4">
        <div className="col-md-6 pt-6">
          <h2 className="text-capitalize mb-3 mt-5">Research Document Evaluation</h2>
          <form onSubmit={submit} style={{width: '50rem'}} >
            <div className="form-group mb-4">
              <label htmlFor="groupId">Group ID</label>
              <input onChange={handleChange} type="text" className="form-control" id="groupId" name="groupId"/>
            </div>
            <div className="form-group mb-4">
                <label htmlFor="evaluationType">Presentation Type</label>
                <select className="form-select"  onChange={handleChange} name="evaluationType" id="evaluationType" defaultValue="Select presentation type">
                  <option defaultValue="Select presentation type">Select Document type</option>
                  <option value="PP1">Project Chater</option>
                  <option value="PP1">Progress Report</option>
                  <option value="PP2">Final Report</option></select>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="totalMark">Total Marks</label>
              <input onChange={handleChange} type="number" min={0} max={100} className="form-control" id="totalMark" name="totalMark"/>
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