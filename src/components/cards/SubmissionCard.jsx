import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App';

export default function SubmissionCard(props) {

    const userContext = useContext(UserContext);

    const [submission, setSubmission] = useState({
        group: userContext.group._id,
        file: "",
    });

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", submission.file);
        formData.append("group", submission.group);

        console.log(props.data._id);

        axios.put(`http://localhost:3000/api/submissions/${props.data._id}`, formData)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        console.log(submission);
    }, [submission]);

  return (
    <form onSubmit={submit} className="mb-4 card p-4" style={{maxWidth: '40rem', background: '#2125290a'}}>
        <div className="d-flex gap-2"><div className="bg-dark text-white rounded-circle text-center" style={{padding: '.15rem 0', width: '1.7rem', height: '1.7rem'}}>{props.index+1}</div><h4>{props.data.name}</h4></div>
        <small className="text-muted mb-3">Published at {`${props.data.createdAt}`}</small>
        <p>{props.data.description}</p>
        <div className="form-group mt-3">
            <input onChange={(e) => setSubmission({ ...submission, [e.target.name]: e.target.files[0] })} type="file" name="file" accept={`.${props.data.type}`} className="form-control form-control-sm" />
            <div className="progress rounded-0 my-1" style={{height: '.3rem'}}>
                <div className="progress-bar bg-success rounded-0" role="progressbar" style={{width: `${30}%`}}></div>
            </div>
            <span><small className="text-muted me-2">Deadline on {`${props.data.deadline}`}</small><small className="text-success">Time Remaining 2hrs</small></span>
        </div>
        <div className="form-group mt-3">
            <input type="submit" className="btn btn-sm btn-primary" value="Submit" />
        </div>
    </form>
  )
}
