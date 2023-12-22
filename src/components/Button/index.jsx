import {Container} from "./styles";

export function Button({title, loading = false, ...rest}) {
  return(
    <Container
    type="button"
    disabled={loading}
    {...rest}
    >
      { loading ? "Carregando..." : title}
    </Container>
  )
}

/* quando quero mostrar o conteudo de uma propriedade, de maneira separada, precio colcoar entre chaves ; 
quando loading for verdadeiro vai desabilitar, se for falso vai habilitar;
caso loading nao seja informado, receberá uma valor padrão que é o false;
*/