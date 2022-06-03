import axios from 'axios'
import React, { useState, useEffect } from 'react'
import SubmissionCard from '../../components/cards/SubmissionCard'
import FooterBar from '../../components/footer-bar/FooterBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'
import SideBar from '../../components/side-bar/SideBar'

export default function SubmitDocument() {

  const [submitions, setSubmissions] = useState([]);

  const fetchData = () => {
    axios.get(`http://localhost:3000/api/submissions`)
    .then(res => {
      console.log(res.data);
      setSubmissions(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        <NavigationBar />
        <div className="container mt-md-5 pb-md-5">
            <div className="row">
                <SideBar />
                <div className="col-md-9 ps-md-5">
                {submitions.map((submission, index) => (
                  <SubmissionCard index={index} data={submission} key={index}/>
                ))}
                </div>
            </div>
        </div>
        <FooterBar />
    </div>
  )
}
