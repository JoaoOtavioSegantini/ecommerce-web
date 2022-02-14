import Dashboard from "components/Admin/Dashboard";
import AdminComponent from "components/shared/AdminComponent";
import withAuthAdmin from "components/withAuthAdmin";

const Home: React.FC = () => {
  return (
    <AdminComponent>
      <Dashboard />
    </AdminComponent>
  );
};

export default withAuthAdmin(Home);
