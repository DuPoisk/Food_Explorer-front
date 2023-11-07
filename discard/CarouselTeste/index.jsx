import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container} from '../../src/components/Card/styles';

export function CarouselTeste(){
  <Container>
    const dishes = [
      {
        id: 1,
        name: "Dish 1",
        description: "This is the first dish description.",
        price: "$10.99",
        image: "dish1.jpg",
      },
      
      {
        id: 2,
        name: "Dish 2",
        description: "This is the second dish description.",
        price: "$12.99",
        image: "dish2.jpg",
      },
      {
        id: 3,
        name: "Dish 3",
        description: "This is the third dish description.",
        price: "$9.99",
        image: "dish3.jpg",
      },
      {
        id: 4,
        name: "Dish 4",
        description: "This is the fourth dish description.",
        price: "$11.99",
        image: "dish4.jpg",
      },
      // Add more dishes as needed
    ];

    const Card = ({ dish }) => (
      <div className="card">
        <img src={dish.image} alt={dish.name} />
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
        <p>{dish.price}</p>
      </div>
    );

    const Carousel = () => {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
      };

      return (
        <div className="carousel-container">
          <Slider {...settings}>
            {dishes.map((dish) => (
              <div key={dish.id}>
                <Card dish={dish} />
              </div>
            ))}
          </Slider>
        </div>
      );
    };
  </Container>/
}

