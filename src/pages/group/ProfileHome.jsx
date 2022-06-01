import React from 'react'
import FooterBar from '../../components/footer-bar/FooterBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'
import SideBar from '../../components/side-bar/SideBar'
import TemplateCard from '../../components/cards/TemplateCard'
import Banner from '../../assets/images/research.jpg'
import Logo from '../../assets/images/logo.jpg'

export default function ProfileHome() {

  const cards = [
    {
      title: "jhgfjgf",
      description: "hvgjhfvjhfvjgvjvjvhjv",
      image: Banner
    },
    {
      title: "23jhgfjgf",
      description: "3243252352365436",
      image: Logo
    },
    {
      title: "%$^%$jhgfjgf",
      description: "%$#%$hvgjhfvjhfvjgvjvjvhjv",
      image: Banner
    },
  ]

  return (
    <div>
        <NavigationBar />
        <div className="container mt-5">
            <div className="row">
                <SideBar />
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
