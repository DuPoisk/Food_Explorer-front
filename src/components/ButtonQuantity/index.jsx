import {Container} from "./styles";
import {AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

/*import {AiOutlineMenu, AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {PiReceipt, PiCreditCard, PiCaretLeft, PiCaretRight, PiForkKnife, PiPencilSimple } from "react-icons/pi";
import {MdOutlinePix} from "react-icons/md"
import {HiOutlineHeart, HiHeart} from "react-icons/hi"
*/

export function ButtonQuantity() {
  return(
    <Container>
      <AiOutlineMinus size={24}/>
      <h3>01</h3>
      <AiOutlinePlus size={24}/>    
    </Container>
  )
}

/*Código para funcionalidade https://copyprogramming.com/howto/how-to-create-a-minus-and-plus-button-to-update-a-field#how-to-create-a-minus-and-plus-button-to-update-a-field

const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('input');

minusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue - 1;
});

plusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 1;
});
*/