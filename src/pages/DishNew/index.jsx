import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { ButtonBack } from "../../components/ButtonBack";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function DishNew(){
  const navigate = useNavigate();

  const [dishImage, setDishImage]=useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredient, setIngredient] = useState([]); // array com a lista
  const [newIngredient, setNewIngredient] = useState(""); 
  // const [newIngredientTag, setNewIngredientTag] = useState(""); // para a as tags
  const [price, setPrice] = useState("");  
  const [description, setDescription] = useState("");

  
  //tratamento de exceções
  const HandleNewDish= async () => {    
    if(!dishImage || !name || !category || !ingredient || !price || !description){
      alert("Certifique-se de que todos os campos estão preenchidos.")
      return
    };

    const newDish = {dishImage, name, category, ingredient, price, description};
   
  };

  function HandleIngredientAdd(){
    setIngredient((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  };

  function handleIngredientDelete(deleted) {
    setIngredient((prevState) => prevState.filter((ingredient) => ingredient !== deleted))
  }



  return(
    <Container>
      <Header/>

      <Content>
        <main>
          <ButtonBack/>
          <form id="newDishForm" action="#" method="post" className="dish-form">
              <p>Novo prato</p>

              <div className="formInputs">
                <label htmlFor="image" >
                  <p id="imageInput">Imagem do Prato</p>
                  <p className="uploadImage">
                    <FiLogOut className="uploadIcon"/>
                    <p className="uploadText ">Selecione imagem</p>
                    <Input type="file" id="image" name="image" accept="image/*" onChange={(event)=>setDishImage(event.target.files[0])} />
                  </p>                   
                </label>
              </div>

              <div className="formInputs">
                <label htmlFor="name">Nome</label>
                <Input type="text" id="name" name="name" placeholder="Ex: Salada Ceasar" required onChange={(event)=>setName(event.target.value)}/>
              </div>

              <div className="formInputs">
                <label htmlFor="category">Categoria</label>
                <div className="customSelect">
                  <select id="dishCategory" name="dishCategory" placeholder="Refeição" required onChange={(event)=>setCategory(event.target.value)}>
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
                  {/* onClick={() => handleIngredientDelete(ingredient)}  */}
                
              </div>


              <div className="formInputs">
                <label htmlFor="price">Preço</label>
                <Input type="text" id="price" name="price" placeholder="R$ 00,00" required onChange={(event)=>setPrice(event.target.value)}/>
              </div>

              <div className="formInputs">
                <label htmlFor="description">Descrição</label>
                <textarea id="description" name="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" rows="8" required onChange={(event)=>setDescription(event.target.value)} ></textarea>
              </div>
              {/* <button type="submit">Submit</button> */}
            </form>

          <Button
            type="submit" 
            className="submitButton"
            form="newDishForm"
            title="Salvar Informações"
            onClick={HandleNewDish}
          /> 
        </main>      
      </Content>

      {/* <footer> */}
      <Footer/>
      {/* </footer> */}
    </Container>
  
  )
}