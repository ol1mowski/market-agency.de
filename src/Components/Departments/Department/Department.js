import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import style from './Department.module.scss';

const Department = props => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const containerVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <div ref={ref}>
            <motion.div className={style.departmentConatiner} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                <div className={style.departmentConatiner__imgWrapper}>
                    <img src={props.img} alt='logo' />
                </div>
                <h2>
                    {props.type}
                </h2>
                <ul>
                    <li>{props.do1}</li>
                    <li>{props.do2}</li>
                </ul>
            </motion.div>
        </div>
    );
};

export default Department;
