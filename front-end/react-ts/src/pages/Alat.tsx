import "../index.css"
import { NavLink } from "react-router-dom";
import { alatList } from "../data/alatList";
import { ICON_MAP } from "../assets/icons";

export default function Alat() {
    return(
        <>
            <div className="content">
                <h1>Smart Office Tools by NalariaAI</h1>
                <p className="subtitle">Semua alat perlengkapan untuk memudahkan pekerjaan kantor Anda</p>

                {/*Filter Menu Alat*/}
                <div className="tool-filter">
                    <button className="active">ALL</button>
                    <button>PDF</button>
                    <button>WORD</button>
                    <button>EXCEL</button>
                    <button>JPG</button>
                </div>

                {/*Card Grid*/}
                <div className="card-container">
                    {alatList.map((alat) => (
                        <NavLink
                            key={alat.id}
                            to={`/alat/${alat.name}`}
                            className="card"
                        >
                            <img 
                            src={ICON_MAP[alat.icon]} 
                            alt={alat.name}
                            className="card-header" />
                            <div className="card-body">
                                <h3>{alat.name}</h3>
                                <p>{alat.desc}</p>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
};