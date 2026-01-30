import "../index.css"
import { Link } from "react-router-dom"

export default function Beranda() {
    return(
        <>
            <main className="content">
                <h1>Selamat Datang di NalariaAI</h1>
                <p>NalariaAI merupakan sebuah solusi yang akan membantu Anda dalam menyelesaikan pekerjaan kantor secara cepat & tepat.
                    Terdapat beberapa fitur yang dapat Anda gunakan, seperti:
                </p>
                <ul className="feature-list">
                    <li>
                        <strong className="list-judul">Word to PDF</strong>
                        <p>Membantu Anda dalam mengkonversi dokumen format Word ke dalam bentuk dokumen format PDF.</p>
                    </li>
                    <li>
                        <strong className="list-judul">Merge PDF</strong>
                        <p>Membantu Anda dalam menyatukan halaman pada dokumen berformat PDF yang terpisah.</p>
                    </li>
                    <li>
                        <strong className="list-judul">Split PDF</strong>
                        <p>Membantu Anda dalam memisahkan halaman pada dokumen berformat PDF yang terdapat dalam satu file.</p>
                    </li>
                    <li>
                        <strong className="list-judul">Compress PDF</strong>
                        <p>Membantu Anda dalam mengurangi ukuran file dalam bentuk dokumen format PDF.</p>
                    </li>
                    <li>
                        <strong className="list-judul">JPG to PDF</strong>
                        <p>Membantu Anda dalam mengkonversi dokumen format JPG ke dalam bentuk dokumen format PDF.</p>
                    </li>
                    <li>
                        <strong className="list-judul">Excel to PDF</strong>
                        <p>Membantu Anda dalam mengkonversi dokumen format Excel ke dalam bentuk dokumen format PDF.</p>
                    </li>
                    <li>
                        <strong className="list-judul">PDF to Word</strong>
                        <p>Membantu Anda dalam mengkonversi dokumen format PDF ke dalam bentuk dokumen format Word.</p>
                    </li>
                    <li>
                        <strong className="list-judul">PDF to JPG</strong>
                        <p>Membantu Anda dalam mengkonversi dokumen format PDF ke dalam bentuk dokumen format JPG.</p>
                    </li>
                    <li>
                        <strong className="list-judul">PDF to Excel</strong>
                        <p>Membantu Anda dalam mengkonversi dokumen format PDF ke dalam bentuk dokumen format Excel.</p>
                    </li>
                    <li>
                        <strong className="list-judul">Remove Background</strong>
                        <p>Membantu Anda dalam menghapus background atau latar belakang pada file berformat JPG, PNG.</p>
                    </li>
                </ul>
                <p>Selain itu, NalariaAI sedang dalam proses pengembangan fitur ImageAI & TextAI. Anda dapat berkontribusi pada pengembangan fitur tersebut 
                    <Link to="/kontributor" className="link-navigate"> disini.</Link>
                </p>
                <p>Sekian dari kami,</p>
                <p>Salam hangat</p>
            </main>
        </>
    )
}