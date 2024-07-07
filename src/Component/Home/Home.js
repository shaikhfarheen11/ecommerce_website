
import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Home.module.css';

const Home = () => {
  return (
    <Container className={classes.homeContainer}>
      <div className= {classes.genericsec}>
        <Row>
          <Col>
            <h2 className= {classes.genericsTitlee}>The Generics</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className={classes.homeButton}>
              Get Our Latest Album
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
          <Button className={classes.roundedButton}> ► </Button>
         </Col>
        </Row>
        
        <Row>
            <Col>
            <h1 className={classes.tour}>Tours</h1>
            
            <table className= {classes.tourTable}>
              <tr>
                <td>JUL 16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td><Button className={classes.buy_tickets}>BUY TICKETS</Button></td>
              </tr>
              <tr>
                <td>JUL 19</td>
                <td>TORONTO, ON</td>
                <td>BUDWEISER STAGE</td>
                <td><Button className={classes.buy_tickets}>BUY TICKETS</Button></td>
              </tr>
              <tr>
                <td>JUL 22</td>
                <td>BRISTOW, VA</td>
                <td>JIFFY LUBE LIVE</td>
                <td><Button className= {classes.buy_tickets}>BUY TICKETS</Button></td>
              </tr>
              <tr>
                <td>JUL 29</td>
                <td>PHOENIX, AZ</td>
                <td>AK-CHIN PAVILION</td>
                <td><Button className= {classes.buy_tickets}>BUY TICKETS</Button></td>
              </tr>
              <tr>
                <td>AUG 2</td>
                <td>LAS VEGAS, NV</td>
                <td>T-MOBILE ARENA</td>
                <td><Button className={classes.buy_tickets}>BUY TICKETS</Button></td>
              </tr>
              <tr>
                <td>AUG 7</td>
                <td>CONCORD, CA</td>
                <td>CONCORD PAVILION</td>
                <td><Button className= {classes.buy_tickets}>BUY TICKETS</Button></td>
              </tr>
            </table>
            </Col>
        </Row>

        <div className={classes.genericsBottom}>
        <Row>
          <Col>
            <h2 className= {classes.genericsBt}>The Generics</h2>
          </Col>
        </Row>
        </div>
      </div>
    </Container>
  );
};

export default Home;
