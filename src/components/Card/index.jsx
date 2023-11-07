import { Container} from './styles';

import {HiOutlineHeart, HiHeart} from "react-icons/hi";
import {PiCaretRight, PiPencilSimple } from "react-icons/pi";
import {ButtonQuantity} from "../../components/ButtonQuantity";
import {Button} from "../../components/Button";

/*import {AiOutlineMenu, AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {PiReceipt, PiCreditCard, PiCaretLeft, PiCaretRight, PiForkKnife, PiPencilSimple } from "react-icons/pi";
import {MdOutlinePix} from "react-icons/md"
import {HiOutlineHeart, HiHeart} from "react-icons/hi"
*/

export function Card() {
  return(
    <Container>  
      <div className="interactionIcon">
        <HiOutlineHeart className="emptyHeart" size={24}/>
        {/* <HiHeart className="fullHEart"/> */}
        {/* <PiPencilSimple className="pencil"/> */}
      </div>   

      <div className="image">
       <img src="../../assets/dishes/imageTest.png" alt="Imagem do prato" />
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
    </Container>    
  )
}

