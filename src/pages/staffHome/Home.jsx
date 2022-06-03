import React from 'react'
import ImageSlider from '../../components/image-slider/ImageSlider'

export default function Home() {
  return (
    <div style={{height: '100vh'}}>
      <div className="row h-100 w-100">
        <div className="col-md-6 bg-dark text-light">
          <ImageSlider />
        </div>
        <div className="col-md-6 bg-light">right</div>
      </div>
    </div>
  )
}
