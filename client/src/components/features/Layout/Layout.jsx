import Header from "../Header/Header";

const Layout = ({children}) => {
  return (
    <div>
        <header>
          <Header />
        </header>
        {children}
    </div>
  );
};
export default Layout;;
