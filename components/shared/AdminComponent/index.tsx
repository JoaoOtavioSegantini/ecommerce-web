import LateralMenu from "components/LateralMenu";
import { Col, Row } from "react-bootstrap";
import AdminFooter from "../footer/AdminFooter";
import AdminHeader from "../header/AdminHeader";

const AdminComponent: React.FC = ({ children }) => {
  return (
    <Row className="mr-lg-4">
      <Col lg={3}>
        <LateralMenu />
      </Col>

      <Col lg={9}>
        <div className="d-flex flex-column sticky-footer-wrapper container">
          <AdminHeader />
          <div className="flex-fill text-center">{children}</div>
          <AdminFooter />
        </div>
      </Col>
    </Row>
  );
};

export default AdminComponent;
