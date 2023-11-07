import { Container } from "./styles";
import {PiCaretLeft} from "react-icons/pi";

/*import {AiOutlineMenu, AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {PiReceipt, PiCreditCard, PiCaretLeft, PiCaretRight, PiForkKnife, PiPencilSimple } from "react-icons/pi";
import {MdOutlinePix} from "react-icons/md"
import {HiOutlineHeart, HiHeart} from "react-icons/hi"
*/

export function ButtonBack() {
  return (
    <Container>  
        <div className="backButton">
          <PiCaretLeft size={32}/>
          <p>voltar</p>
        </div>   
    </Container>
  );
}