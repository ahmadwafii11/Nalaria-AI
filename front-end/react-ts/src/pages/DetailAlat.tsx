import "../index.css"
import { useParams } from "react-router-dom"
import { alatList } from "../data/alatList";
import { ICON_FILE } from "../assets/icons";
import { useState } from "react";

export default function DetailAlat() {
    const { toolId } = useParams() as { toolId: string };

    const tool = alatList.find(item=> item.name === toolId);

    const [file, setFile] = useState<File | null > (null);

    if (!tool) {
        return <h2>Alat tidak ditemukan</h2>
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) setFile(selectedFile);
    };

    const removeFile = () => {
        setFile(null);
    }

    return (
        <>
            <div className="content tool-detail">
                <h1>{tool.name}</h1>
                <p className="subtitle">{ tool.desc }</p>
                
                {/* Sebelum file dipilih */}
                {/* Upload Box */}
                {!file && (
                    <div className="upload-wrapper">
                        <label className="upload-box">
                            <img 
                                src={ICON_FILE[tool.iconFileInput]}
                                alt={ tool.name } 
                                className="tool-icon" 
                            />
                            
                            <span className="upload-text">Pilih File</span>
                            <span className="upload-subtext">atau drop file disini</span>
                            <input 
                                type="file"  
                                accept={ tool.accept }
                                hidden
                                onChange={handleFileChange}
                            />
                        </label>
                    </div>
                )}

                {/* Setelah file dipilih*/}
                {file && (
                    <div className="file-preview">
                        <div className="file-card">
                            <img 
                                src={ICON_FILE[tool.iconFileInput]}
                                alt="file icon" 
                                className="file-icon"
                            />

                            <span className="file-name">{file.name}</span>

                            <button className="remove-btn" onClick={removeFile}>

                            </button>
                        </div>

                        <button className="convert-btn">
                            Konversi ke Word
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}