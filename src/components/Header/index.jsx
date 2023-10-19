import { Container } from './styles';
import { Input } from "../../components/Input"; 
import { FiSearch, FiLogOut } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";

/*import {AiOutlineMenu, AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {PiReceipt, PiCreditCard, PiCaretLeft, PiCaretRight, PiForkKnife, PiPencilSimple } from "react-icons/pi";
import {MdOutlinePix} from "react-icons/md"
import {HiOutlineHeart, HiHeart} from "react-icons/hi"
*/

export function Header(){
  return(
    <Container>
        <div className='logoUser'>
          <svg width="30" height="30" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z"
            fill="#065E7C"/>
          </svg>
          <p>food explorer <span >admin</span></p>
        </div>    

        <div className='userInput'>
          <Input
            placeholder="Busque por pratos ou ingredientes"
            type="text"
            icon={FiSearch}
          />
        </div>

        <a href='' className='buttonChart'>
          <PiReceipt size={32}/> 
          <p>Pedidos (00)</p>
        </a>

        <FiLogOut className='logoutIcon'/>

        <div className='mobileHeader'>
          <AiOutlineClose className='closeIcon'/>
          <p>Menu</p>
        </div>
    </Container>
  );
}


/*
 EDITAR ISSO AQUI <Button title=" ${PiReceipt} Pedidos"/>
*/