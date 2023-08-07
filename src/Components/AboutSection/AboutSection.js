import style from './AboutSection.module.scss';
import logo from '../../assets/icons/logo.svg';

const AboutSection = () => {
    return(
        <>
            <div className={style.aboutSectionContainer}>
                <img src={logo} alt='logo' className={style.aboutSectionContainer__logo}/>
                <h2>
                Kim jesteśmy
                </h2>
                <p>
                W Agencji Market+ współpracujemy z Tobą, aby zoptymalizować Twój biznes na wszystkich poziomach. Nasza wielokrotnie nagradzana firma doradztwa menedżerskiego, składa się z profesjonalnych konsultantów zaangażowanych w rozwój Twojej działalności.
                </p>
            </div>
        </>
    )
}

export default AboutSection;