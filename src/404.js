import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <article className="notfound">
                <h1>404</h1>

                <section className="spotlight-wrapper">
                    <section className="spotlight-container">
                        <section className="spotlight"></section>
                    </section>
                </section>

                <section className="notfound-info">
                    <h2>We can't find that page</h2>
                    <p>Weird, we swaer this page used to be here. Unless ofcourse you just typed in some random letters to see where it would take you.... Naaahhh you would never, right?</p>
                    <Link to="/">
                        <section className="btn-primary">
                            <p>Home</p>
                        </section>
                    </Link>
                </section>
        </article>
     );
}
 
export default NotFound;