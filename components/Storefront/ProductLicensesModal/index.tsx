/* eslint-disable react/no-unescaped-entities */
import Game from "dtos/Game";
import {
  Modal,
  Button,
  Col,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import styles from "./styles.module.css";

interface ProductLicensesModalProps {
  show: boolean;
  onHide: () => void;
  selectedProduct?: Game;
}

const ProductLicensesModal: React.FC<ProductLicensesModalProps> = ({
  show,
  onHide,
  selectedProduct,
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      dialogClassName={styles.modal}
    >
      <Modal.Header closeButton>
        <Modal.Title> {selectedProduct?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <strong>Chaves de Ativação</strong>
            {selectedProduct?.licenses.map((license, index) => (
              <InputGroup className="mb-2" key={index}>
                <InputGroup.Prepend>
                  <InputGroup.Text className={styles.key_input}>
                    <i className={"fa fa-key"} />
                  </InputGroup.Text>
                </InputGroup.Prepend>

                <FormControl
                  placeholder="Chave"
                  className={styles.key_input}
                  defaultValue={license}
                  disabled
                />
              </InputGroup>
            ))}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductLicensesModal;
