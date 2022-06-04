import React, { useEffect, useState } from "react";

export default function PresentationEvaluate() {

    const [markingScheme, setMarkingScheme] = useState();
    const [form, setForm] = useState({
        group: "",
        marks: []
    });

    const handleChange = (e) => {
        console.log(form);
        setForm(...form, marks => [...marks, e.target.value])
        console.log(form);
    }

  const mScheme = {
    id: "6474765675",
    name: "Test",
    criterias: [
      { criteria: "first", weight: 20 },
      { criteria: "first", weight: 20 },
      { criteria: "first", weight: 20 },
      { criteria: "first", weight: 20 },
      { criteria: "first", weight: 20 },
      { criteria: "first", weight: 20 },
    ],
  };

  const fetchData = () => {
        setMarkingScheme(mScheme);
  }

  const submit = (e) => {
        e.preventDefault();
  }

  useEffect(() => {
      fetchData();
  }, [])

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-8">
            <h3 className="text-capitalize">{markingScheme && markingScheme.name}</h3>
            <form onSubmit={submit}>
                <div className="row mb-3">
                    <div className="form-group mb-3">
                        <label>Group ID</label>
                        <input type="text" name="group" className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                        <label>Marking Scheme</label>
                        <select className="form-select"  name="type">
                            <option value="Panel member">Panel Member</option>
                        </select>
                    </div>
                    
                </div>
          <table className="table">
            <thead>
              <tr>
                <th style={{width: '60%'}}>Criteria</th>
                <th style={{width: '20%'}}>Weight</th>
                <th style={{width: '20%'}}>Mark</th>
              </tr>
            </thead>
            <tbody>
              {markingScheme &&
                markingScheme.criterias.map((criteria, index) => (
                  <tr key={index}>
                    <td>{criteria.criteria}</td>
                    <td>{criteria.weight}</td>
                    <td>
                      <input
                        type="number"
                        min={0}
                        max={criteria.weight}
                        name="mark"
                        className="form-control"
                      />
                    </td>
                  </tr>
                ))}
                <tr>
                    <td colSpan={2}>Total Marks</td>
                    <td>0/100</td>
                </tr>
            </tbody>
          </table>
          </form>
          <input type="submit" className="btn btn-primary" value="Submit" />
        </div>
      </div>
    </div>
  );
}
