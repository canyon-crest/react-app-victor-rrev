import './nav.css';

function Nav({ setPage, user }) {
  return (
    <div>
      <nav className="nav">
      
        {/* <ul> */}
          {/* <li onClick={() => setPage("home")}>Home</li> */}
          {/* <li onClick={() => setPage('about')}>About</li> */}
          {/* <li onClick={() => setPage("contact")}>Contact</li> */}

        {/* </ul> */}
      

        <h1 className="logo">Reverdatto's Marketplace</h1>

        <button className="nav-btn" onClick={() => setPage("home")}>Home</button>
        <button className="nav-btn" onClick={() => setPage("Products")}>Products</button>
        <button className="nav-btn" onClick={() => setPage("About")}>About</button>
        <button className="nav-btn" onClick={() => setPage("GoogleLogin")}>Google Login</button>

        {user && (
          <span style={{ marginLeft: "15px", color: "white" }}>
            Welcome, {user.displayName}
          </span>
        )}

      </nav>
    </div>
    
  );
}

export default Nav