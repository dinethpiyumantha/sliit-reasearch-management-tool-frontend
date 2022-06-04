import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import FooterBar from '../../components/footer-bar/FooterBar'
import AdminNavigationBar from '../../components/navigation-bar/AdminNavigationBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'

export default function MarkingSchemes() {

    const [form, setForm] = useState({
        submission: "",
        criterias: [
            {criteria: "", weight: ""}
        ],
    });

    const handleChangeCriterias = (e, index) => {
        let criterias = [...form.criterias];
        criterias[index] = {...criterias[index], [e.target.name]: e.target.value};
        setForm({...form, criterias});
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const addCriteriaElement = () => {
        setForm({...form, criterias: [...form.criterias, {criteria: "", weight: ""}]});
    }

    const resetForm = () => {
        setForm({
            submission: "",
            criterias: [
                {criteria: "", weight: ""}
            ],
        });
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3000/api/markingschemes`, form)
        .then(res => {
            console.log(res);
            resetForm();
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div>
            <AdminNavigationBar />
            <div className="container mt-5" style={{minHeight:'60vh'}}>
            <div className="row d-flex justify-content-center">
                <form onSubmit={submit} className="col-md-12 g-3">
                    <div className="form-group mb-4">
                        <label>Submission Type</label>
                        <input onChange={handleChange} className="form-control" name="submission"type="text" placeholder="Submission Type"/>
                    </div>
                    <table className="w-100 mb-3">
                        <thead>
                            <tr>
                                <th className="w-75">Criteria</th>
                                <th className="w-25 ps-2">Mark</th>
                            </tr>
                        </thead>
                        <tbody>
                            {form.criterias.map((criteria, index) => (
                                <tr className="mb-2" key={index}>
                                <td className="w-75">
                                    <input onChange={e => handleChangeCriterias(e, index)} className="form-control" name="criteria" type="text" placeholder="Criteria"/>
                                </td>
                                <td className="w-25 ps-2">
                                    <input onChange={e => handleChangeCriterias(e, index)} className="form-control" name="weight" type="number" placeholder="Weight"/>
                                </td>
                            </tr>
                            ))}
                            
                            
                        </tbody>
                    </table>
                    <button onClick={addCriteriaElement} type="button" className="btn btn-success">
                                Add New Criteria +
                    </button>
                    <div className="form-group mt-4">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            </div>
            <FooterBar />
            </div>
            
    )
}