import { Container } from './styles';
import { AiOutlineMenu } from "react-icons/ai";
import { PiReceipt } from "react-icons/pi";
import {Button} from "../Button";
/*import {AiOutlineMenu, AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {PiReceipt, PiCreditCard, PiCaretLeft, PiCaretRight, PiForkKnife, PiPencilSimple } from "react-icons/pi";
import {MdOutlinePix} from "react-icons/md"
import {HiOutlineHeart, HiHeart} from "react-icons/hi"
*/

export function HeaderMobileDishes(){
  return(
    <Container>
        <AiOutlineMenu className='menuIcon'/>

        <div className='logoUser'>
          <svg width="30" height="30" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z"
            fill="#065E7C"/>
          </svg>
          <p>food explorer </p>
          <span>admin</span>
        </div>  

        <div className="orderSummary">
          <PiReceipt className='receiptIcon'/>
          <Button title="0" className="buttonSummary"/>  
        </div>
         
    </Container>
  );
}
