const StyledNavbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 text-white"
        aria-label="Global"
      >
        <a href="/">Life in the UK</a>
      </nav>
    </header>
    // <nav className="navbar navbar-expand-lg navbar-light bg-danger">
    //   {/* <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarTogglerDemo03"
    //     aria-controls="navbarTogglerDemo03"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button> */}
    //   <a className="navbar-brand px-5 text-white" href="/">
    //     Life in the UK
    //   </a>
    // </nav>
  );
};

export default StyledNavbar;
