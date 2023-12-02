
import {Container, Card} from "./styles";
import {motion} from "framer-motion";
import image1 from "../../assetsNew/gambe.png";
import image2 from "../../assetsNew/macaron.png";
import image3 from "../../assetsNew/ravanello.png";
import {useState, useEffect, useRef} from "react";
import { ButtonQuantity } from "../ButtonQuantity";
import { Button } from "../Button";
import {HiOutlineHeart} from "react-icons/hi"; // HiHeart
import {PiCaretRight} from "react-icons/pi"; 
import Dish from "../../assets/dishes/salada.png";


const images = [image1, image2, image3];
// const starter = [image1, image2, image3];
// const mainCourse = [image1, image2, image3];
// const dessert = [image1, image2, image3];
// const drinks = [image1, image2, image3];

export function NewCarousel(){
  const carousel = useRef();
  const[width, setWidth] = useState(0);
  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return(
    <Container>
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div className="inner"> 
          
          {images.map(image => (
            <motion.div 
              className="item"  
              drag="x"  
              dragConstraints={{right: 0, left: -width}} 
              initial={{x: 100}} 
              animate={{x: 0}}
              transition={{duration: 0.8}}
              key={image} // key={String(dish.id)}
              >
              {/* <img src="{image}" alt="nome da comida"/> */}
              <Card>

                <div className="interactionIcon">
                  <HiOutlineHeart className="emptyHeart" size={24}/>
                  {/* <HiHeart className="fullHEart"/> */}
                  {/* <PiPencilSimple className="pencil"/> */}
                </div>   

                <div className="image">
                <img src={Dish} alt="Imagem do prato" />
                </div>

                {/* <DishInfos> */}
                  
                  <h1>Spaguetti Gambe<span><PiCaretRight size={18}/></span></h1>
                  <p>Massa fresca com camarões e pesto. </p>
                  <h2>R$ 79,97 </h2>
                {/* </DishInfos> */}

                <div className="order">
                  <ButtonQuantity/>  
                  <Button title="Incluir"/> 
                </div>
              </Card>              
            </motion.div>
          ))}
          
          
        
        </motion.div>
      </motion.div>
    </Container>
  )
}