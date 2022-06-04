import React, { useEffect, useState } from 'react'
import FooterBar from '../../components/footer-bar/FooterBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'
import SideBar from '../../components/side-bar/SideBar'
import TemplateCard from '../../components/cards/TemplateCard'
import Banner from '../../assets/images/research.jpg'
import Logo from '../../assets/images/logo.jpg'
import axios from 'axios'

export default function ProfileHome() {

  const [templates, setTemplates] = useState([]);

  const fetchData = () => {
    axios.get('http://localhost:3000/api/templates')
      .then(res => {
        console.log(res.data);
        setTemplates(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        <NavigationBar />
        <div className="container mt-5" style={{minHeight: '60vh'}}>
            <div className="row">
                <SideBar />
                <div className="col-md-9 d-flex flex-column gap-3">
                  <h3>Document Templates</h3>
                  {templates && templates.map((template, index) => {
                    return (
                      <TemplateCard title={template.name} createdAt={template.createdAt} description={template.description} file={template.file} image={template.image} key={index} />
                  )})}
                </div>
            </div>
        </div>
        <FooterBar />
    </div>
  )
}
