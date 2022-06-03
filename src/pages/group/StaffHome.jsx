import React from 'react'
import FooterBar from '../../components/footer-bar/FooterBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'

import TemplateCard from '../../components/cards/TemplateCard'

import Topic from '../../assets/images/accepyTopic.jpg'
import Evaluation from '../../assets/images/eva.jpg'
import Document from '../../assets/images/docEvaluate.jpg'
import Presentation from '../../assets/images/presentationEvaluation.png'
import Chat from '../../assets/images/group.png'

export default function ProfileHome() {

  const cards = [
    {
      title: "Topic Acceptance",
      description: "Suppervisor research topic acceptance",
      image: Topic
    },
    {
      title: "Topic Evaluation",
      description: "Panal Member research topic evaluation",
      image: Evaluation
    },
    {
      title: "Document Evaluation",
      description: "Suppervisor research project document evaluation",
      image: Document
    },
    {
      title: "Presentation Evaluation",
      description: "Panal Member research project presentation evaluation",
      image: Presentation
    },
    {
      title: "Group Chat",
      description: "Research project group chat",
      image: Chat,
     
    },
  ]

  return (
    <div>
        <NavigationBar />
        <center><h1>Research Project - Staff</h1></center>
        <div className="container mt-5">
            <div className="row">
                
                <div className="col-md-9 d-flex flex-wrap gap-3">
                  {cards.map((card, index) => (
                    <TemplateCard title={card.title} description={card.description} image={card.image} key={index} />
                  ))}
                </div>
            </div>
        </div>
        <FooterBar />
    </div>
  )
}
