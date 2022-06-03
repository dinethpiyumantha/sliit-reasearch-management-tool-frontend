import React, { useState, useEffect } from "react"

export default function ViewTopicsToEvaluate() {


    return (
    <div>
        
        <div className="container mt-md-5 pb-md-5 p-3 mb-2 bg-light text-dark">
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
                {topicList.map(top => (
                    <tr key={top.Id}>
                        <td>{top.groupId}</td>
                        <td>{top.topic}</td>
                        <td>{top.supervisor.status}</td>
                        <td>{emp.panelmember.status}</td>
                        <td><button type="button" className="btn btn-primary">Evaluate</button></td>
                    </tr>
                ))};
            </tbody>
        </table>
    </div>
    
    </div>);
}
