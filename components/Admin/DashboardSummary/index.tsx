import { Col, Row } from "react-bootstrap";
import styles from './styles.module.css';
import useSwr from 'swr';
import DashboardSummaryService from "services/dashboardSummary";
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Dashboard from "dtos/Dashboard";

const defaultUrl = '/admin/v1/dashboard/summaries';
const DashboardSummary: React.FC = () => {
  const { min_date, max_date }: Dashboard = useSelector(state => state.dashboard);

  const { data, error } = useSwr(
    () => defaultUrl +
    ((min_date || max_date) ?
    `?min_date=${min_date}&max_date=${max_date}` : ''), 
    DashboardSummaryService.index
  );
  if (error) {
    toast.error('Erro ao obter os dados para o resumo do dashboard.');
    console.log(error);
  }

  return (
    <Row>
      <Col>
        <div className={styles.card}>
          <i className={"fa fa-user"} style={{ fontSize: "xx-large"}} />
          <div>
            <span>+ {data?.users}</span>
            <span>Usuários</span>
          </div>
        </div>
      </Col>

      <Col>
        <div className={styles.card}>
          <i className={"fa fa-gamepad"} style={{ fontSize: "xx-large"}}/>
          <div>
            <span>+ {data?.products}</span>
            <span>Produtos</span>
          </div>
        </div>
      </Col>

      <Col>
        <div className={styles.card}>
          <i className={"fa fa-shopping-cart"} style={{ fontSize: "xx-large"}}/>
          <div>
            <span>+ {data?.orders}</span>
            <span>Vendas</span>
          </div>
        </div>
      </Col>

      <Col>
        <div className={styles.card}>
          <i className={"fa fa-dollar-sign"} style={{ fontSize: "xx-large"}}/>
          <div>
            <span>R$ {data?.profit}</span>
            <span>Lucro Total</span>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default DashboardSummary; 