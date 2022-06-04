import React, { useEffect, useState, } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import FooterBar from '../../components/footer-bar/FooterBar'
import AdminNavigationBar from '../../components/navigation-bar/AdminNavigationBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'
import axios from 'axios'

export default function Submission() {

      const navigate = useNavigate();
      const [submission, setSubmission] = useState({
        submissionType: "",
        description: "",
        fileType: "",
        deadline: "",
     });

     const [submissions, setSubmissions] = useState([]);

       const  { id } = useParams();

       const submit = (e) => {
        e.preventDefault();
        console.log(submission);
        axios.post(`http://localhost:3000/api/submissiontypes`, submission)
        .then(res => {
            console.log(res);
            fetchData();
            resetSubmission();
        })
        .catch(err => {
            console.log(err);
        });
       }

       const resetSubmission = () => {
            setSubmission({
                submissionType: "",
                description: "",
                fileType: "",
                deadline: "",
            });
       }
       
       

       const fetchData = () => {
        axios.get(`http://localhost:3000/api/submissiontypes`)
        .then(res => {
            console.log(res.data);
            setSubmissions(res.data);
        })
        .catch(err => {
            console.log(err);
        })
       }

       useEffect(() => {
        fetchData();
        }, [])
      
         const handleChange = (e) => {
                setSubmission({
                    ...submission,
                    [e.target.name]: e.target.value
                })
         }

    return (
        <div>
            <AdminNavigationBar />
            <div className="container mt-5">
            <div className="row d-flex justify-content-center">
            <form onSubmit={submit} className="row g-3">
            <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">Submission Type</label>
                <input onChange={handleChange} name="submissionType" value={submission.submissionType} type="text" className="form-control" id="inputZip"/>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">Description</label>
                <input onChange={handleChange} name="description" value={submission.description} type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputState" className="form-label">File Type</label>
                <select onChange={handleChange} name="fileType" value={submission.fileType} id="inputState" className="form-select">
                    <option value="docx">.docx</option>
                    <option value="zip">.zip</option>
                    <option value="pdf">.pdf</option>
                    <option value="pptx">.pptx</option>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">Deadline</label>
                <input onChange={handleChange} name="deadline" value={submission.deadline} type="text" className="form-control" id="inputZip"/>
            </div>
            <div className="d-grid gap-2 d-md-block">
                <button onClick={e => navigate()} className="btn ms-2 btn-sm btn-success" type="submit">Submit</button>
            </div>
            </form>

            <div className="container mt-5">
            <div className="row d-flex justify-content-center">
            <table className="col-md-8 table table-striped">
                <thead>
                <tr>
                    <th>Submission Type</th>
                    <th>Description</th>
                    <th>File Type</th>
                    <th>Deadline</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {submissions.map((submissionType, index) => (
                    <tr key={index}>
                        <td>{submissionType.submissionType}</td>
                        <td>{submissionType.description}</td>
                        <td>{submissionType.fileType}</td>
                        <td>{submissionType.deadline}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
            </div>
            
            <FooterBar />
            </div>
            </div>
        </div>
    )
}