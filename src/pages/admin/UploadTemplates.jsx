import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import FooterBar from '../../components/footer-bar/FooterBar'
import AdminNavigationBar from '../../components/navigation-bar/AdminNavigationBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'
import axios from 'axios'

export default function UploadTemplates() {

    const navigate = useNavigate();
    const [presentationtemplate, setTemplate] = useState({
        templateName: "",
        description: "",
        file: "",
    });

    const [prsentationtemplates, setTemplates] = useState([]);

    const  { id } = useParams();

    const submit = (e) => {
        e.preventDefault();
        console.log(presentationtemplate);
        axios.post(`http://localhost:3000/api/presentationtemplates`, presentationtemplate)
        .then(res => {
            console.log(res);
            fetchData();
            resetTemplate();
        })
        .catch(err => {
            console.log(err);
        });
    }

    const resetTemplate = () => {
        setTemplate({
            templateName: "",
            description: "",
            file: "",
        });
    }

    const handleChange = (e) => {
        setTemplate({
            ...presentationtemplate,
            [e.target.name]: e.target.value
        })
 }

    return (
        <div>
            <AdminNavigationBar />
            <div className="container mt-5">
            <div className="row d-flex justify-content-center">
            <form onSubmit={submit} className="row g-3" style={{width: '75rem'}}>   
                <div className="row mb-3">
                <label for="inputname" className="col-sm-2 col-form-label">Template Name</label>
                <div className="col-sm-10">
                    <input onChange={handleChange} name="templateName" value={presentationtemplate.templateName} type="text" className="form-control" id="inputname"/>
                </div>
                </div>
                <div className="row mb-3">
                <label for="inputdescription" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <input onChange={handleChange} name="description" value={presentationtemplate.description} type="text" className="form-control" id="inputdescription"/>
                </div>
                </div>
                
                <div className="row mb-3">
                <label for="inputfile" className="col-sm-2 col-form-label">File</label>
                <div className="col-sm-10">
                    <input onChange={handleChange} name="file" value={presentationtemplate.file} type="file" className="form-control" id="inputfile" multiple={false} />
                </div>
                </div>
                <div className="d-grid gap-2 d-md-block">
                <button onClick={e => navigate()} className="btn btn-sm btn-success" type="submit">Upload</button>
                <button className="btn ms-2 btn-sm btn-danger" type="button">Cancel</button>
            </div>
            
            </form>
            </div>
            </div>
            <FooterBar />
        </div>
            
    )
}