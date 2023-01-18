import React from 'react'
import Countdown from './coundown'
import Slider from "react-slick";
import FormChuc from '../component/modules/Form';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import IconMusic from '../assets/images/music';
import Music from '../component/modules/music';

export default function Home() {
  
  const images = {
    bgTraitim: require('../assets/images/logo-an&linh.png'),
    linh: require('../assets/images/Linh.jpg'),
    an: require('../assets/images/an4.jpg'),
    luaxanh: require('../assets/images/luaxanh.jpg'),
    tet1: require('../assets/images/tet1.jpeg'),
    rapphim: require('../assets/images/to-tinh.jpeg'),
    slider1: require('../assets/images/bg.jpg'),
    slider2: require('../assets/images/chup-anh2.jpeg'),
    slider3: require('../assets/images/noel.jpg'),
    slider4: require('../assets/images/rapphim.jpg'),
    n20231: require('../assets/images/tet-ngang.jpg'),
    n20232: require('../assets/images/tet-dung.jpg'),
    n20233: require('../assets/images/damcuoi.jpeg'),
    ido: require('../assets/images/IDo.mp3'),
  };
  const settings_categories = {
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    arrows: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  };
  const categories = [
    {
      src: `${images.slider1}`,
    },
    {
      src: `${images.slider2}`,
    },
    {
      src: `${images.slider3}`,
    },
    {
      src: `${images.slider4}`,
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="page-main">
      <div className="heart">
        <div className="snowflakes" aria-hidden="true">
          <div className="snowflake"><img src="	https://preview.iwedding.info/common/imgs/heart.png" alt="heart" /></div>
          <div className="snowflake"><img src="	https://preview.iwedding.info/common/imgs/heart.png" alt="heart" /></div>
          <div className="snowflake"><img src="	https://preview.iwedding.info/common/imgs/heart.png" alt="heart" /></div>
          <div className="snowflake"><img src="	https://preview.iwedding.info/common/imgs/heart.png" alt="heart" /></div>
        </div>
      </div>
      <Button type="primary" onClick={showModal} className="bii-player">
        <IconMusic />
      <p className="bii-player-text">Bấm vào đây để nghe nhạc</p>
      </Button>
      <Modal 
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel}
      closable={false}
      className="modal-music" 
      footer={null}
      >
        <Music />
      </Modal>
      {/* <audio controls className='audio'>
        <source src="../assets/images/I Do - 911.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio> */}
      <section className="section page-main-background hero-area zoom-burns ">
        <div className="hero-content-wrap zoom-burns-background background" ></div>
        <div className="container-bg">
          <div className="header-caption text-left position-relative">
            <div className="header-content">
              {/* <img src="https://preview.iwedding.info/templates/template5/img/header-love-bg.png" alt="Love Img" className="header-content-float-img position-absolute" /> */}
              <div className="header-inner-text">
                <h3 className="text-capitalize font-playball color-dark">Everlasting Love</h3>
                <h1 className="header-caption-heading font-playball color-pink text-capitalize">Ngọc An &amp; Hoài Linh</h1>
                <p className="text-capitalize font-playball color-dark">--------- 20 October 2022 ---------</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section invitation-section section-padding section-bg-img">
        <div className="container">
          <div className="row">
            <div className="invitation-section col-6">
              <div className="invitation-box left" >
                <div className="left-vec"></div>
                <div className="right-vec"></div>
                <div className="inner">
                  <h2>Love Time</h2>
                  {/* <span>For the wedding of</span> */}
                  <h3>Ngọc An &amp; Hoài Linh</h3>
                  <p>Một lời chúc của bạn chắc chắn sẽ làm cho chúng tôi có thêm một niềm hạnh phúc!</p>
                  <a href="#wishes" className="theme-btn">Gửi lời chúc</a>
                </div>
              </div>
            </div>
            <div className="invitation-section col-6">
              <div className="invitation-box calendar-box" >
                <div className="left-vec"></div>
                <div className="right-vec"></div>
                <div className="inner">
                  <div className="mini_calendar">
                    <table>
                      <caption className="calendar-month"> October 2022</caption>
                      <tbody><tr><th abbr="Sunday">Sun</th><th abbr="Monday">Mon</th><th abbr="Tuesday">Tue</th><th abbr="Wednesday">Wed</th><th abbr="Thursday">Thu</th><th abbr="Friday">Fri</th><th abbr="Saturday">Sat</th></tr>
                        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>1</td><td>2</td></tr>
                        <tr><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
                        <tr><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td></tr>
                        <tr><td>17</td><td>18</td><td>19</td><style id="today">20</style><td>21</td><td>22</td><td>23</td></tr>
                        <tr><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td></tr>
                      </tbody></table>
                  </div>

                </div>
                <div className="count-down-clock">
                  <div className="background-time ">
                    <Countdown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-introduction">
        <div className="container">
          <div className="user-card aos-init aos-animate" data-aos="fade-right" data-aos-offset="300">
            {/* <div className="flower-icon">
              <img src="https://lnrsvp.netlify.app/static/media/flower.c1d96a861d71f5994479174deb668125.svg" alt="flower" />
            </div> */}
            <div className="user-image">
              <img src={images.an} alt="avatar" className='img-avatar' />
            </div>
            <div className="user-info">
              <h3 className="user-name">Ngọc An</h3>
              <p className="user-role">Ma Kết</p>
              <p className="user-desc">Là một chàng lập trình viên cung ma kết, vừa là một bí thư đoàn nên là sự hoà trộn giữa một người hướng nội và hướng ngoại. Thích ăn uống, bóng đá và đi hoạt động đoàn.</p>
              <ul className="user-socials flex ">
                <li className="user-social-item">
                  <a href="https://www.facebook.com/tranngoc.an.39904?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 3h2.5v-3h-2.5c-1.93 0-3.5 1.57-3.5 3.5v1.5h-2v3h2v8h3v-8h2.5l0.5-3h-3v-1.5c0-0.271 0.229-0.5 0.5-0.5z"></path></svg></a></li>
                <li className="user-social-item">
                  <a href="https://instagram.com/tran_ngoc_an10?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11 2.5c0-0.275 0.225-0.5 0.5-0.5h2c0.275 0 0.5 0.225 0.5 0.5v2c0 0.275-0.225 0.5-0.5 0.5h-2c-0.275 0-0.5-0.225-0.5-0.5v-2zM8 5c1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.656 0-3-1.344-3-3s1.344-3 3-3zM14 13.5v0c0 0.275-0.225 0.5-0.5 0.5h-11c-0.275 0-0.5-0.225-0.5-0.5v0-6.5h1.1c-0.066 0.322-0.1 0.656-0.1 1 0 2.762 2.237 5 5 5s5-2.238 5-5c0-0.344-0.034-0.678-0.1-1h1.1v6.5z"></path></svg>
                  </a>
                </li>
                <li className="user-social-item">
                  <a href="/#" target="_blank" rel="noreferrer">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z"></path></svg></a></li></ul></div></div><div className="user-card user-card-reverse aos-init aos-animate" data-aos="fade-left" data-aos-offset="300">
            {/* <div className="flower-icon">
              <img src="https://lnrsvp.netlify.app/static/media/flower.c1d96a861d71f5994479174deb668125.svg" alt="flower" />
            </div> */}
            <div className="user-image">
              <img src={images.linh} alt="avatar" className='img-avatar' />
            </div>
            <div className="user-info">
              <h3 className="user-name">Hoài Linh</h3>
              <p className="user-role">Thiên Bình</p>
              <p className="user-desc">Là cô bé có tính tình nóng nảy với mọi người, ít nói nhưng lại hay cười, thích yên tĩnh nhưng lại gặp người yêu nói nhiều, là người hướng nội nhưng thích hoạt động bên đoàn nhiều hơn là ở nhà.</p>
              <ul className="user-socials flex">
                <li className="user-social-item">
                  <a href="https://www.facebook.com/profile.php?id=100031658027413&mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 3h2.5v-3h-2.5c-1.93 0-3.5 1.57-3.5 3.5v1.5h-2v3h2v8h3v-8h2.5l0.5-3h-3v-1.5c0-0.271 0.229-0.5 0.5-0.5z"></path>
                    </svg>
                  </a>
                </li>
                <li className="user-social-item">
                  <a href="https://instagram.com/bum_linh09?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11 2.5c0-0.275 0.225-0.5 0.5-0.5h2c0.275 0 0.5 0.225 0.5 0.5v2c0 0.275-0.225 0.5-0.5 0.5h-2c-0.275 0-0.5-0.225-0.5-0.5v-2zM8 5c1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.656 0-3-1.344-3-3s1.344-3 3-3zM14 13.5v0c0 0.275-0.225 0.5-0.5 0.5h-11c-0.275 0-0.5-0.225-0.5-0.5v0-6.5h1.1c-0.066 0.322-0.1 0.656-0.1 1 0 2.762 2.237 5 5 5s5-2.238 5-5c0-0.344-0.034-0.678-0.1-1h1.1v6.5z"></path>
                    </svg>
                  </a>
                </li>
                <li className="user-social-item">
                  <a href="/#" target="_blank" rel="noreferrer">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-bg-banner" >
        <div className="section-bg-banner-text">
          <div className="container">
            <div className="col col-xs-12">
              <h4 className="text-center">
                <span>...Tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm về cùng một hướng...</span>
              </h4>
              <h2 className="text-center mt-3">--Forever one love--</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section page-main-intro">
        <section className="section section-story">
          <div className="section-content">
            <div className="container">
              <ul className="stories">
                <li className="story-item story-all story-first">
                  <div className="content-logo flex">
                    <img src={images.bgTraitim} alt="traitim" className='bg-traitim traitim1' /><h2>Our Love Story</h2> <img src={images.bgTraitim} alt="traitim" className='bg-traitim traitim2' />
                  </div>
                </li>
                <li className="story-item">
                  <div className="story-year">
                    <div className="double-border">04-07-2022</div>
                  </div>
                  <ul className="story-timeline">
                    <li className="timeline-item false null">
                      <div className="timeline-date">
                        <div className="double-border">20-10-2022</div>
                      </div>
                      <ul className="timeline-images">
                        <li className="image-item">
                          <img src={images.luaxanh} alt="story_image" />
                        </li>
                        <li className="image-item">
                          <img src={images.rapphim} alt="story_image" />
                        </li>
                      </ul>
                      <div className="timeline-story">
                        <div className="double-border">
                          <h4 className="title">Lần đầu gặp nhau và quyết định yêu nhau</h4>
                          <div className="underline-icon">
                            <svg width="148" height="17" viewBox="0 0 148 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M67.2226 1.0336L66.9971 0.796903L58.9102 8.50144L67.2225 16.4187L75.537 8.50144L67.448 0.796875L67.2226 1.0336ZM67.2226 1.48511L59.8581 8.50138L67.2226 15.5158L74.5889 8.50138L67.2226 1.48511Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M73.1998 1.03377L72.9745 0.796889L64.874 8.50161L73.1998 16.4185L81.5266 8.50161L73.4251 0.796875L73.1998 1.03377ZM73.1998 1.48495L65.8228 8.50155L73.1998 15.5163L80.5777 8.50155L73.1998 1.48495Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M72.8075 8.50138L80.1738 15.5158L87.5392 8.50138L80.1738 1.4851L72.8075 8.50138ZM80.1738 1.0336L79.9483 0.796875L71.8594 8.50144L80.1738 16.4187L88.4872 8.50144L80.3993 0.796889L80.1738 1.0336Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M0 8.6462V9.26953H54.2573V8.6462H0Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M93.2822 8.6462V9.26953H147.54V8.6462H93.2822Z" fill="currentColor"></path>
                            </svg>
                          </div>
                          <p className="content"> Gặp nhau lần đầu vào lúc đi ra mắt câu lạc bộ lửa xanh của xã Tam Tiến. Lúc đó 2 đứa chẳng có ấn tượng gì với nhau cả, nhưng cuộc đời đưa đẩy khiến hai đứa chụp chung một khung hình dù chẳng biết gì về nhau cả. Suốt thời gian sau vì công việc mà hai đứa chả liên lạc gì nữa và cũng xem như một người bạn loé qua thôi. Nhưng bước ngoặc vào lúc mình làm online tại nhà hai tuần, lúc đó hai đứa đã có những tìm hiểu sâu hơn về nhau và tụi mình đã có những cuộc hẹn, những buổi đi chơi cùng nhau. Cũng trong thời gian này, tụi mình đã nảy sinh tình cảm với nhau. Và điều gì đến cũng phải đến ngày 20-10-2022 là một ngày đẹp để bắt đầu một hành trình mới.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="story-item">
                  <div className="story-year">
                    <div className="double-border">2022</div>
                  </div>
                  <ul className="story-timeline">
                    <li className="timeline-item timeline-flex null">
                      <div className="timeline-slider">
                        <Slider className="img-slider categories-list flex" {...settings_categories}>
                          {categories.map((categories) => (
                            <div key={Math.random()} className="categories-item ">
                              <div className="categories-img">
                                <img className="categories-item-img" src={categories.src} alt="categories" />
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                      <div className="timeline-story">
                        <div className="double-border">
                          <h4 className="title">Kỷ niệm đáng nhớ</h4>
                          <div className="underline-icon">
                            <svg width="148" height="17" viewBox="0 0 148 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M67.2226 1.0336L66.9971 0.796903L58.9102 8.50144L67.2225 16.4187L75.537 8.50144L67.448 0.796875L67.2226 1.0336ZM67.2226 1.48511L59.8581 8.50138L67.2226 15.5158L74.5889 8.50138L67.2226 1.48511Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M73.1998 1.03377L72.9745 0.796889L64.874 8.50161L73.1998 16.4185L81.5266 8.50161L73.4251 0.796875L73.1998 1.03377ZM73.1998 1.48495L65.8228 8.50155L73.1998 15.5163L80.5777 8.50155L73.1998 1.48495Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M72.8075 8.50138L80.1738 15.5158L87.5392 8.50138L80.1738 1.4851L72.8075 8.50138ZM80.1738 1.0336L79.9483 0.796875L71.8594 8.50144L80.1738 16.4187L88.4872 8.50144L80.3993 0.796889L80.1738 1.0336Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M0 8.6462V9.26953H54.2573V8.6462H0Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M93.2822 8.6462V9.26953H147.54V8.6462H93.2822Z" fill="currentColor"></path></svg>
                          </div>
                          <p className="content"> Tụi mình đã cùng nhau trải qua nhiều kỉ niệm đẹp,
                            nhiều cảm xúc và hiểu nhau hơn. Tụi mình cũng gặp rất nhiều khó khăn khi yêu xa, không bên nhau để quan tâm chăm sóc nhau nhiều. Nhưng cũng chính khoảng thời gian đó đã giúp tụi mình nhận
                            ra đối phương thực sự quan trọng như thế nào, họ chính là người có thể đi chung cả cuộc đời này.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="story-item">
                  <div className="story-year">
                    <div className="double-border">2023</div>
                  </div><ul className="story-timeline">
                    <li className="timeline-item false timeline-video">
                      <div className="player-container">
                        <img src={images.n20231} alt="story_image" />
                      </div>
                      {/* <div className="timeline-date">
                        <div className="double-border">15 tháng 7</div>
                      </div> */}
                      <ul className="timeline-images">
                        <li className="image-item">
                          <img src={images.n20233} alt="story_image" />
                        </li>
                        <li className="image-item">
                          <img src={images.n20232} alt="story_image" />
                        </li>
                      </ul>
                      <div className="timeline-story">
                        <div className="double-border">
                          <h4 className="title">Kỳ vọng vào tương lai</h4>
                          <div className="underline-icon">
                            <svg width="148" height="17" viewBox="0 0 148 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M67.2226 1.0336L66.9971 0.796903L58.9102 8.50144L67.2225 16.4187L75.537 8.50144L67.448 0.796875L67.2226 1.0336ZM67.2226 1.48511L59.8581 8.50138L67.2226 15.5158L74.5889 8.50138L67.2226 1.48511Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M73.1998 1.03377L72.9745 0.796889L64.874 8.50161L73.1998 16.4185L81.5266 8.50161L73.4251 0.796875L73.1998 1.03377ZM73.1998 1.48495L65.8228 8.50155L73.1998 15.5163L80.5777 8.50155L73.1998 1.48495Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M72.8075 8.50138L80.1738 15.5158L87.5392 8.50138L80.1738 1.4851L72.8075 8.50138ZM80.1738 1.0336L79.9483 0.796875L71.8594 8.50144L80.1738 16.4187L88.4872 8.50144L80.3993 0.796889L80.1738 1.0336Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M0 8.6462V9.26953H54.2573V8.6462H0Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M93.2822 8.6462V9.26953H147.54V8.6462H93.2822Z" fill="currentColor"></path></svg>
                          </div>
                          <p className="content"> Trải qua quãng thời gian tìm hiểu nhau, có vui, có buồn, có hạnh phúc, có giận hờn, có cãi vã
                            chỉ có một thứ duy nhất không thay đổi, đó là tình yêu mà cả 2 dành cho nhau.
                            Tương lai hai đứa bây giờ còn giông dài và mờ mịt hi vọng cả hai sau này cùng nhau vượt qua mọi giông tố, để "love time" này được hoạt động mãi mãi".</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="story-item story-final story-all">
                  <p className="story-icon">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M201.837 53.087L177.547 21h55.676zM278.766 21l30.82 31.465L333.065 21h-54.298zm12.428 38.12L256 23.18l-35.25 35.985h70.5zm82.091 0l-23.511-30.855-23.003 30.9h46.57zM161.096 28.683L138.5 59.188h45.746zm51.248 48.242L256 196.821l43.69-119.896h-87.38zm-73.166 0l90.384 99.017-36.153-99.017h-54.231zm233.712 0h-54.23l-36.076 99.017zm-19.455 48.142l-29.059 31.838a154.298 154.298 0 0 1 85.786 138.119C410.14 380.008 340.995 449.197 256 449.197s-154.14-69.144-154.14-154.14a154.298 154.298 0 0 1 85.787-138.119L158.588 125.1a196.044 196.044 0 0 0-98.53 169.924C60.057 403.056 147.955 491 256 491c108.044 0 195.943-87.899 195.943-195.943a196.044 196.044 0 0 0-98.542-169.99z"></path></svg>
                  </p>
                  <div className="content">
                    <h4>To go in Marriage</h4>
                    <h2>To be continued...</h2>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <section className="section contact-section section-padding section-bg-img" id="wishes">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Sổ Lưu Bút</h2>
                <p>Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến tình yêu của chúng tôi!</p>
              </div>
            </div>
          </div>
          <FormChuc />
        </div>
      </section>
    </div>
  )
}
