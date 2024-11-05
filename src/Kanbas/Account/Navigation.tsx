import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  return (
    <nav>
      {links.map(link => (
        <Link 
          key={link}
          to={`/Kanbas/Account/${link}`}
          className={pathname.includes(link) ? "active" : ""}
        >
          {link}
        </Link>
      ))}
    </nav>
  );
}
