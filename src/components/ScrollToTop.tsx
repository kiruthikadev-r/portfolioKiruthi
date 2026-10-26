import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// react-router doesn't scroll to top on navigation by default - without this,
// clicking "Read Full Case Study" from partway down the home page would land
// the user partway down the new page too.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
