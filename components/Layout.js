import Nav from "./Nav";
import Meta from "./Meta";
import Header from "./Header";
// import ButtonExamples from './buttonExamples'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      {/* <ButtonExamples /> */}
      <div>
        <main>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
