import Header from "./Header";
import Footer from "./Footer";

const Shell = (props) => {
    const { children } = props;
    return (
        <div className="site-shell">
            <Header />
            <main className="main-container">
                <div className="container">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
};

export default Shell;