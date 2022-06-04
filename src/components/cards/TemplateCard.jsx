import React, { useEffect, useState } from 'react'
import FileBG from '../../assets/images/filebg.jpg'
import moment from 'moment';


export default function TemplateCard(props) {

    const [uri, seturi] = useState();

    function getUri(){
        seturi(props.file.substring(7));
    }

    useEffect(() => {
        getUri();
    }, []);

  return (
    <div className="card shadow-sm" style={{width: '35rem', maxHeight: '10.7rem'}}>
    <div className="row">
        <div className="col-4">
            <img src={FileBG} className="card-img-top" alt="..."/>
        </div>
        <div class="col-md-8">
            <div className="card-body">
                <h5 className="card-title text-capitalize">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={`http://localhost:3000/${uri}`} target="_blank" className="btn btn-sm btn-primary" download>
                    <span className="me-2">Download</span>
                    <i className="fas fa-download"></i>
                </a>
                <span className="d-flex justify-content-between text-muted mt-3">
                    <small className="text-primary" style={{fontSize: ".8rem"}}>{props.file.substring(18)}</small>
                    <small style={{fontSize: ".8rem"}}>Published on {moment(props.createdAt).format("YYYY-MM-DD")}</small>
                </span>
            </div>
        </div>
        </div>
    </div>
  )
}
