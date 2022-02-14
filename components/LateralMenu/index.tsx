import Logo from "components/shared/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from './styles.module.css';
import SignOutService from 'util/SignOutService'

const LateralMenu: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.background}>
      <Logo />

      <div className={styles.list}>
        <Link href="/Admin">
          <a>
            <i
              style={{ color: "var(--color-gray-light)" }}
              className={`mr-3 fa fa-signal ${router.pathname === '/Admin' ? styles.active : ''}`}
            />
            Painel Inicial
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Users/List">
          <a>
            <i
              style={{ color: "var(--color-gray-light)" }}
              className={`mr-3 fa fa-user ${router.pathname === '/Admin/Users/List' ? styles.active : ''}`}
            />
            Usuários
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Products/List">
          <a>
            <i
              style={{ color: "var(--color-gray-light)" }}
              className={`mr-3 fa fa-gamepad ${router.pathname === '/Admin/Products/List' ? styles.active : ''}`}
            />
            Produtos
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Categories/List">
          <a>
            <i
              style={{ color: "var(--color-gray-light)" }}
              className={`mr-3 fa fa-check-square ${router.pathname === '/Admin/Categories/List' ? styles.active : ''}`}
            />
            Categorias
            <hr />
          </a>
        </Link>

        <Link href="/Admin/SystemRequirements/List">
          <a>
            <i
              style={{ color: "var(--color-gray-light)" }}
              className={`mr-3 fa fa-laptop ${router.pathname === '/Admin/SystemRequirements/List' ? styles.active : ''}`}
            />
            Requisitos do sistema
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Coupons/List">
          <a>
            <i
              style={{ color: "var(--color-gray-light)" }}
              className={`mr-3 fa fa-ticket ${router.pathname === '/Admin/Coupons/List' ? styles.active : ''}`}
            />
            Cupons
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Orders/List">
          <a className={`${router.pathname === '/Admin/Orders/List' ? styles.active : ''}`}>
            <i
              style={{ color: "var(--color-gray-light)" }}
              className={`mr-3 fa fa-dollar`}
            />
            Financeiro
            <hr />
          </a>
        </Link>

        <Link href="/Auth/Login" >
        <a onClick={SignOutService.execute}>
            <i
              style={{ color: "var(--color-gray-light)" }}
              className="mr-3 fa fa-sign-out"
            />
            Sair
            <hr />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default LateralMenu;
