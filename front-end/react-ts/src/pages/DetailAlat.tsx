import "../index.css"
import { useParams } from "react-router-dom"
import { alatList } from "../data/alatList";
import { ICON_FILE } from "../assets/icons";

export default function DetailAlat() {
    const { toolId } = useParams();
    const tool = alatList.find(item=> item.name === toolId);

    if (!tool) {
        return <h2>Alat tidak ditemukan</h2>
    }
    return (
        <div className="content tool-detail">
            <h1>{tool.name}</h1>
            <p className="subtitle">{ tool.desc }</p>

            {/* Upload Box */}
            <div className="upload-wrapper">
                <label className="upload-box">
                    <img 
                        src={ICON_FILE[tool.iconFileInput]}
                        alt={ tool.name } 
                        className="tool-icon" 
                    />
                    <span className="upload-text">Pilih File</span>

                    <input 
                    type="file"  
                    accept={ tool.accept }
                    hidden
                    />
                </label>
            </div>
            <span className="upload-subtext">atau drop file disini</span>
        </div>
    )
}