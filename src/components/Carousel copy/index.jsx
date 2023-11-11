import { Container} from '../Card/styles';

import {HiOutlineHeart, HiHeart} from "react-icons/hi";
import {PiCaretLeft, PiCaretRight, PiPencilSimple } from "react-icons/pi";
import {ButtonQuantity} from "../ButtonQuantity";
import {Button} from "../Button";
import {Card} from "../Card";
import { useEffect, useState, useRef } from 'react';

/*import {AiOutlineMenu, AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {PiReceipt, PiCreditCard, PiCaretLeft, PiCaretRight, PiForkKnife, PiPencilSimple } from "react-icons/pi";
import {MdOutlinePix} from "react-icons/md"
import {HiOutlineHeart, HiHeart} from "react-icons/hi"
*/

export function Carousel() {
  const[data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/static/shoes.json") //  api
    .then((response) => response.json())
    .then(setData); // passando a função como parâmetro
  }, []);

  const handleLeftClick = (event) => {
    event.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth; // vai subtrair quando eu clicar e vai para a esquerda
  }
  const handleRightClick = (event) => {
    event.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth; // vai somar quando eu clicar e vai para a direita
  }

  if(!data || !data.length) return null; // se nã otiver os dados ou o array de dados estiver vazio, retorna null

  return(
    <Container>  
      <div className="carousel" ref={carousel}>
        {data.map((card) => {
          const{ id, image, name, description, price } = card;
          return(
            <div className="card" key={id}>
              <div className="interactionIcon">
                <HiOutlineHeart className="emptyHeart" size={24}/>
                {/* <HiHeart className="fullHEart"/> */}
                {/* <PiPencilSimple className="pencil"/> */}
              </div>   

              <div className="image">
              <img src={image} alt={name} />
              </div>

              <div className="dishInfos">
                <h1>{name}<span><PiCaretRight size={18}/></span></h1>
                <p>{description} </p>
                <h2>R$ {price} </h2>
              </div>     

              <div className="order">
                <ButtonQuantity/>  
                <Button title="Incluir"/> 
              </div>
            </div>
          );
        })}              
      </div>

      <div className="moveButtons">
        <PiCaretLeft onClick={handleLeftClick}/>
        <PiCaretRight onClick={handleRightClick}/>
      </div>      
    </Container>    
  )
}

