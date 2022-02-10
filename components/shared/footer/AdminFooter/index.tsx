import Logo from "components/shared/Logo";
import { Col, Container, Row } from "react-bootstrap";

const AdminFooter: React.FC = () => {
  return (
    <Container className="p-4">
      <Row>
        <Col>
          <Logo />
        </Col>

        <Col>
          <span className="float-right">
            onebitcode.com • contato@onebitcode.com
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminFooter;
