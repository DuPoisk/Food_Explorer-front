import { Container, Content} from "./styles";
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { Footer } from "../../components/Footer";
import {Input} from "../../components/Input";
import {ButtonBack} from "../../components/ButtonBack";
import {Button} from "../../components/Button";
import {Tag} from "../../components/Tag";
import { FiLogOut } from "react-icons/fi";


export function DishEdit(){
return(
  <Container>
    <HeaderDesktop/>

    <Content>
      <main>
        <ButtonBack/>
        <form id="newDishForm" action="#" method="post" className="dish-form">
            <p>Editar Prato</p>

            <div className="formInputs">
              <label htmlFor="image" >
                <p id="imageInput">Imagem do Prato</p>
                <p className="uploadImage">
                  <FiLogOut className="uploadIcon"/>
                  <p className="uploadText ">Selecione imagem para alterá-la</p>
                  <Input type="file" id="image" name="image" accept="image/*" />
                </p>                   
              </label>
            </div>

            <div className="formInputs">
              <label htmlFor="name">Nome</label>
              <Input type="text" id="name" name="name" placeholder="Ex: Salada Ceasar" required/>
            </div>

            <div className="formInputs">
              <label htmlFor="category">Categoria</label>
              <div className="customSelect">
                <select id="dishCategory" name="dishCategory" placeholder="Refeição" required>
                  <option value="" disabled selected hidden>Selecione uma categoria</option>
                  <option value="refeicao">Refeição</option>
                  <option value="sobremesa">Sobremesa</option>
                  <option value="bebida">Bebida</option>
                </select>
              </div>
            </div>

            <div className="formInputs">
              <label htmlFor="ingredients" id="ingredientsLabel">
                Ingredientes
                <fieldset id="tagBackground" >                
                  <Tag className="tag" />                
                  <Tag className="tag" $isNew placeholder="Adicionar" required />                
                </fieldset>
              </label>
                {/* <input type="button" onClick="addTag()">Add</input> */}
              
            </div>


            <div className="formInputs">
              <label htmlFor="price">Preço</label>
              <Input type="text" id="price" name="price" placeholder="R$ 40,00" required/>
            </div>

            <div className="formInputs">
              <label htmlFor="description">Descrição</label>
              <textarea id="description" name="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" rows="8" required></textarea>
            </div>
            {/* <button type="submit">Submit</button> */}
        
        <div className="buttons">
          <Button
            className="deleteButton"
            form="EditDishForm"
            title="Excluir Prato"
          /> 

          <Button
            type="submit" 
            className="submitButton"
            form="newDishForm"
            title="Salvar alterações"
          /> 
        </div>
          </form>

      </main>      
    </Content>

    {/* <footer> */}
    <Footer/>
    {/* </footer> */}
  </Container>
 
)}

