import { Construction } from '@mui/icons-material';
import React, { useState } from 'react'
import FooterBar from '../../components/footer-bar/FooterBar'
import AdminNavigationBar from '../../components/navigation-bar/AdminNavigationBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'

export default function MarkingSchemes() {

    const [form, setForm] = useState({
        name: "",
        criterias: [
            {criteria: "", weight: ""},
        ]
    });

    const addCriteriaElement = () => {
        console.log(form);
        setForm({
            ...form,
            criterias: [
                ...form.criterias,
                {criteria: "", weight: ""}
            ]
        })
        console.log(form);
    }

    return (
        <div>
            <AdminNavigationBar />
            <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <form className="row g-3">
                    <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Submission Type</label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                    </div>

                    <div className="row">
                        <div className="col-md-10">
                            <label htmlFor="inputEmail4" className="form-label">Marking Criteria</label>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputEmail4" className="form-label">Marks</label>
                        </div>
                    </div>
                    {form.criterias.map((criteria, index) => (
                    <div className="row mb-2" key={index}>
                        <div className="col-md-10">
                            <input type="text" name="criteria" className="form-control" id="inputEmail4" value={criteria.criteria}/>
                        </div>
                        <div className="col-md-2">
                            <input type="number" name="weight" className="form-control" id="inputEmail4" value={criteria.weight}/>
                        </div>
                    </div>
                    ))}

                <div className="d-grid gap-2 d-md-block">
                <button onClick={addCriteriaElement} className="btn btn-sm btn-success" type="button">Add Items</button>
                <button className="btn ms-2 btn-sm btn-success" type="button">Submit</button>
            </div>
                </form>
            </div>
            </div>
            <FooterBar />
            </div>
            
    )
}