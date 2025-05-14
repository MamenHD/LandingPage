const Footer = () => {
    return (
        <main>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                    <p>
                        Sivoki & Sinersi.
                        <br />
                        Platform pembelajaran ners dan keperawatan lengkap dan terjamin.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Menu</h6>
                    <a className="link link-hover" href="/">Beranda</a>
                    <a className="link link-hover" href="https://sinersimobile.id">Sinersi</a>
                    <a className="link link-hover" href="https://sivokimobile.id">Sivoki</a>
                    <a className="link link-hover" href="/kontak">Kontak</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Kelas</h6>
                    <a className="link link-hover" href="https://sinersimobile.id">Sinersi</a>
                    <a className="link link-hover" href="https://sivokimobile.id">Sivoki</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Kontak</h6>
                    <p>Hubungi <a className="link link-hover" href="/">0858-8310-8588</a> jika <br /> terdapat masalah.</p>
                </nav>
            </footer>

            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <a href="https://github.com/MamenHD">MamenHD</a></p>
                </aside>
            </footer>
        </main>
    )
}

export default Footer;