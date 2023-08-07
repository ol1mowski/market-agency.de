import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import style from './Motivation.module.scss';
import image from '../../assets/images/work.png';

const Motivation = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
    };

    return (
        <div className={style.motivationContainer}>
            <motion.h2 variants={textVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
                Sukces zdarza się tym, którzy na niego pracują.
            </motion.h2>
            <motion.img src={image} alt='image' className={style.motivationContainer__img} variants={imageVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} />
        </div>
    );
}

export default Motivation;
