import style from './HomePage.module.scss';
import logo from '../../assets/icons/logo.svg';

const HomePage = () => {
    return (
        <>
            <div className={style.homeContainer}>
                <div className={style.homeContainer__left}>
                    <img src={logo} alt='logo' className={style.homeContainer__left__logo} />
                    <div className={style.homeContainer__left__content}>
                        <h2>
                            Jeden krok do optymalizacji Twojej firmy
                        </h2>
                        <p>
                            Agencja Market+
                        </p>
                        <button>
                            Dowiedz się więcej
                        </button>
                    </div>
                </div>
                <div className={style.homeContainer__right}>
                </div>
            </div>
        </>
    )
}

export default HomePage;