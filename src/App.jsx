import SideNavHistory from "./components/SideNavHistory/SideNavHistory";
import SidebarLink from "./components/SidebarLink/SidebarLink";
import TopNavbar from "./components/TopNavbar/TopNavbar";

const App = () => {
  return (
    <div className="min-h-screen h-full w-full max-w-[1920px] bg-darkBlue text-white font-Roboto flex mx-auto">
      <SidebarLink />
      <section className="w-full">
        <TopNavbar />
        <div className="flex h-[calc(100vh-72px)]">
          <SideNavHistory />
          {/* main content will be here */}
          <section>main content will be here</section>
        </div>
      </section>
    </div>
  );
};

export default App;
