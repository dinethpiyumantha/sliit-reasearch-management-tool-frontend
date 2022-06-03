import React from 'react'


export default function TemplateCard(props) {

    const visit = () => {
        alert("Download " + props.title);
      }

  return (
    <div className="card shadow-sm" style={{width: '15rem'}}>
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <button onClick={visit} type="button" className="btn btn-sm btn-primary">
                <span className="me-2">Visit Page</span>
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
    </div>
  )
}
