import { useSelector } from "react-redux";

interface ProtectedContentProps {
  children: React.ReactNode;
  requiredRole?: string | string[];
}

export default function ProtectedContent({
  children,
  requiredRole
}: ProtectedContentProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // If no user is logged in, do not render the content
  if (!currentUser) {
    return null;
  }

  if (requiredRole) {
    const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
    if (!roles.includes(currentUser.role)) {
      return null; // Do not render anything if the role doesn't match
    }
  }

  return <>{children}</>;
}
