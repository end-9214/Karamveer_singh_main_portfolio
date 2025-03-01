import { useRef } from 'react';
import './home.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start","end start"]
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"])
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])



    return (
        <div className="Home" ref={ref} style={{ background: "linear-gradient(180deg, #111132, #0c0c1d)"}}>
            <motion.h1 style={{y:yText}}> My Portfolio</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{y:yBg}} className="planets"></motion.div>
            <motion.div className="stars"></motion.div>
        </div>

    )
}

export default Home;