import "../index.css"
import { NavLink } from "react-router-dom";
import { alatList } from "../data/alatList";
import { ICON_MAP } from "../assets/icons";
import { useState } from "react";

export default function Alat() {
    type FilterType = "ALL" | "PDF" | "Word" | "Excel" | "JPG"
    const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");

    const filteredTools = 
        activeFilter === "ALL"
            ? alatList
            : alatList.filter((alat) => alat.category === activeFilter);
    return(
        <>
            <div className="content">
                <h1>Smart Office Tools by NalariaAI</h1>
                <p className="subtitle">Semua alat perlengkapan untuk memudahkan pekerjaan kantor Anda</p>

                {/*Filter Menu Alat*/}
                <div className="tool-filter">
                    {(["ALL", "PDF", "Word", "Excel", "JPG"] as FilterType[]).map(
                        (filter) => (
                            <button 
                            key={filter}
                            className={activeFilter === filter? "active" : ""}
                            onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        )
                    )}
                </div>

                {/*Card Grid*/}
                <div className="card-container">
                    {filteredTools.map((alat) => (
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