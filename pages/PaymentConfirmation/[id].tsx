import MainComponent from "components/shared/MainComponent";
import StyledButton from "components/shared/StyledButton";

import styles from "./styles.module.css";

import BlueBackground from "components/shared/BlueBackground";

import { Col, Row, Badge } from "react-bootstrap";

import withAuth from "components/withAuth";

import useSwr from "swr";
import { useRouter } from "next/router";

import OrderService from "services/order";
import { toast } from "react-toastify";
import OrderDetail from "components/shared/OrderDetail";

const PaymentConfirmation: React.FC = () => {
  const router = useRouter();

  const { id } = router.query;

  const { data, error } = useSwr(
    () => (id ? `/storefront/v1/orders/${id}` : null),
    OrderService.show
  );

  if (error) {
    toast.error("Erro ao obter os dados do pedido!");
    console.log(error);
  }

  return (
    <MainComponent>
      <div className="mt-4 mb-5">
        <strong>Pagamento Recebido</strong>
        <strong className={styles.secondary_color}>{` #${data?.id}`}</strong>

        <div className="float-right">
          <StyledButton
            action={"Voltar para a Loja"}
            icon={"fa fa-arrow-left"}
            type_button="blue"
            onClick={() => router.push("/")}
          />
        </div>
      </div>

      <div className="mt-4">
        <div className={styles.blue_text}>
          <i className={"fa fa-check-square"} />
          <strong> Sucesso: </strong>
          <span>
            Obrigado por seu pedido! Você receberá um e-mail em breve.
          </span>
        </div>
      </div>

      <OrderDetail items={data?.line_items!}/>

      <Row className="mt-4 mb-4">
        <Col>
          <StyledButton
            action={"Acessar meus Games"}
            icon={"fa fa-gamepad"}
            type_button="blue"
            className={`${styles.button_blue_text} float-right`}
          />
        </Col>
      </Row>
    </MainComponent>
  );
};

export default withAuth(PaymentConfirmation);
