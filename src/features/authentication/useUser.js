import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

/**
 * Custom hook to fetch the current user's authentication status.
 *
 * @returns {Object} {
 *   isLoading: boolean,         // True while user data is loading
 *   user: Object|null,          // The current user object, or null if not loaded
 *   isAuthenticated: boolean    // True if the user is authenticated
 * }
 */
export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
