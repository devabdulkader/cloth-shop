import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import UserAccountSidebar from "../user-account-sidebar/UserAccountSidebar";
import DesktopSearchBar from "./searchBar/DesktopSearchBar";
import SideBarMobile from "./SideBarMobile";
import CartSideBar from "./CartSideBar";
import TopNav from "./TopNav";

const Header = () => {
  return (
    <div className="relative">
      <DesktopSearchBar />
      <UserAccountSidebar />
      <SideBarMobile />
      <CartSideBar />

      <div className="hidden relative lg:block z-layer-2">
        <TopNav />
        <Navbar />
      </div>
      <div className="lg:hidden relative bg-white">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
