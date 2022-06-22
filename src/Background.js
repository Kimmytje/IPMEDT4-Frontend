import { motion } from "framer-motion";

const Background = (props) => {
    const blob = props.blobs;

    return ( 
        <>
            <motion.article 
            className="background"
            layout
            >
                {blob.map(blob => (
                    <motion.section layoutId={blob.id} key={blob.id} className="blob-container" style={{left: blob.lr, top: blob.tb}}>
                        <section className="blob" style={{borderRadius: blob.borderRadius, background: 'var(' + blob.background + ')', height: blob.height, width: blob.width}}></section>
                        <section className="blob" style={{borderRadius: blob.borderRadius, background: 'var(' + blob.background + '50)', height: blob.height, width: blob.width, left: blob.offsetLeft, top: blob.offsetTop}}></section>
                    </motion.section>
                ))}
            </motion.article>
        </>
     );
}
 
export default Background;