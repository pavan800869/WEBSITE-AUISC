import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen text-black flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
