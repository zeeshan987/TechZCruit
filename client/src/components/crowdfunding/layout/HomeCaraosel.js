import React, { Fragment, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import marketing from "../../../img/marketing.png";
import marketing2 from "../../../img/marketing2.jpg";
import marketing3 from "../../../img/marketing3.jpg";

export default function HomeCaraosel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='d-block w-100' src={marketing} alt='First slide' />
        <Carousel.Caption>
        
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={marketing2} alt='Second slide' />

        <Carousel.Caption>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={marketing3} alt='Third slide' />

        <Carousel.Caption>
        
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// render(<ControlledCarousel />);
