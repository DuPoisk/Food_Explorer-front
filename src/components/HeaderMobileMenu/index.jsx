import { Container } from './styles';
import { AiOutlineClose } from "react-icons/ai";

/*import {AiOutlineMenu, AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {PiReceipt, PiCreditCard, PiCaretLeft, PiCaretRight, PiForkKnife, PiPencilSimple } from "react-icons/pi";
import {MdOutlinePix} from "react-icons/md"
import {HiOutlineHeart, HiHeart} from "react-icons/hi"
*/

export function HeaderMobileMenu(){
  return(
    <Container>
        <AiOutlineClose className='closeIcon'/>
        <p>Menu</p>          
    </Container>
  );
}
