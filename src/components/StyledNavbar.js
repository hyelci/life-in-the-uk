const StyledNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand p-5 text-white" href="/">
        Life in the UK
      </a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link text-white" href="/mockTests">
              Practise Test
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-white" href="/handbook">
              Handbook
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default StyledNavbar;
