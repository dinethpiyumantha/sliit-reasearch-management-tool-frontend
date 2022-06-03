import React from 'react'
import FileBG from '../../assets/images/filebg.jpg'


export default function TemplateCard(props) {

    const download = () => {
        alert("Download " + props.title);
      }

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
                <button onClick={download} type="button" className="btn btn-sm btn-primary">
                    <span className="me-2">Download</span>
                    <i className="fas fa-download"></i>
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}
