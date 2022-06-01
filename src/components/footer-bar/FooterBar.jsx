import React from 'react'

export default function FooterBar() {
  return (
    <div className="border-top mt-5">
        <div className="container py-1">
            <div className="d-flex justify-content-center gap-3 my-1">
                <small className="btn btn-link">Home</small>
            </div>
            <div className="d-flex justify-content-center gap-3 my-1">
                <small className="text-muted">&copy; 2022 by SLIIT 3rd year 2nd semester Application Framework Group - 2022S1_JUN_13</small>
            </div>
        </div>
    </div>
  )
}
