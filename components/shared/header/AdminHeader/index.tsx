import User from "dtos/User";
import Link from "next/link";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import SignOutService from "util/SignOutService";

const AdminHeader: React.FC = () => {
  const router = useRouter();

  const { name }: User = useSelector((state) => state.auth.loggedUser);

  return (
    <Row className={styles.background}>
      <Col xs={12} className={styles.menu}>
        <Link href="/Admin">
          <a>
            <i
              style={{ color: "var(--color-gray-light)" }}
              className={`ml-3 fa fa-signal ${
                router.pathname === "/Admin" ? styles.active : ""
              }`}
            />
          </a>
        </Link>
        <Link href="/Admin/Users/List">
          <a>
            <i
              style={{ color: "var(--color-gray-light)" }}
              className={`ml-3 fa fa-user ${
                router.pathname === "/Admin/Users/List" ? styles.active : ""
              }`}
            />
          </a>
        </Link>
        <Link href="/Admin/Products/List">
          <a>
            <i
              style={{ color: "var(--color-gray-light)" }}
              className={`ml-3 fa fa-gamepad ${
                router.pathname === "/Admin/Products/List" ? styles.active : ""
              }`}
            />
          </a>
        </Link>
        <Link href="/Admin/Categories/List">
          <a>
            <i
              style={{ color: "var(--color-gray-light)" }}
              className={`ml-3 fa fa-check-square ${
                router.pathname === "/Admin/Categories/List"
                  ? styles.active
                  : ""
              }`}
            />
          </a>
        </Link>
        <Link href="/Admin/SystemRequirements/List">
          <a>
            <i
              style={{ color: "var(--color-gray-light)" }}
              className={`ml-3 fa fa-laptop ${
                router.pathname === "/Admin/SystemRequirements/List"
                  ? styles.active
                  : ""
              }`}
            />
          </a>
        </Link>
        <Link href="/Admin/Coupons/List">
          <a>
            <i
              style={{ color: "var(--color-gray-light)" }}
              className={`ml-3 fa fa-ticket ${
                router.pathname === "/Admin/Coupons/List" ? styles.active : ""
              }`}
            />
          </a>
        </Link>
        <Link href="#">
          <a>
            <i
              style={{ color: "var(--color-gray-light)" }}
              className={`ml-3 fa fa-dollar`}
            />
          </a>
        </Link>

        <Link href="/Auth/Login">
          <a
            onClick={SignOutService.execute}
            // mobile don't have click so we need to use onTouch events
            onTouchEnd={() => SignOutService.execute()}
          >
            <i
              style={{ color: "var(--color-gray-light)" }}
              className="ml-3 fa fa-signout"
            />
          </a>
        </Link>

        <Link href="/Profile">
          <a className={styles.profile}>
            <span className={styles.name}>{name}</span>
            <i
              className="fa fa-user-circle"
              style={{ color: "var(--color-gray-light)" }}
            />
          </a>
        </Link>
      </Col>
    </Row>
  );
};

export default AdminHeader;
