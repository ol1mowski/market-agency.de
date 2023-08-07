import style from './Footer.module.scss';
import img from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <>
            <div className={style.footerContainer}>
                <div className={style.footerContainer__leftSide}>
                    <img src={img} alt='image' className={style.footerContainer__leftSide__img} />
                </div>
                <div className={style.footerContainer__rightSide}>
                    <h2 className={style.footerContainer__rightSide__h2}>
                        Zróbmy to  razem.
                    </h2>
                    <div className={style.footerContainer__rightSide__info}>
                        <h3>Miejsce</h3>
                        <p>ul. Dowolna 123, Miastko</p>
                    </div>
                    <div className={style.footerContainer__rightSide__info}>
                        <h3>Kontakt</h3>
                        <p>123 456 789
                            witaj@naprawdeswietnastrona.pl</p>
                    </div>
                </div>
                <p className={style.copy}>© Copyright 2023. Made by Oliwier Markiewicz</p>
            </div>
        </>
    )
}

export default Footer;