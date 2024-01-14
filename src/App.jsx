import SidebarLink from "./components/SidebarLink/SidebarLink";

const App = () => {
  return (
    <div className="min-h-screen h-full bg-darkBlue text-white font-Roboto flex">
      {/* Sidebar Link */}
      <section className="">
        <SidebarLink />
      </section>
      {/* These contain some different component */}
      <section className="w-full">
        {/* TopNavbar */}
        <navbar className="bg-charcoalGray w-full block">
          top nav will be here
        </navbar>
        <div className="flex">
          {/* Side navbar history */}
          <section className="border-r h-[96vh]">side navbar histroy</section>
          {/* main content will be here */}
          <section>main content will be here</section>
        </div>
      </section>
    </div>
  );
};

export default App;
