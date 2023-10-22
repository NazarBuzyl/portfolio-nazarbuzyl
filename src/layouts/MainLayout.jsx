import { Outlet } from "react-router-dom";
import {
  Header,
  Footer,
  ThemeSwitch,
  LanguageSwitch,
} from "../components/index";

function MainLayout() {
  return (
    <div className="page">
      <div className=" bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Outlet />
          </div>
          {/* Toaster from react-hot-toast */}
          <LanguageSwitch />
          <ThemeSwitch />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
