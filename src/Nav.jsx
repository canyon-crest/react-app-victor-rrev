import './nav.css';

function Nav({ setPage }) {
  return (
    <div>
    <nav className="nav">
    
      {/* <ul> */}
        {/* <li onClick={() => setPage("home")}>Home</li> */}
        {/* <li onClick={() => setPage('about')}>About</li> */}
        {/* <li onClick={() => setPage("contact")}>Contact</li> */}

      {/* </ul> */}
    

      <h1 className="logo">Reverdatto Marketplace</h1>

      <button className="nav-btn" onClick={() => setPage("home")}>Home</button>
      <button className="nav-btn" onClick={() => setPage("products")}>Products</button>
      <button className="nav-btn" onClick={() => setPage("contact")}>Contact</button>

    </nav>
    </div>
    
  );
}

export default Nav