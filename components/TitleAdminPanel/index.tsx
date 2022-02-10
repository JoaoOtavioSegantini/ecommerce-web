import { Col, Row } from "react-bootstrap";
import SearchAndIcon from "./SearchAndIcon";
import TitleAndPath from "./TitleAndPath";
import styles from './styles.module.css';

interface TitleAdminPanelProps {
  title: String;
  path: String;
  icon?: string;
  newPath: string;
}

const TitleAdminPanel: React.FC<TitleAdminPanelProps> = ({
  title,
  path,
  icon,
  newPath
}) => {
  return (
    <Row className="mt-4">
      {icon ? (
        <>
          <Col lg={6} xs={4} className={styles.title_and_path}>
            <TitleAndPath title={title} path={path} />
          </Col>

          <Col lg={6} xs={8}>
            <SearchAndIcon icon={icon} newPath={newPath} />
          </Col>
        </>
      ) : (
        <TitleAndPath title={title} path={path} />
      )}
    </Row>
  );
};

export default TitleAdminPanel;
