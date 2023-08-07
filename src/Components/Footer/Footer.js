import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import style from './Footer.module.scss';
import img from '../../assets/images/footer.png';

const Footer = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } },
    };

    const infoVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
    };

    return (
        <div className={style.footerContainer} ref={ref}>
            <motion.div className={style.footerContainer__leftSide} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                <img src={img} alt='image' className={style.footerContainer__leftSide__img} />
            </motion.div>
            <motion.div className={style.footerContainer__rightSide} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                <h2 className={style.footerContainer__rightSide__h2}>
                    Zróbmy to  razem.
                </h2>
                <div className={style.footerContainer__rightSide__info}>
                    <motion.h3 variants={infoVariants}>Miejsce</motion.h3>
                    <motion.p variants={infoVariants}>ul. Dowolna 123, Miastko</motion.p>
                </div>
                <div className={style.footerContainer__rightSide__info}>
                    <motion.h3 variants={infoVariants}>Kontakt</motion.h3>
                    <motion.p variants={infoVariants}>123 456 789 witaj@naprawdeswietnastrona.pl</motion.p>
                </div>
            </motion.div>
            <motion.p className={style.copy} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                © Copyright 2023. Made by Oliwier Markiewicz
            </motion.p>
        </div>
    );
}

export default Footer;
