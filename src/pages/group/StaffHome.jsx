import React from 'react'
import FooterBar from '../../components/footer-bar/FooterBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'

import TemplateCard from '../../components/cards/TemplateCard'
import sliit from '../../assets/images/sliit.jpg'


export default function ProfileHome() {

  const cards = [
    {
      image: sliit
    },
  ]

  return (
    <div>
        <NavigationBar />
       
        <div className="container mt-5">
            <div className="row">
                
                <div className="col-md-9 d-flex flex-wrap gap-3">
                  {cards.map((card, index) => (
                    <TemplateCard  image={card.image} key={index} style={{height:"200"}}/>
                  ))}
                </div>
            </div>
        </div>
        <FooterBar />
    </div>
  )
}
