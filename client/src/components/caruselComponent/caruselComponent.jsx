import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Card, Row, Col, Button, CardGroup } from "react-bootstrap";
import { Image } from 'react-bootstrap/Image'

const Carusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://media-beta.romaniatv.net/unsafe/1020x574/smart/filters:contrast(5):format(webp):quality(92)/https://www.economica.net/wp-content/uploads/2015/03/dunarea_la_braila_33431600.jpg" alt='...' />

        <Carousel.Caption>
          <h3>Braila, orasul de la Dunare</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="http://2.bp.blogspot.com/-YBOVQXbnia0/Ubt7yMvb3II/AAAAAAAAAc8/1N3e3C8jlMk/s1600/925_001.jpg" alt='...' />


        <Carousel.Caption>
          
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.restaurante-braila.ro/modules/view_image.php?image=photos/8226101253450_1569838939846046_5341905208358207488_n.jpg&watermark=1" alt='...' />

        <Carousel.Caption>
          <h3></h3>
          <p>

            

            


          </p>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carusel;