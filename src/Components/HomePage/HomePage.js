import React from 'react';
import { motion } from 'framer-motion';
import style from './HomePage.module.scss';
import logo from '../../assets/icons/logo.svg';
import { Link } from 'react-scroll';

const HomePage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const contentVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const buttonVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
    };

    return (
        <>
            <motion.div className={style.homeContainer} variants={containerVariants} initial="hidden" animate="visible">
                <motion.div className={style.homeContainer__left} variants={contentVariants}>
                    <motion.img src={logo} alt='logo' className={style.homeContainer__left__logo} variants={contentVariants} />
                    <motion.div className={style.homeContainer__left__content} variants={contentVariants}>
                        <motion.h2 variants={contentVariants}>
                            Jeden krok do optymalizacji Twojej firmy
                        </motion.h2>
                        <motion.p variants={contentVariants}>
                            Agencja Market+
                        </motion.p>
                        <motion.a href='#about' variants={buttonVariants}>
                            <motion.button>
                                <Link to={style.about} smooth={true} duration={1000}>
                                    Dowiedz się więcej
                                </Link>
                            </motion.button>
                        </motion.a>
                    </motion.div>
                </motion.div>
                <motion.div className={style.homeContainer__right}>
                </motion.div>
            </motion.div>
        </>
    )
}

export default HomePage;
