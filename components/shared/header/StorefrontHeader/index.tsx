import React, { useState } from "react";
import styles from "./styles.module.css";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import Logo from "components/shared/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import LoggedService from "util/LoggedService";
import Badge from "components/shared/Badge";
import CartModal from "components/Storefront/CartModal";
import { useSelector } from 'react-redux';
import ProductShow from 'dtos/ProductShow';


const StorefrontHeader: React.FC = () => {
  const [search, setSearch] = useState("");
  const [showCartModal, setShowCartModal] = useState(false);

  const router = useRouter();
  const cartProducts: ProductShow[] = useSelector(state => state.cartProducts);

  const handleSearch = (): void => {
    router.push(`
        /Search?search=${search}&lentgh=12&page=1&order=price&direction=asc
    `);
  };

  const handleUserRedirect = (): void => {
    router.push(LoggedService.execute() ? "/Profile" : "Auth/Admin");
  };

  return (
    <Row className={styles.background}>
      <Col md={6} className="mt-2">
        <Logo />
      </Col>

      <Col md={6} className="mt-2 text-center">
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <InputGroup
              className={`${
                router.pathname === "/Search" ? styles.hidden : ""
              }`}
            >
              <FormControl
                placeholder="Pesquisar produto"
                className={styles.input}
                value={search}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch(evt.target.value)
                }
                onKeyUp={(evt: React.KeyboardEvent<HTMLInputElement>) => {
                  if (evt.key.toLowerCase() === "enter") {
                    handleSearch();
                  }
                }}
              />
            </InputGroup>
          </Col>

          <Col md={6}>
            <Row>
              <Col
                className={`${
                  router.pathname === "/Search" ? styles.hidden : ""
                }`}
              >
                <i
                  className="fa fa-search"
                  style={{ color: "var(--color-gray-light)" }}
                  onClick={handleSearch}
                />
              </Col>

              <Col>
              <div className={styles.cart_container}>
                  <i
                    className="fa fa-shopping-cart"
                    style={{ color: "var(--color-gray-light)" }}
                    onClick={() => setShowCartModal(!showCartModal)}

                  />
                  {
                    cartProducts?.length > 0 &&
                    <Badge>{cartProducts.length}</Badge>
                  }
                  {
                     cartProducts?.length > 0 && showCartModal &&
                      <CartModal searchPage={router.pathname === '/Search'} />
                  }
                </div>
              </Col>

              <Col>
                <Link href="/Auth/Login">
                  <a>
                    <i
                      className="fa fa-user-circle"
                      style={{ color: "var(--color-gray-light)" }}
                      onClick={handleUserRedirect}
                    />
                  </a>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default StorefrontHeader;
