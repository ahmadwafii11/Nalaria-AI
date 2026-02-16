import '../index.css'

export default function KontributorSurvei(){
    return(
        <>
            <div className="content">
                <h1>Kontributor Survei</h1>
                <p className="subtitle">Berikan masukan kepada NalariaAI agar bekerja sesuai kebutuhanmu</p>
                <form id="survey-form" className='survey-form'>
                    {/*Label Age*/}
                    <div className="form-group">
                        <label htmlFor="age">1. Usia</label>
                        <input type="number" name="age" id="age" min={10} max={70} placeholder='Contoh: 20' required />
                    </div>

                    {/*Label Gender*/}
                    <div className="form-group">
                        <label htmlFor="gender">2. Jenis Kelamin</label>
                        <div className="radio-group">
                            <label htmlFor="gender"><input type="radio" name="gender" id="gender" value={"male"}/>Laki-Laki</label>
                            <label htmlFor="gender"><input type="radio" name="gender" id="gender" value={"female"}/>Perempuan</label>
                        </div>
                    </div>

                    {/*Label Use Website*/}
                    <div className="form-group">
                        <label htmlFor="useWebsiteKeras">3. Perangkat keras yang digunakan untuk membuka website NalariaAI</label>
                        <div className="radio-group">
                            <label htmlFor="useWebsiteKeras"><input type="radio" name="useWebsiteKeras" id="useWebsiteKeras" value={"Smartphone"}/>Smartphone</label>
                            <label htmlFor="useWebsiteKeras"><input type="radio" name="useWebsiteKeras" id="useWebsiteKeras" value={"Tablet"}/>Tablet</label>
                            <label htmlFor="useWebsiteKeras"><input type="radio" name="useWebsiteKeras" id="useWebsiteKeras" value={"Laptop"}/>Laptop</label>
                            <label htmlFor="useWebsiteKeras"><input type="radio" name="useWebsiteKeras" id="useWebsiteKeras" value={"Desktop PC"}/>Desktop PC</label>
                            <label htmlFor="useWebsiteKeras"><input type="radio" name="useWebsiteKeras" id="useWebsiteKeras" value={"SmartTV"}/>SmartTV</label>
                            <label htmlFor="useWebsiteKeras"><input type="radio" name="useWebsiteKeras" id="useWebsiteKeras" value={"Lainnya"}/>Lainnya</label>
                        </div>
                    </div>
                    
                    {/*Label Use Website*/}
                    <div className="form-group">
                        <label htmlFor="useWebsiteLunak">4. Perangkat lunak yang digunakan untuk membuka website NalariaAI</label>
                        <div className="radio-group">
                            <label htmlFor="useWebsiteLunak"><input type="radio" name="useWebsiteLunak" id="useWebsiteLunak" value={"Google Chrome"}/>Google Chrome</label>
                            <label htmlFor="useWebsiteLunak"><input type="radio" name="useWebsiteLunak" id="useWebsiteLunak" value={"Microsoft Edge"}/>Microsoft Edge</label>
                            <label htmlFor="useWebsiteLunak"><input type="radio" name="useWebsiteLunak" id="useWebsiteLunak" value={"Safari"}/>Safari</label>
                            <label htmlFor="useWebsiteLunak"><input type="radio" name="useWebsiteLunak" id="useWebsiteLunak" value={"Mozilla Firefox"}/>Mozilla Firefox</label>
                            <label htmlFor="useWebsiteLunak"><input type="radio" name="useWebsiteLunak" id="useWebsiteLunak" value={"Opera Mini"}/>Opera Mini</label>
                            <label htmlFor="useWebsiteLunak"><input type="radio" name="useWebsiteLunak" id="useWebsiteLunak" value={"Brave"}/>Brave</label>
                            <label htmlFor="useWebsiteLunak"><input type="radio" name="useWebsiteLunak" id="useWebsiteLunak" value={"Lainnya"}/>Lainnya</label>
                        </div>
                    </div>

                    {/*Label Rate Responsive Use Smartphone*/}
                    <div className="form-group">
                        <label htmlFor="rate-responsive-smartphone">5. Berikan rating untuk responsivitas situs website NalariaAI saat diakses menggunakan smartphone</label>
                        <div className="radio-group">
                            <label htmlFor="rate-responsive-smartphone"><input type="radio" name="rate-smartphone" id="rate-smartphone" value={1}/>1</label>
                            <label htmlFor="rate-responsive-smartphone"><input type="radio" name="rate-smartphone" id="rate-smartphone" value={2}/>2</label>
                            <label htmlFor="rate-responsive-smartphone"><input type="radio" name="rate-smartphone" id="rate-smartphone" value={3}/>3</label>
                            <label htmlFor="rate-responsive-smartphone"><input type="radio" name="rate-smartphone" id="rate-smartphone" value={4}/>4</label>
                            <label htmlFor="rate-responsive-smartphone"><input type="radio" name="rate-smartphone" id="rate-smartphone" value={5}/>5</label>
                        </div>
                    </div>

                    {/*Label Rate Responsive Use Laptop*/}
                    <div className="form-group">
                        <label htmlFor="rate-responsive-smartphone">6. Berikan rating untuk responsivitas situs website NalariaAI saat diakses menggunakan laptop</label>
                        <div className="radio-group">
                            <label htmlFor="rate-responsive-smartphone"><input type="radio" name="rate-smartphone" id="rate-smartphone" value={1}/>1</label>
                            <label htmlFor="rate-responsive-smartphone"><input type="radio" name="rate-smartphone" id="rate-smartphone" value={2}/>2</label>
                            <label htmlFor="rate-responsive-smartphone"><input type="radio" name="rate-smartphone" id="rate-smartphone" value={3}/>3</label>
                            <label htmlFor="rate-responsive-smartphone"><input type="radio" name="rate-smartphone" id="rate-smartphone" value={4}/>4</label>
                            <label htmlFor="rate-responsive-smartphone"><input type="radio" name="rate-smartphone" id="rate-smartphone" value={5}/>5</label>
                        </div>
                    </div>

                    {/*Label Rate Responsive Use Desktop PC*/}
                    <div className="form-group">
                        <label htmlFor="rate-responsive-smartphone">7. Berikan rating untuk responsivitas situs website NalariaAI saat diakses menggunakan desktop pc</label>
                        <div className="radio-group">
                            <label htmlFor="rate-responsive-smartphone"><input type="radio" name="rate-smartphone" id="rate-smartphone" value={1}/>1</label>
                            <label htmlFor="rate-responsive-smartphone"><input type="radio" name="rate-smartphone" id="rate-smartphone" value={2}/>2</label>
                            <label htmlFor="rate-responsive-smartphone"><input type="radio" name="rate-smartphone" id="rate-smartphone" value={3}/>3</label>
                            <label htmlFor="rate-responsive-smartphone"><input type="radio" name="rate-smartphone" id="rate-smartphone" value={4}/>4</label>
                            <label htmlFor="rate-responsive-smartphone"><input type="radio" name="rate-smartphone" id="rate-smartphone" value={5}/>5</label>
                        </div>
                    </div>

                    {/*Label Rate Menu Alat Word-to-PDF*/}
                    <div className="form-group">
                        <label htmlFor="rate-menu-alat-word-to-pdf">8. Berikan rating untuk menu alat Word to PDF</label>
                        <div className="radio-group">
                            <label htmlFor="rate-menu-alat-word-to-pdf"><input type="radio" name="rate-menu-alat-word-to-pdf" id="rate-menu-alat-word-to-pdf" value={1}/>1</label>
                            <label htmlFor="rate-menu-alat-word-to-pdf"><input type="radio" name="rate-menu-alat-word-to-pdf" id="rate-menu-alat-word-to-pdf" value={2}/>2</label>
                            <label htmlFor="rate-menu-alat-word-to-pdf"><input type="radio" name="rate-menu-alat-word-to-pdf" id="rate-menu-alat-word-to-pdf" value={3}/>3</label>
                            <label htmlFor="rate-menu-alat-word-to-pdf"><input type="radio" name="rate-menu-alat-word-to-pdf" id="rate-menu-alat-word-to-pdf" value={4}/>4</label>
                            <label htmlFor="rate-menu-alat-word-to-pdf"><input type="radio" name="rate-menu-alat-word-to-pdf" id="rate-menu-alat-word-to-pdf" value={5}/>5</label>
                        </div>
                    </div>

                    {/*Label Rate Menu Alat Merge-PDF*/}
                    <div className="form-group">
                        <label htmlFor="rate-menu-alat-merge-pdf">9. Berikan rating untuk menu alat Merge PDF</label>
                        <div className="radio-group">
                            <label htmlFor="rate-menu-alat-merge-pdf"><input type="radio" name="rate-menu-alat-merge-pdf" id="rate-menu-alat-merge-pdf" value={1}/>1</label>
                            <label htmlFor="rate-menu-alat-merge-pdf"><input type="radio" name="rate-menu-alat-merge-pdf" id="rate-menu-alat-merge-pdf" value={2}/>2</label>
                            <label htmlFor="rate-menu-alat-merge-pdf"><input type="radio" name="rate-menu-alat-merge-pdf" id="rate-menu-alat-merge-pdf" value={3}/>3</label>
                            <label htmlFor="rate-menu-alat-merge-pdf"><input type="radio" name="rate-menu-alat-merge-pdf" id="rate-menu-alat-merge-pdf" value={4}/>4</label>
                            <label htmlFor="rate-menu-alat-merge-pdf"><input type="radio" name="rate-menu-alat-merge-pdf" id="rate-menu-alat-merge-pdf" value={5}/>5</label>
                        </div>
                    </div>

                    {/*Label Rate Menu Alat Split-PDF*/}
                    <div className="form-group">
                        <label htmlFor="rate-menu-alat-split-pdf">10. Berikan rating untuk menu alat Split PDF</label>
                        <div className="radio-group">
                            <label htmlFor="rate-menu-alat-split-pdf"><input type="radio" name="rate-menu-alat-split-pdf" id="rate-menu-alat-split-pdf" value={1}/>1</label>
                            <label htmlFor="rate-menu-alat-split-pdf"><input type="radio" name="rate-menu-alat-split-pdf" id="rate-menu-alat-split-pdf" value={2}/>2</label>
                            <label htmlFor="rate-menu-alat-split-pdf"><input type="radio" name="rate-menu-alat-split-pdf" id="rate-menu-alat-split-pdf" value={3}/>3</label>
                            <label htmlFor="rate-menu-alat-split-pdf"><input type="radio" name="rate-menu-alat-split-pdf" id="rate-menu-alat-split-pdf" value={4}/>4</label>
                            <label htmlFor="rate-menu-alat-split-pdf"><input type="radio" name="rate-menu-alat-split-pdf" id="rate-menu-alat-split-pdf" value={5}/>5</label>
                        </div>
                    </div>

                    {/*Label Rate Menu Alat Compress-PDF*/}
                    <div className="form-group">
                        <label htmlFor="rate-menu-alat-compress-pdf">11. Berikan rating untuk menu alat Compress PDF</label>
                        <div className="radio-group">
                            <label htmlFor="rate-menu-alat-compress-pdf"><input type="radio" name="rate-menu-alat-compress-pdf" id="rate-menu-alat-compress-pdf" value={1}/>1</label>
                            <label htmlFor="rate-menu-alat-compress-pdf"><input type="radio" name="rate-menu-alat-compress-pdf" id="rate-menu-alat-compress-pdf" value={2}/>2</label>
                            <label htmlFor="rate-menu-alat-compress-pdf"><input type="radio" name="rate-menu-alat-compress-pdf" id="rate-menu-alat-compress-pdf" value={3}/>3</label>
                            <label htmlFor="rate-menu-alat-compress-pdf"><input type="radio" name="rate-menu-alat-compress-pdf" id="rate-menu-alat-compress-pdf" value={4}/>4</label>
                            <label htmlFor="rate-menu-alat-compress-pdf"><input type="radio" name="rate-menu-alat-compress-pdf" id="rate-menu-alat-compress-pdf" value={5}/>5</label>
                        </div>
                    </div>

                    {/*Label Rate Menu Alat JPG-to-PDF*/}
                    <div className="form-group">
                        <label htmlFor="rate-menu-alat-jpg-to-pdf">12. Berikan rating untuk menu alat JPG to PDF</label>
                        <div className="radio-group">
                            <label htmlFor="rate-menu-alat-jpg-to-pdf"><input type="radio" name="rate-menu-alat-jpg-to-pdf" id="rate-menu-alat-jpg-to-pdf" value={1}/>1</label>
                            <label htmlFor="rate-menu-alat-jpg-to-pdf"><input type="radio" name="rate-menu-alat-jpg-to-pdf" id="rate-menu-alat-jpg-to-pdf" value={2}/>2</label>
                            <label htmlFor="rate-menu-alat-jpg-to-pdf"><input type="radio" name="rate-menu-alat-jpg-to-pdf" id="rate-menu-alat-jpg-to-pdf" value={3}/>3</label>
                            <label htmlFor="rate-menu-alat-jpg-to-pdf"><input type="radio" name="rate-menu-alat-jpg-to-pdf" id="rate-menu-alat-jpg-to-pdf" value={4}/>4</label>
                            <label htmlFor="rate-menu-alat-jpg-to-pdf"><input type="radio" name="rate-menu-alat-jpg-to-pdf" id="rate-menu-alat-jpg-to-pdf" value={5}/>5</label>
                        </div>
                    </div>

                    {/*Label Rate Menu Alat Excel-to-PDF*/}
                    <div className="form-group">
                        <label htmlFor="rate-menu-alat-excel-to-pdf">13. Berikan rating untuk menu alat Excel to PDF</label>
                        <div className="radio-group">
                            <label htmlFor="rate-menu-alat-excel-to-pdf"><input type="radio" name="rate-menu-alat-excel-to-pdf" id="rate-menu-alat-excel-to-pdf" value={1}/>1</label>
                            <label htmlFor="rate-menu-alat-excel-to-pdf"><input type="radio" name="rate-menu-alat-excel-to-pdf" id="rate-menu-alat-excel-to-pdf" value={2}/>2</label>
                            <label htmlFor="rate-menu-alat-excel-to-pdf"><input type="radio" name="rate-menu-alat-excel-to-pdf" id="rate-menu-alat-excel-to-pdf" value={3}/>3</label>
                            <label htmlFor="rate-menu-alat-excel-to-pdf"><input type="radio" name="rate-menu-alat-excel-to-pdf" id="rate-menu-alat-excel-to-pdf" value={4}/>4</label>
                            <label htmlFor="rate-menu-alat-excel-to-pdf"><input type="radio" name="rate-menu-alat-excel-to-pdf" id="rate-menu-alat-excel-to-pdf" value={5}/>5</label>
                        </div>
                    </div>

                    {/*Label Rate Menu Alat PDF-to-Word*/}
                    <div className="form-group">
                        <label htmlFor="rate-menu-alat-pdf-to-word">14. Berikan rating untuk menu alat PDF to Word</label>
                        <div className="radio-group">
                            <label htmlFor="rate-menu-alat-pdf-to-word"><input type="radio" name="rate-menu-alat-pdf-to-word" id="rate-menu-alat-pdf-to-word" value={1}/>1</label>
                            <label htmlFor="rate-menu-alat-pdf-to-word"><input type="radio" name="rate-menu-alat-pdf-to-word" id="rate-menu-alat-pdf-to-word" value={2}/>2</label>
                            <label htmlFor="rate-menu-alat-pdf-to-word"><input type="radio" name="rate-menu-alat-pdf-to-word" id="rate-menu-alat-pdf-to-word" value={3}/>3</label>
                            <label htmlFor="rate-menu-alat-pdf-to-word"><input type="radio" name="rate-menu-alat-pdf-to-word" id="rate-menu-alat-pdf-to-word" value={4}/>4</label>
                            <label htmlFor="rate-menu-alat-pdf-to-word"><input type="radio" name="rate-menu-alat-pdf-to-word" id="rate-menu-alat-pdf-to-word" value={5}/>5</label>
                        </div>
                    </div>

                    {/*Label Rate Menu Alat PDF-to-JPG*/}
                    <div className="form-group">
                        <label htmlFor="rate-menu-alat-pdf-to-jpg">15. Berikan rating untuk menu alat PDF to JPG</label>
                        <div className="radio-group">
                            <label htmlFor="rate-menu-alat-pdf-to-jpg"><input type="radio" name="rate-menu-alat-pdf-to-jpg" id="rate-menu-alat-pdf-to-jpg" value={1}/>1</label>
                            <label htmlFor="rate-menu-alat-pdf-to-jpg"><input type="radio" name="rate-menu-alat-pdf-to-jpg" id="rate-menu-alat-pdf-to-jpg" value={2}/>2</label>
                            <label htmlFor="rate-menu-alat-pdf-to-jpg"><input type="radio" name="rate-menu-alat-pdf-to-jpg" id="rate-menu-alat-pdf-to-jpg" value={3}/>3</label>
                            <label htmlFor="rate-menu-alat-pdf-to-jpg"><input type="radio" name="rate-menu-alat-pdf-to-jpg" id="rate-menu-alat-pdf-to-jpg" value={4}/>4</label>
                            <label htmlFor="rate-menu-alat-pdf-to-jpg"><input type="radio" name="rate-menu-alat-pdf-to-jpg" id="rate-menu-alat-pdf-to-jpg" value={5}/>5</label>
                        </div>
                    </div>

                    {/*Label Rate Menu Alat PDF-to-Excel*/}
                    <div className="form-group">
                        <label htmlFor="rate-menu-alat-pdf-to-excel">16. Berikan rating untuk menu alat PDF to Excel</label>
                        <div className="radio-group">
                            <label htmlFor="rate-menu-alat-pdf-to-excel"><input type="radio" name="rate-menu-alat-pdf-to-excel" id="rate-menu-alat-pdf-to-excel" value={1}/>1</label>
                            <label htmlFor="rate-menu-alat-pdf-to-excel"><input type="radio" name="rate-menu-alat-pdf-to-excel" id="rate-menu-alat-pdf-to-excel" value={2}/>2</label>
                            <label htmlFor="rate-menu-alat-pdf-to-excel"><input type="radio" name="rate-menu-alat-pdf-to-excel" id="rate-menu-alat-pdf-to-excel" value={3}/>3</label>
                            <label htmlFor="rate-menu-alat-pdf-to-excel"><input type="radio" name="rate-menu-alat-pdf-to-excel" id="rate-menu-alat-pdf-to-excel" value={4}/>4</label>
                            <label htmlFor="rate-menu-alat-pdf-to-excel"><input type="radio" name="rate-menu-alat-pdf-to-excel" id="rate-menu-alat-pdf-to-excel" value={5}/>5</label>
                        </div>
                    </div>

                    {/*Label Rate Menu Alat Remove Background*/}
                    <div className="form-group">
                        <label htmlFor="rate-menu-alat-remove-bg">17. Berikan rating untuk menu alat Remove Background</label>
                        <div className="radio-group">
                            <label htmlFor="rate-menu-alat-remove-bg"><input type="radio" name="rate-menu-alat-remove-bg" id="rate-menu-alat-remove-bg" value={1}/>1</label>
                            <label htmlFor="rate-menu-alat-remove-bg"><input type="radio" name="rate-menu-alat-remove-bg" id="rate-menu-alat-remove-bg" value={2}/>2</label>
                            <label htmlFor="rate-menu-alat-remove-bg"><input type="radio" name="rate-menu-alat-remove-bg" id="rate-menu-alat-remove-bg" value={3}/>3</label>
                            <label htmlFor="rate-menu-alat-remove-bg"><input type="radio" name="rate-menu-alat-remove-bg" id="rate-menu-alat-remove-bg" value={4}/>4</label>
                            <label htmlFor="rate-menu-alat-remove-bg"><input type="radio" name="rate-menu-alat-remove-bg" id="rate-menu-alat-remove-bg" value={5}/>5</label>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}