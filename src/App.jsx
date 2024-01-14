import SidebarLink from "./components/SidebarLink/SidebarLink";
import TopNavbar from "./components/TopNavbar/TopNavbar";

const App = () => {
  return (
    <div className="min-h-screen h-full bg-darkBlue text-white font-Roboto flex">
      <SidebarLink />

      {/* These contain some different component */}
      <section className="w-full">
        <TopNavbar />
        <div className="flex">
          {/* Side navbar history */}
          <section className="border-r ">side navbar histroy</section>
          {/* main content will be here */}
          <section>main content will be here</section>
        </div>
      </section>
    </div>
  );
};

export default App;
