import ProductInfo from "components/shared/ProductInfo";
import StyledButton from "components/shared/StyledButton";
import ProductHome from "dtos/ProductHome";
import Link from "next/link";
import { Button, Col, Row } from "react-bootstrap";
import styles from "./styles.module.css";

interface HighlightedProductsProps {
  title: string;
  type?: string;
  products: ProductHome[];
  handleSeeMore(event: React.MouseEvent<HTMLElement>): void;
}

const HighlightedProducts: React.FC<HighlightedProductsProps> = ({
  title,
  type,
  products,
  handleSeeMore
}) => {
  return (
    <div className={styles.products}>
      <Row className={styles.products_header}>
        <h5>{title}</h5>

        <hr className={styles.line} />

        <Link href="#">
          <a>
            <Button
            onClick={handleSeeMore}
              className={`${
                type === "highlighted"
                  ? styles.highlighted_button
                  : styles.normal_button
              }`}
            >
              Ver mais
            </Button>
          </a>
        </Link>
      </Row>

      <Row>
        {products?.map((product) => (
          <Col md={3} key={product.id}>
            <ProductInfo type={type} product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HighlightedProducts;
