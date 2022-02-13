import { useState } from 'react';
import BlueBackground from 'components/shared/BlueBackground';

import { Col, Row, Badge } from 'react-bootstrap';
import StyledButton from 'components/shared/StyledButton';

import styles from './styles.module.css';
import ProductSearch from 'dtos/ProductSearch';

interface WishItemProps {
  wishItem: ProductSearch;
  handleWishlistItemRemoval: Function;
}

const WishItem: React.FC<WishItemProps> = ( { wishItem, handleWishlistItemRemoval } ) => {
  const [icon, setIcon] = useState<string>("fa fa-heart");

  return (
    <div className="mt-4 mb-4" key={wishItem.id}>
      <BlueBackground>
        <Row>
          <Col md={2} xs={4} className="text-center pt-4">
            <i 
              className={styles.icon + ` ${icon}`}
              style={{ fontSize: "large "}}
              onMouseEnter={
                () => setIcon("fa fa-heart-broken")
              }
              onMouseLeave={
                () => setIcon("fa fa-heart")
              }
              onClick={
                () => handleWishlistItemRemoval(wishItem.id)
              }
            />
          </Col>

          <Col md={3} xs={8}>
            <img 
              className={styles.product_image}
              src={wishItem.image_url} 
              alt={wishItem.name}
            />
          </Col>

          <Col md={4} xs={12} className={styles.product_data}>
            <h6 className="font-weight-bold">{wishItem.name}</h6>

            {
              wishItem?.categories?.map(
                category => 
                  <Badge 
                    key={category.id}
                    variant="primary ml-1" 
                    className={styles.primary_badge}>
                      {category.name}
                  </Badge>
              )
            }
          </Col>

          <Col md={3} xs={12} className={styles.action}>
            <strong>{`R$ ${wishItem.price}`}</strong>

            <div>
              <StyledButton 
                action={"Comprar"} 
                icon={"fa fa-cart-plus"} 
                type_button="blue" 
              />
            </div>
          </Col>
        </Row>
      </BlueBackground>
    </div>
  );
}

export default WishItem; 