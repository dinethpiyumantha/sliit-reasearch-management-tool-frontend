import React, { useState, useEffect } from "react"
import FooterBar from "../../components/footer-bar/FooterBar";
import NavigationBar from '../../components/navigation-bar/NavigationBar'

export default function ViewTopicToAccept() {


    return (
    <div>
        <NavigationBar></NavigationBar>
        <div className="container mt-md-5 pb-md-5 p-3 mb-2  text-dark">
        <h2 className="text-capitalize mb-4">Topics</h2>
        <table className="table table-striped" >
            <thead>
                <tr>
                    <th>Group Id</th>
                    <th>Topic</th>
                    <th>Supervisor Acceptance Status</th>
                    <th>Panel Member evaluation status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                
                    <tr>
                        <td>2022S2_JUN_01</td>
                        <td>A Sensitive Data Leakage Detection and Privacy Policy
                            <br/>Analyzing Application for Android Systems (PriVot)</td>
                        <td>Accepted</td>
                        <td>Pending</td>
                        <td><button type="button" className="btn btn-primary">Evaluate</button></td>
                    </tr>
                    <tr>
                        <td>2022S2_JUN_02</td>
                        <td>Application of RFID and IoT technology into specimen <br/>logistic system in the healthcare sector</td>
                        <td>Accepted</td>
                        <td>Pending</td>
                        <td><button type="button" className="btn btn-primary">Evaluate</button></td>
                    </tr>
                    <tr>
                        <td>2022S2_JUN_03</td>
                        <td>AI Base E-Learning Solution to Motivate <br/>and Assist Primary School Students</td>
                        <td>Accepted</td>
                        <td>Pending</td>
                        <td><button type="button" className="btn btn-primary">Evaluate</button></td>
                    </tr>
                    <tr>
                        <td>2022S2_JUN_04</td>
                        <td>Agro-Mate: A Virtual Assister to Maximize<br/> Crop Yield in Agriculture Sector</td>
                        <td>Accepted</td>
                        <td>Pending</td>
                        <td><button type="button" className="btn btn-primary">Evaluate</button></td>
                    </tr>
              </tbody>
        </table>
    </div>
    <FooterBar />
    </div>);
}
