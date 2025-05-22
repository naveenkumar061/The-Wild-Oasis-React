import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

// Centers content vertically and horizontally on the page
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Guards routes that require authentication
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  // Redirect unauthenticated users to login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // Show spinner while authentication state is loading
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // Render protected content if authenticated
  if (isAuthenticated) return children;

  // Optionally, return null to avoid rendering anything while redirecting
  return null;
}

export default ProtectedRoute;
