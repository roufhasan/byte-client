import Main from "./components/Main/Main";
import SidebarLink from "./components/SidebarLink/SidebarLink";
import TopNavbar from "./components/TopNavbar/TopNavbar";

const App = () => {
  return (
    <div className="w-full max-w-[1920px] bg-darkBlue text-white font-Roboto flex mx-auto">
      <SidebarLink />
      <section className="w-full">
        <TopNavbar />
        <div className="h-[calc(100vh-72px)] flex">
          <Main />
        </div>
      </section>
    </div>
  );
};

export default App;
