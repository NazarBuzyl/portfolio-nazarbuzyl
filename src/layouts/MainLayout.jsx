import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="page">
      <div className="wrapper">
        {/* Header */}
        <div className="content">
          <div className="container">
            <Outlet />
          </div>
        </div>
        {/* Footer */}
      </div>
    </div>
  );
}

export default MainLayout;
