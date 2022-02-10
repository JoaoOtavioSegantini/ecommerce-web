import React from "react";
import styles from './styles.module.css';
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import Logo from "components/shared/Logo";

const StorefrontHeader: React.FC = () => {
  return (
    <Row className={styles.background}>
      <Col md={8} className="mt-2">
        <Logo />
      </Col>

      <Col md={4} className="mt-2 text-center">
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <InputGroup>
              <FormControl
                placeholder="Pesquisar produto"
                className={styles.input}
              />
            </InputGroup>
          </Col>

          <Col md={6}>
            <Row>
              <Col md={4} xs={4}>
                <i className="fa fa-search" style={{ color:"var(--color-gray-light)" }} />
              </Col>

              <Col md={4} xs={4}>
                <i
                  className="fa fa-shopping-cart"
                  style={{ color:"var(--color-gray-light)" }}
                />
              </Col>

              <Col md={4} xs={4}>
                <i
                  className="fa fa-user-circle"
                  style={{ color:"var(--color-gray-light)" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default StorefrontHeader;
