import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <article className="notfound">
            <section>
                <h2>Weird...</h2>
                <p>It seems like we dont have this page available</p>
                <Link to="/">
                    <section className="btn-primary">
                        <p>Go to out homepage</p>
                    </section>
                </Link>
            </section>
        </article>
     );
}
 
export default NotFound;