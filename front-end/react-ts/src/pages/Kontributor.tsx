import "../index.css"
import { Link } from "react-router-dom"

export default function Kontributor() {
    return(
        <>
            <div className="content">
                <h1>Kontributor</h1>
                <p className="subtitle">Dukung pengembangan NalariaAI agar menjadi lebih baik</p>
                <ul className="feature-list">
                    <li>
                        <strong className="list-judul">Kontribusi Melalui Data</strong>
                        <p>Bantu NalariaAI dalam meningkatkan pemahaman yang lebih baik
                        <Link to="/kontributor/kontributor-data" className="link-navigate"> disini.</Link></p>
                        
                    </li>
                    <li>
                        <strong className="list-judul">Umpan Balik & Survei</strong>
                        <p> Berikan masukan kepada NalariaAI agar bekerja sesuai kebutuhanmu
                        <Link to="/kontributor/kontributor-survei" className="link-navigate"> disini.</Link></p>
                    </li>
                    <li>
                        <strong className="list-judul">Contributor Rewards</strong>
                        <p> Setiap kontributor Anda sangat berarti bagi kami. Sebagai bentuk ucapan terima kasih kami, 
                            berikut adalah list kontributor bulanan.</p>
                        
                    </li>
                </ul>
            </div>
        </>
    )
}