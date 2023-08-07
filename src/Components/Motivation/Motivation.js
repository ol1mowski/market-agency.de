import style from './Motivation.module.scss';
import image from '../../assets/images/work.png';

const Motivation = () => {
    return (
        <>
            <div className={style.motivationContainer}>
                <h2>Sukces zdarza się tym, którzy na niego pracują.</h2>
                <img src={image} alt='image' className={style.motivationContainer__img}/>
            </div>
        </>
    )
}

export default Motivation;