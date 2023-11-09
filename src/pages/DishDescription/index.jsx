import { Container, Ingredients, Content } from "./styles";
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { ButtonBack } from "../../components/ButtonBack";

import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { ButtonQuantity } from "../../components/ButtonQuantity";
import {PiCaretLeft} from "react-icons/pi";
import {Tag} from "../../components/Tag";
import {dish} from "../../assets/dishes/salada.svg";

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
          <ButtonBack/>
        </div> 

        <main>
          <img src={dish} alt="Prato selecionado" />
          <div>
            <h2>Salada Ravanello</h2>

            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

            <Ingredients>
              {/* <li>alface</li>
              <li>cebola</li>
              <li>pão naan</li>
              <li>pepino</li>
              <li>rabanete</li>
              <li>tomate</li> */}

              <Tag title="alface"/>
              <Tag title="cebola"/>
              <Tag title="pão naan"/>
              <Tag title="pepino"/>
              <Tag title="rabanete"/>
              <Tag title="tomate"/>
            </Ingredients>

            
          
          <ButtonQuantity/>
          <Button title="Incluir R$25,00"/>
          {/* <Button label="Editar prato" /> */}
          </div>

        </main>
      </Content>

      <Footer />
    </Container>
  );
}