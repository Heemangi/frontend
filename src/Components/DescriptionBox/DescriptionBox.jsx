import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews</div>
        </div>
        <div className='descriptionbox-description'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta omnis libero itaque explicabo quidem consectetur saepe, quas nemo repellendus praesentium repudiandae nesciunt similique ipsam eligendi quia cupiditate delectus doloribus vero.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, consectetur!
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox