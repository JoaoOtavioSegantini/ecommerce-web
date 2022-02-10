import StyledButton from "components/shared/StyledButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { clearSearch, setSearch as setSearchRedux } from "store/modules/admin/shared/search/reducer";
import styles from './styles.module.css';


// alteramos as propriedades do  componente para receber o newPath que será utilizado para redirecionar o usuário para o form de criação dos recursos
interface SearchAndIcon {
  icon: string;
  newPath: string;
}

const SearchAndIcon: React.FC<SearchAndIcon> = ({ icon, newPath }) => {
   // criamos um estado para podermos receber o que o usuário digitou no input de pesquisa
   const [search, setSearch] = useState('');
   const dispatch = useDispatch();
   const router = useRouter();
 
   // limpando a pesquisa quando o component for renderizado
   useEffect(() => {
     dispatch(clearSearch());
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
 
   // método para realizar a tratativa da pesquisa. Ele irá atualizar o valor da pesquisa no redux
   // esse método será chamado quando o usuário der enter no input de pesquisa ou clicar no ícone da pesquisa
   const handleSearch = (): void => {
     // toda vez que o termo de pesquisa for alterado a página será alterada para 1.
     // utilizamos o método replace que tem a mesma função do metódo push, 
     // onde o mesmo não adiciona mais uma entrada no history do browser.
     router.replace(router.pathname, '?page=1');
     dispatch(setSearchRedux(search));
   }

  return (
    <Row>
      <Col lg={10} xs>
        <Row>
          <Col lg={10} xs={10}>
            <InputGroup>
              <FormControl 
                placeholder="Pesquisar usuário" 
                className={styles.input} 
                value={search}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) => {
                    setSearch(evt.target.value);
                  }
                }

                onKeyPress={
                  (evt: React.KeyboardEvent<HTMLInputElement>) => {
                    if (evt.key.toLowerCase() === 'enter') {
                      handleSearch()
                    }
                  }
                }
              />
            </InputGroup>
          </Col>

      <Col lg={2} xs={2} className={styles.search_icon}>
        <i
          style={{ color: "var(--color-gray-light)", fontSize: "large" }}
          className="float-left fa fa-search"  onClick={handleSearch}
        />
      </Col>
        </Row>
      </Col>
      <Col lg={2} xs={{ span: 3 }} className={styles.titleButton}>
        <Link href={newPath}>
          <a>
            <StyledButton icon={icon} type_button="blue" />
          </a>
        </Link>
      </Col>
    </Row>
  )
}

export default SearchAndIcon;
