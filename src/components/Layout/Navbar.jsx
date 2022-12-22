import React from "react";

const Navbar = () => {
  return (
    <>
      <header id='header'>
        <div className='inner'>
          {/* <!-- Logo --> */}
          <a href='/' className='logo'>
            <span className='symbol'>
              <img src='images/logo.svg' alt='' />
            </span>
            <span className='title'>Total Estudio</span>
          </a>

          {/* <!-- Nav --> */}
          <nav>
            <ul>
              <li>
                <a href='#menu'>Menu</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* // <!-- Menu --> */}
      <nav id='menu'>
        <h2>Menu</h2>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Ipsum veroeros</a>
          </li>
          <li>
            <a href='/'>Tempus etiam</a>
          </li>
          <li>
            <a href='/'>Consequat dolor</a>
          </li>
          <li>
            <a href='/'>Elements</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
