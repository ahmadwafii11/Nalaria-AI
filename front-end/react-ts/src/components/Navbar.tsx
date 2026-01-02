import { useState } from "react";
import "../index.css"
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [collapsed, setCollapsed] = useState(false);

    return(
        <>
            <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
                {/*Icon atas*/}
                <div className="logo-container">
                    {/*logo with text*/}
                    <img src="../public/logo/logo with teks.png" alt="logo with teks" className={`logo-img logo-text ${collapsed? "hide" : ""}`} />

                    {/*logo witout text*/}
                    <img src="../public/logo/logo.svg" alt="logo without teks" className= {`logo-img logo-icon ${collapsed? "show" : ""}`} />
                    
                    <button className="collapse-btn"
                    onClick= {() => setCollapsed(!collapsed)}
                    >
                        <img src="../public/icon/icon sidebar.svg" alt="icon sidebar"/>
                    </button>
                </div>

                {/*Menu Navbar*/}
                <nav className="menu">
                    <NavLink to="/" 
                    className= {({ isActive }) =>
                        isActive? "menu-item active" : "menu-item"
                    }>
                        <img src="../public/icon/icon beranda.svg" alt="icon beranda" className="menu-icon" />
                        {!collapsed && <span>Beranda</span>}
                    </NavLink>
                    <NavLink to="/alat" 
                    className= {({ isActive }) =>
                        isActive? "menu-item active" : "menu-item"
                    }>
                        <img src="../public/icon/icon alat gabung.png" alt="icon alat" className="menu-icon" />
                        {!collapsed && <span>Alat</span>}
                    </NavLink>
                    <NavLink to="/imageai" 
                    className= {({ isActive }) =>
                        isActive? "menu-item active" : "menu-item"
                    }>
                        <img src="../public/icon/icon imageAI.svg" alt="icon imageAI" className="menu-icon" />
                        {!collapsed && <span>ImageAI</span>}
                    </NavLink>
                    <NavLink to="/textai" 
                    className= {({ isActive }) =>
                        isActive? "menu-item active" : "menu-item"
                    }>
                        <img src="../public/icon/icon textAI.png" alt="icon textAI" className="menu-icon" />
                        {!collapsed && <span>TextAI</span>}
                    </NavLink>
                    <NavLink to="/kontributor" 
                    className= {({ isActive }) =>
                        isActive? "menu-item active" : "menu-item"
                    }>
                        <img src="../public/icon/icon kontributor.svg" alt="icon kontributor" className="menu-icon" />
                        {!collapsed && <span>Kontributor</span>}
                    </NavLink>
                    <NavLink to="/pengaturan" 
                    className= {({ isActive }) =>
                        isActive? "menu-item active" : "menu-item"
                    }>
                        <img src="../public/icon/icon pengaturan.svg" alt="icon pengaturan" className="menu-icon" />
                        {!collapsed && <span>Pengaturan</span>}
                    </NavLink>
                </nav>
                <button className="upgrade-btn">
                    <img src="../public/icon/icon masuk.svg" alt="icon sidebar"/>
                    {!collapsed && <span>Masuk</span>}
                </button>
            </aside>
        </>
    );
};