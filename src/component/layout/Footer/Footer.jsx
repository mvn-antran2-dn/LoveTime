import React from 'react'

export default function Footer() {
  const images = {
    ava: require('../../../assets/images/footer.jpg'),
  }
  return (
    <footer className="site-footer footer-style-1">
      <div className="inner">
        <div className="couple-pic">
          <img src={images.ava} alt="Ngoc AN &amp; Hoai Linh Wedding site!" />
        </div>
        <h2>Thank you!</h2>
      </div>
    </footer>
  )
}
