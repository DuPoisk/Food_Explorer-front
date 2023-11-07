import { Container, Ingredients, Content } from "./styles";
import { HeaderDesktop } from "../../components/HeaderDesktop";
//import { BackButton } from "../../components/BackButton";
import dish from "../../assets/dishes/salada.png";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import {PiCaretLeft} from "react-icons/pi";

/*import {AiOutlineMenu, AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {PiReceipt, PiCreditCard, PiCaretLeft, PiCaretRight, PiForkKnife, PiPencilSimple } from "react-icons/pi";
import {MdOutlinePix} from "react-icons/md"
import {HiOutlineHeart, HiHeart} from "react-icons/hi"
*/

export function DishDescription() {
  return (
    <Container>
      <HeaderDesktop /> 
      
      <Content>    
        <div className="backButton">
          <PiCaretLeft size={24}/>
          <p>voltar</p>
        </div> 

        <main>
          <img src={dish} alt="Prato selecionado" />
          <div>
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

            <Ingredients>
              <li>alface</li>
              <li>cebola</li>
              <li>pão naan</li>
              <li>pepino</li>
              <li>rabanete</li>
              <li>tomate</li>
            </Ingredients>
          </div>
          <Button label="Editar prato" />
        </main>
      </Content>

      <Footer />
    </Container>
  );
}