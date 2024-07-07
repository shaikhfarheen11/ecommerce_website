import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './AboutUs.css';
import AboutUsImage from './About.png';
import { FaYoutube, FaFacebook, FaSpotify } from 'react-icons/fa';


const redirectToSpotify = () => {
  window.open('https://www.spotify.com');
};

const AboutUs = () => {
  const isAboutPage = true;
  return (
    <Container className="about-container">
      <Row>
        <Col>
          <h2 className="about">ABOUT</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} className="about-image-container">
          <Image src={AboutUsImage} alt="About" className="about-image" roundedCircle />
        </Col>
        <Col sm={12} md={6} className="about-text">
          <p className="about-caption">
            Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows,
            hates no prosecutors will unfold in the enduring of which were born in it? 
            Often leads smallest mistake some pain main responsibilities are to stand for 
            the right builder of pleasure, accepted explain up to now. ,  The things we are accusing of these in the explication of the truth receives from the flattery of 
          her will never be the trouble and they are refused to the pleasures and the 
          pleasures of the pain, explain the treatment of excepturi of the blessed 
          sufferings. I never said will unfold in him receives at another time he may please 
          the one that those works, we are less than they, this refused to the pleasures of 
          deleniti? Those are! Will unfold in times of pleasure, this pain will be a right 
          enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the 
          needs of the agony of the choice . We hate the fellow. Lorem ipsum dolor, sit amet consectetur</p>
        </Col>
      </Row>
      <div className="horizontal-lines">
        <p>
           rebates. The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns.
        </p>
      </div>

      {isAboutPage && (
        <div className="the-generic">
          <div className="social">
            <FaYoutube
              onClick={() => window.open('https://www.youtube.com')}
              className="youtube-about"
            />
            <FaSpotify
              onClick={redirectToSpotify}
              style={{ cursor: 'pointer' }}
              className="spotify-about"
            />
            <FaFacebook
              onClick={() => window.open('https://www.facebook.com')}
              className="facebook-about"
            />
          </div>
          <div className="generics-ti">The Generics</div>
        </div>
      )}
    </Container>
  );
};

export default AboutUs;