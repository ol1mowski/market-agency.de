import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import style from './AboutSection.module.scss';
import logo from '../../assets/icons/logo.svg';

const AboutSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const contentVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
        <>
            <div ref={ref} id={style.about} className={style.aboutSectionContainer}>
                <motion.img src={logo} alt='logo' className={style.aboutSectionContainer__logo} variants={contentVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} />
                <motion.h2 variants={contentVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    Kim jesteśmy
                </motion.h2>
                <motion.p variants={contentVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    W Agencji Market+ współpracujemy z Tobą, aby zoptymalizować Twój biznes na wszystkich poziomach. Nasza wielokrotnie nagradzana firma doradztwa menedżerskiego, składa się z profesjonalnych konsultantów zaangażowanych w rozwój Twojej działalności.
                </motion.p>
            </div>
        </>
    )
}

export default AboutSection;
