import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

// Dashboard page component
function Dashboard() {
  return (
    <>
      {/* Header row with page title and filter */}
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      {/* Main dashboard content */}
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
