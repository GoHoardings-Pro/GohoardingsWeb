import React from 'react'
import './Home.css'
import Nav from '../../Components/Headers/Nav'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Headers/Footer/Footer'

const Home = () => {
  return (
    <>
      <Nav />
      <div className='home_container'>
        <div className="home_titles">
          <div className="home_title">
            <h1>India's <br />Largest Outdoor <br />Advartising Agency</h1>

          </div>
          <div className="home_sub_title">
            <span>OOH Advertising made easy <br />Search Media. Check Availability. Book Online.</span>

          </div>
          <div className="home_title_btns">
            <Link to={'/'}>Lorme</Link>
            <Link to={'/'}>Lorme</Link>
          </div>
        </div>
        <div className="home_banner">
          <img src="/asserts/images/Homepage_Banner01.png" alt="" />
          <svg width="318" height="200" viewBox="0 0 318 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75006 7.69304C5.64992 7.69304 7.19006 6.15726 7.19006 4.26278C7.19006 2.3683 5.64992 0.83252 3.75006 0.83252C1.8502 0.83252 0.310059 2.3683 0.310059 4.26278C0.310059 6.15726 1.8502 7.69304 3.75006 7.69304Z" fill="#808080" />
            <path d="M55.0699 7.69304C56.9697 7.69304 58.5099 6.15726 58.5099 4.26278C58.5099 2.3683 56.9697 0.83252 55.0699 0.83252C53.17 0.83252 51.6299 2.3683 51.6299 4.26278C51.6299 6.15726 53.17 7.69304 55.0699 7.69304Z" fill="#808080" />
            <path d="M106.38 7.69304C108.28 7.69304 109.82 6.15726 109.82 4.26278C109.82 2.3683 108.28 0.83252 106.38 0.83252C104.48 0.83252 102.94 2.3683 102.94 4.26278C102.94 6.15726 104.48 7.69304 106.38 7.69304Z" fill="#808080" />
            <path d="M157.69 7.69304C159.59 7.69304 161.13 6.15726 161.13 4.26278C161.13 2.3683 159.59 0.83252 157.69 0.83252C155.79 0.83252 154.25 2.3683 154.25 4.26278C154.25 6.15726 155.79 7.69304 157.69 7.69304Z" fill="#808080" />
            <path d="M209 7.69304C210.9 7.69304 212.44 6.15726 212.44 4.26278C212.44 2.3683 210.9 0.83252 209 0.83252C207.1 0.83252 205.56 2.3683 205.56 4.26278C205.56 6.15726 207.1 7.69304 209 7.69304Z" fill="#808080" />
            <path d="M260.32 7.69304C262.22 7.69304 263.76 6.15726 263.76 4.26278C263.76 2.3683 262.22 0.83252 260.32 0.83252C258.42 0.83252 256.88 2.3683 256.88 4.26278C256.88 6.15726 258.42 7.69304 260.32 7.69304Z" fill="#808080" />
            <path d="M311.63 7.69304C313.53 7.69304 315.07 6.15726 315.07 4.26278C315.07 2.3683 313.53 0.83252 311.63 0.83252C309.73 0.83252 308.19 2.3683 308.19 4.26278C308.19 6.15726 309.73 7.69304 311.63 7.69304Z" fill="#808080" />
            <path d="M362.94 7.69304C364.84 7.69304 366.38 6.15726 366.38 4.26278C366.38 2.3683 364.84 0.83252 362.94 0.83252C361.04 0.83252 359.5 2.3683 359.5 4.26278C359.5 6.15726 361.04 7.69304 362.94 7.69304Z" fill="#808080" />
            <path d="M414.26 7.69304C416.16 7.69304 417.7 6.15726 417.7 4.26278C417.7 2.3683 416.16 0.83252 414.26 0.83252C412.36 0.83252 410.82 2.3683 410.82 4.26278C410.82 6.15726 412.36 7.69304 414.26 7.69304Z" fill="#808080" />
            <path d="M3.75006 50.4714C5.64992 50.4714 7.19006 48.9356 7.19006 47.0411C7.19006 45.1466 5.64992 43.6108 3.75006 43.6108C1.8502 43.6108 0.310059 45.1466 0.310059 47.0411C0.310059 48.9356 1.8502 50.4714 3.75006 50.4714Z" fill="#808080" />
            <path d="M55.0699 50.4714C56.9697 50.4714 58.5099 48.9356 58.5099 47.0411C58.5099 45.1466 56.9697 43.6108 55.0699 43.6108C53.17 43.6108 51.6299 45.1466 51.6299 47.0411C51.6299 48.9356 53.17 50.4714 55.0699 50.4714Z" fill="#808080" />
            <path d="M106.38 50.4714C108.28 50.4714 109.82 48.9356 109.82 47.0411C109.82 45.1466 108.28 43.6108 106.38 43.6108C104.48 43.6108 102.94 45.1466 102.94 47.0411C102.94 48.9356 104.48 50.4714 106.38 50.4714Z" fill="#808080" />
            <path d="M157.69 50.4714C159.59 50.4714 161.13 48.9356 161.13 47.0411C161.13 45.1466 159.59 43.6108 157.69 43.6108C155.79 43.6108 154.25 45.1466 154.25 47.0411C154.25 48.9356 155.79 50.4714 157.69 50.4714Z" fill="#808080" />
            <path d="M209 50.4714C210.9 50.4714 212.44 48.9356 212.44 47.0411C212.44 45.1466 210.9 43.6108 209 43.6108C207.1 43.6108 205.56 45.1466 205.56 47.0411C205.56 48.9356 207.1 50.4714 209 50.4714Z" fill="#808080" />
            <path d="M260.32 50.4714C262.22 50.4714 263.76 48.9356 263.76 47.0411C263.76 45.1466 262.22 43.6108 260.32 43.6108C258.42 43.6108 256.88 45.1466 256.88 47.0411C256.88 48.9356 258.42 50.4714 260.32 50.4714Z" fill="#808080" />
            <path d="M311.63 50.4714C313.53 50.4714 315.07 48.9356 315.07 47.0411C315.07 45.1466 313.53 43.6108 311.63 43.6108C309.73 43.6108 308.19 45.1466 308.19 47.0411C308.19 48.9356 309.73 50.4714 311.63 50.4714Z" fill="#808080" />
            <path d="M362.94 50.4714C364.84 50.4714 366.38 48.9356 366.38 47.0411C366.38 45.1466 364.84 43.6108 362.94 43.6108C361.04 43.6108 359.5 45.1466 359.5 47.0411C359.5 48.9356 361.04 50.4714 362.94 50.4714Z" fill="#808080" />
            <path d="M414.26 50.4714C416.16 50.4714 417.7 48.9356 417.7 47.0411C417.7 45.1466 416.16 43.6108 414.26 43.6108C412.36 43.6108 410.82 45.1466 410.82 47.0411C410.82 48.9356 412.36 50.4714 414.26 50.4714Z" fill="#808080" />
            <path d="M3.75006 93.2499C5.64992 93.2499 7.19006 91.7141 7.19006 89.8197C7.19006 87.9252 5.64992 86.3894 3.75006 86.3894C1.8502 86.3894 0.310059 87.9252 0.310059 89.8197C0.310059 91.7141 1.8502 93.2499 3.75006 93.2499Z" fill="#808080" />
            <path d="M55.0699 93.2499C56.9697 93.2499 58.5099 91.7141 58.5099 89.8197C58.5099 87.9252 56.9697 86.3894 55.0699 86.3894C53.17 86.3894 51.6299 87.9252 51.6299 89.8197C51.6299 91.7141 53.17 93.2499 55.0699 93.2499Z" fill="#808080" />
            <path d="M106.38 93.2499C108.28 93.2499 109.82 91.7141 109.82 89.8197C109.82 87.9252 108.28 86.3894 106.38 86.3894C104.48 86.3894 102.94 87.9252 102.94 89.8197C102.94 91.7141 104.48 93.2499 106.38 93.2499Z" fill="#808080" />
            <path d="M157.69 93.2499C159.59 93.2499 161.13 91.7141 161.13 89.8197C161.13 87.9252 159.59 86.3894 157.69 86.3894C155.79 86.3894 154.25 87.9252 154.25 89.8197C154.25 91.7141 155.79 93.2499 157.69 93.2499Z" fill="#808080" />
            <path d="M209 93.2499C210.9 93.2499 212.44 91.7141 212.44 89.8197C212.44 87.9252 210.9 86.3894 209 86.3894C207.1 86.3894 205.56 87.9252 205.56 89.8197C205.56 91.7141 207.1 93.2499 209 93.2499Z" fill="#808080" />
            <path d="M260.32 93.2499C262.22 93.2499 263.76 91.7141 263.76 89.8197C263.76 87.9252 262.22 86.3894 260.32 86.3894C258.42 86.3894 256.88 87.9252 256.88 89.8197C256.88 91.7141 258.42 93.2499 260.32 93.2499Z" fill="#808080" />
            <path d="M311.63 93.2499C313.53 93.2499 315.07 91.7141 315.07 89.8197C315.07 87.9252 313.53 86.3894 311.63 86.3894C309.73 86.3894 308.19 87.9252 308.19 89.8197C308.19 91.7141 309.73 93.2499 311.63 93.2499Z" fill="#808080" />
            <path d="M362.94 93.2499C364.84 93.2499 366.38 91.7141 366.38 89.8197C366.38 87.9252 364.84 86.3894 362.94 86.3894C361.04 86.3894 359.5 87.9252 359.5 89.8197C359.5 91.7141 361.04 93.2499 362.94 93.2499Z" fill="#808080" />
            <path d="M414.26 93.2499C416.16 93.2499 417.7 91.7141 417.7 89.8197C417.7 87.9252 416.16 86.3894 414.26 86.3894C412.36 86.3894 410.82 87.9252 410.82 89.8197C410.82 91.7141 412.36 93.2499 414.26 93.2499Z" fill="#808080" />
            <path d="M3.75006 136.018C5.64992 136.018 7.19006 134.483 7.19006 132.588C7.19006 130.694 5.64992 129.158 3.75006 129.158C1.8502 129.158 0.310059 130.694 0.310059 132.588C0.310059 134.483 1.8502 136.018 3.75006 136.018Z" fill="#808080" />
            <path d="M55.0699 136.018C56.9697 136.018 58.5099 134.483 58.5099 132.588C58.5099 130.694 56.9697 129.158 55.0699 129.158C53.17 129.158 51.6299 130.694 51.6299 132.588C51.6299 134.483 53.17 136.018 55.0699 136.018Z" fill="#808080" />
            <path d="M106.38 136.018C108.28 136.018 109.82 134.483 109.82 132.588C109.82 130.694 108.28 129.158 106.38 129.158C104.48 129.158 102.94 130.694 102.94 132.588C102.94 134.483 104.48 136.018 106.38 136.018Z" fill="#808080" />
            <path d="M157.69 136.018C159.59 136.018 161.13 134.483 161.13 132.588C161.13 130.694 159.59 129.158 157.69 129.158C155.79 129.158 154.25 130.694 154.25 132.588C154.25 134.483 155.79 136.018 157.69 136.018Z" fill="#808080" />
            <path d="M209 136.018C210.9 136.018 212.44 134.483 212.44 132.588C212.44 130.694 210.9 129.158 209 129.158C207.1 129.158 205.56 130.694 205.56 132.588C205.56 134.483 207.1 136.018 209 136.018Z" fill="#808080" />
            <path d="M260.32 136.018C262.22 136.018 263.76 134.483 263.76 132.588C263.76 130.694 262.22 129.158 260.32 129.158C258.42 129.158 256.88 130.694 256.88 132.588C256.88 134.483 258.42 136.018 260.32 136.018Z" fill="#808080" />
            <path d="M311.63 136.018C313.53 136.018 315.07 134.483 315.07 132.588C315.07 130.694 313.53 129.158 311.63 129.158C309.73 129.158 308.19 130.694 308.19 132.588C308.19 134.483 309.73 136.018 311.63 136.018Z" fill="#808080" />
            <path d="M362.94 136.018C364.84 136.018 366.38 134.483 366.38 132.588C366.38 130.694 364.84 129.158 362.94 129.158C361.04 129.158 359.5 130.694 359.5 132.588C359.5 134.483 361.04 136.018 362.94 136.018Z" fill="#808080" />
            <path d="M414.26 136.018C416.16 136.018 417.7 134.483 417.7 132.588C417.7 130.694 416.16 129.158 414.26 129.158C412.36 129.158 410.82 130.694 410.82 132.588C410.82 134.483 412.36 136.018 414.26 136.018Z" fill="#808080" />
          </svg>

        </div>
      </div>
      <div className="section_container">
        <div className="section_divider">
          <strong>IMPACT WHERE IT MATTERS</strong>
          <hr />
        </div>
        <div className="section_title ">
          <strong>WE GET YOU INDIA</strong>
          <span>Our media reaches 7 out of 10 Indian’s weekly. <br />That’s one big audience- and a lot of little ones too.</span>
        </div>
        <div className="section_input">
          <form className="section_input_item">

            <i class="fa-solid fa-location-dot"></i>
            <input type="text" placeholder='' />
            <input type="submit" value='search' />
          </form>
        </div>
        <div className="section_reachs">
          <div className="section_reach">
            <strong>100</strong>
            <span>LOCAL &  INTERNATIONAL MARKET</span>
          </div>
          <div className="section_reach">
            <strong>100 <span>M+</span></strong>
            <span>IMPRESSION A DAY</span>
          </div>
          <div className="section_reach">
            <strong>100 <span>M+</span></strong>
            <span>MEDIA LOCATION </span>
          </div>
        </div>
      </div>
      <div className="section_container section_services mt-5">
        <div className="section_title mt-4">
          <strong>OUR SERVICES</strong>
        </div>
        <div className="section_square_fream  m-auto">

          <div className="row">

            <div className=" col-4 col-md-4 frame-square">

            </div>
            <div className=" col-4 col-md-4 frame-square">

            </div>
            <div className=" col-4 col-md-4 frame-square">

            </div>
          </div>
          <div className="row">
            <div className="col-4 col-md-4 frame-square">

            </div>
            <div className=" col-4 col-md-4 frame-square">

            </div>
            <div className=" col-4 col-md-4 frame-square">

            </div>
          </div>
        </div>
      </div>

      <div className="section_container section_inseparation">
        <div className="section_divider">
          <strong>INSPIRATION</strong>
          <hr />
        </div>
        <div className="section_title ">
          <strong>WORK THAT WORKS</strong>
        </div>
        <div className="section_work_cards">
          <div className="section_card_pre">
            <div className="work_card_play play_previous">
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="img">

            </div>
            <div className="work_card_play play_next">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div className="section_card_front">
            <div className="card_pages_no">
              <span>01</span>/
              <span>02</span>/
              <span>03</span>/
              <span>04</span>
            </div>
            <div className="card_page_title">
              <strong>BECOME AN ADVERTISER </strong>
            </div>
            <div className="card_page_subtitle">
              <strong> ”That day we sold out by 4:30pm. The only thing that to is the digital advertising that you provided that day“</strong>
            </div>
            <div className="card_page_btn">
              <button>VIEW MORE WORK</button>
            </div>
          </div>
        </div>
      </div>


      <div className="section_container">
        <div className="section_divider">
          <strong> LATEST </strong>
          <hr />
        </div>
        <div className="section_title ">
          <strong>UPDATES</strong>
        </div>
        <div className="update_cards">
        <div className="row mb-2 ">
          <div className="col-4 p-3">
            <div className="update_img">

            </div>
          </div>
          <div className="col-4 p-3 marginLeft" >
            <div className="update_title_top"> IN THE PRESS </div>
            <div className="update_title">OBIE  AWARD </div>
            <div className="update_subtitle">OUTFRONT STUDIOS Dominates At The Out Of Home Advertising Association’s OBIEAward </div>
          </div>
          <div className="col-4 p-3">
          <div className="update_title_top"> IN THE PRESS </div>
            <div className="update_title">2020 Result </div>
            <div className="update_subtitle">OUTFRONT Media Reports first quarter
2020 Result </div>
          
          </div>
        </div>
        <div className="row mb-2">
          
        <div className="col-4 p-3">
            <div className="update_title_top"> IN THE PRESS </div>
            <div className="update_title">OBIE  AWARD </div>
            <div className="update_subtitle">OUTFRONT STUDIOS Dominates At The Out Of Home Advertising Association’s OBIEAward </div>
          </div>
          <div className="col-4 p-3 marginLeft">
          <div className="update_title_top"> IN THE PRESS </div>
            <div className="update_title">2020 Result </div>
            <div className="update_subtitle">OUTFRONT Media Reports first quarter
2020 Result </div>
          
          </div>
          <div className="col-4 p-3">
            <div className="update_img">

            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-4 p-3">
            <div className="update_img">

            </div>
          </div>
          <div className="col-4 p-3 marginLeft">
            <div className="update_title_top"> IN THE PRESS </div>
            <div className="update_title">OBIE  AWARD </div>
            <div className="update_subtitle">OUTFRONT STUDIOS Dominates At The Out Of Home Advertising Association’s OBIEAward </div>
          </div>
          <div className="col-4 p-3">
            <div className="update_title_top"> IN THE PRESS </div>
            <div className="update_title">2020 Result </div>
            <div className="update_subtitle">OUTFRONT Media Reports first quarter
2020 Result </div>
          
          </div>
        </div>
        </div>
      </div>

      <div className="section_container mt-5">
       
        <div className="section_title mt-5 ">
          <strong>UPDATES</strong>
        </div>

        <div class="hexagon-gallery">
      <div class="hex"><img src="https://images.pexels.com/photos/1421264/pexels-photo-1421264.jpeg?cs=srgb&dl=aerial-aerial-photo-aerial-photography-1421264.jpg&fm=jpg" alt="some"/></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
    </div>
      </div>

      <div className="section_container mt-5">
       
       <div className="section_title mt-5 ">
         <strong>GET IN TOUCH</strong>
         <span>How can we help you? We’d love to hear from you</span>
       </div>


      
        <div className="box-form row">
            <div className="left col-6">
              <div className="left_tities">
              <div className="left_title">
                <strong><span>Come</span> to see us!</strong>
              </div>
              <div className="left_address">GOHOARDINGS Solutions LLP <br />E-82, 3rd Floor, Sector 06 <br />Noida, 201301 (U.P.)</div>
              </div>
              <div className="left_img">
                <img src="/assests/Get_in_touch.png" alt="" />
              </div>
              <div className="social_icon">
                     <span>
                        <Link to="#"><i className="fa fa-google" aria-hidden="true"></i></Link>
                        <Link to="#"><i className="fa fa-google" aria-hidden="true"></i></Link>
                        <Link to="#"><i className="fa fa-google" aria-hidden="true"></i></Link>
                        <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                    </span>
                </div>
            </div>

            <form className="right col-6" >
            <div className="left_tities">
              <div className="left_title">
                <strong>Let's<span> talk</span></strong>
              </div>
              <div className="left_address">To request a quote or want to meet up for coffee, contact me <br />directly or fill out the form and I will get back to you soon.</div>
              </div>
                <div className="inputs">
                    <div className="input">
                        <input name='name' type="text"  placeholder="Your Name"  required/><i className="fa-solid fa-user"></i>
                    </div><br />
                    <div className="input">
                         <input type="email" name='email'  placeholder="Your Email"  required/><i className="fa-solid fa-envelope"></i>
                    </div>
                    <br />
                    <div className="input">
                      <textarea name="" id="" cols="56" placeholder='Message ...' rows="8"></textarea>
                         {/* <input type="password" name='password'  placeholder="password"  required/><i className="fa-solid fa-lock"></i> */}
                    </div>
                    <div className="social_icons">
                    <input id='sumitIcon' type="Submit" value={'Send Message'}/>

                    </div>
                </div>

           
            </form>

        </div>
        </div>
      
      <div className="footerSectionButtom">
        <Footer />
      </div>
    </>
  )
}

export default Home