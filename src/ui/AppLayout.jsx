import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

// App layout using CSS grid: sidebar, header, and main content
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

// Main content area styling
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

// Container to center and space content
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
