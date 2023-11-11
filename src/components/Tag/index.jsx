import {AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { Container } from "./styles";


export function Tag({$isNew, value, onClick, ...rest}){
  return(
    <Container $isNew={$isNew}>
      <input 
        type="text" 
        value={value}
        readOnly={!$isNew} // bloquear se não for item novo, assim ele fica não editável depois de adicionado
        {...rest}
      />

      <button 
        type="button" 
        onClick={onClick}
        className={$isNew ? 'button-add' : 'button-delete'}
      >
        {$isNew ? <AiOutlinePlus size={8}/> : <AiOutlineClose size={8}/> }
      </button>
    </Container>
  );
}