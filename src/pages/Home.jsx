import React from 'react'
import '../styles/home.css'

import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/featured-tours/FeaturedTourList'

const Home = () => {
  return (
    <>

    {/* hero content start */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='hero__content'>
              <div className='hero__subtitle d-flex align-items-center'>
                <Subtitle subtitle= {'Know Before You Go'} />
                <img src={worldImg} alt='/'></img>
              </div>
              <h1>
                Traveling Opens the Door to Creating{' '}
                <span className='highlight'> Memories </span>
              </h1>
              <p> Unleash your wanderlust with our website's curated adventures, 
                taking you to breathtaking landscapes, vibrant cultures, and iconic landmarks. 
                From sun-kissed beaches to snow-capped mountains, explore hidden gems and unforgettable experiences.
                With seamless itineraries and personalized recommendations, 
                we guide you on a journey of wonder and discovery. 
                Let us be your compass to a world of possibilities where every click unlocks a masterpiece
              </p>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box'>
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box mt-4'>
              <video src={heroVideo} controls autoplay loop muted alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box mt-5'>
              <img src={heroImg02} alt="" />
            </div>
          </Col>

          <SearchBar/>
        </Row>
      </Container>

    </section>

    {/* hero content end */}

    {/* hero section start */}

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services__subtitle'> What We Serve</h5>
            <h2 className='services__title'>We Offer Our Best Services</h2>
            
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>
    {/* hero section end */}

    {/* featured tour selection start */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'}/>
            <h2 className='featured__tour-title'>Our Featured Tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>

    {/* featured tour selection end */}

    </>
  )
}

export default Home