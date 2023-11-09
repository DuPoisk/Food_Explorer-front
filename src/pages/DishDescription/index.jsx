import { Container, Ingredients, Content } from "./styles";
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { ButtonBack } from "../../components/ButtonBack";

import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { ButtonQuantity } from "../../components/ButtonQuantity";
import {Tag} from "../../components/Tag";
import Dish from "../../assets/dishes/salada.png";

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
        <ButtonBack/>

        <main>
          <img src={Dish} alt="Prato selecionado" />
          <div className="infos">
            <div className="texts">
              <h2>Salada Ravanello</h2>

              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

              <Ingredients>
                <Tag title="alface"/>
                <Tag title="cebola"/>
                <Tag title="pão naan"/>
                <Tag title="pepino"/>
                <Tag title="rabanete"/>
                <Tag title="tomate"/>
              </Ingredients>
            </div>
          
            <div className="buttons">
              <ButtonQuantity/>
              <Button className="includeButton" title="Incluir  R$25,00"/>
            </div>         
          </div>
        </main>
      </Content>

      <Footer />
    </Container>
  );
}