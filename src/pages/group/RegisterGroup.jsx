import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import FooterBar from "../../components/footer-bar/FooterBar";
import NavigationBar from "../../components/navigation-bar/NavigationBar";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function RegisterGroup() {

  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const checkGroupAndNavigate = () => {
    console.log(userContext);
    if (userContext.group) { 
      navigate("/")
    };
  }

  const [form, setform] = useState({
    name: "",
    description: "",
    topic: "",
    category: "",
    members: [""],
    supervisor: {
      id: "",
      status: ""
    },
    coSupervisor: {
      id: "",
      status: ""
    }
  });

  const categoryList = [
    "Academic",
    "Arts",
  ];

  const addMemberElement = () => {
    setform({ ...form, members: [...form.members, ""] });
  }

  const removeMemberElement = (index) => {
    let members = [...form.members];
    members.splice(index, 1);
    setform({ ...form, members });
  }

  const handleChange = (e) => {
    console.log(e.target.name + ": " + e.target.value);
    setform({ ...form, [e.target.name]: e.target.value });
  }

  const handleMemberChange = (e, index) => {
    let members = [...form.members];
    members[index] = e.target.value;
    setform({ ...form, members });
}

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
    axios.post(`http://localhost:3000/api/groups`, form)
    .then(res => {
        console.log(res.data);
        navigate("/");
        })
    .catch(err => {
        console.log(err);
    });
  }

  useEffect(() => {
    checkGroupAndNavigate();
  },[]);

  return (
    <div>
      <NavigationBar />
      <div className="container d-flex justify-content-center mt-5">
        <div className="col-md-5">
        <h3 className="mb-3">Group Registration</h3>
        <form onSubmit={submit} >
          <div className="form-group mb-2">
            <label>Group Name</label>
            <input onChange={handleChange} type="text" className="form-control" name="name" placeholder="" />
            <small className="form-text text-muted">Validation is based on string length.</small>
          </div>
          <div className="form-group mb-2">
            <label>Topic</label>
            <input onChange={handleChange} type="text" className="form-control" name="topic" placeholder="" />
            <small className="form-text text-muted">Validation is based on string length.</small>
          </div>
          <div className="form-group mb-2">
            <label>Research Category</label>
            <select onChange={handleChange} className="form-control" name="category">
            {categoryList.map((category, index) => (
              <option value={category} key={index} className="text-capilized">{category}</option>
            ))}
            </select>
            <small className="form-text text-muted">Validation is based on string length.</small>
          </div>
          <div className="form-group mb-2">
            <label>Description</label>
            <textarea onChange={handleChange} cols="30" rows="10" className="form-control" name="description" placeholder="" />
            <small className="form-text text-muted">Validation is based on string length.</small>
          </div>
          <div className="form-group mb-2">
            <label>Members</label>
            
            {form.members.map((member, i) => {
              return (
                <div className="border-start border-4 m-0">
                  <div className="d-flex gap-2 py-2 ps-3" key={i}>
                    <input onChange={(e) => handleMemberChange(e, i)} type="text" className="form-control" placeholder={(i==0)?`Leader`: `Member ${i}`} />
                    {(form.members.length != 1) ? 
                      <button onClick={removeMemberElement} type="button" className="btn btn-dark-outline rounded-circle" style={{width: '25px', height: '25px', padding: '2px'}}><i className="fas fa-times-circle"></i></button>
                      : null
                    }
                  </div>
                </div>
              );
            })}
          </div>
          <div className="form-group mb-2 ps-3">
          {(form.members.length != 4) ? 
            (<button onClick={addMemberElement} type="button" className="btn btn-sm btn-outline-dark ms-1" style={{marginLeft: '2.5rem'}}>
                <span className="me-2">Add Member</span><i className="fa fa-plus" aria-hidden="true"></i>
            </button>)
            : null
          }
          </div>
          <div className="border-top mb-4 mt-4"></div>
          <div className="form-group mb-2">
            <input type="submit" className="btn btn-primary" value="Register" />
          </div>
        </form>
        </div>
      </div>
      <FooterBar />
    </div>
  );
}