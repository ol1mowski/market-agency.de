import style from './Departments.module.scss';
import advice from '../../assets/icons/contract.png';
import ecommerce from '../../assets/icons/e-commerce.svg';
import accounting from '../../assets/icons/accounting.svg';
import Department from './Department/Department';

const Departments = () => {

    const departments = [
        {
            id: 1,
            img: advice,
            type: 'Doradztwo dla małych firm',
            do1: 'Budowanie zdrowego fundamentu dla Twojej firmy',
            do2: 'Zarządzanie wzrostem, planowanie ścieżki rozwoju',
        },
        {
            id: 2,
            img: ecommerce,
            type: 'Doradztwo e-commerce',
            do1: 'Tworzenie analiz i planów rynkowych',
            do2: 'Rozszerzenie sprzedaży na innych platformach',
        },
        {
            id: 3,
            img: accounting,
            type: 'Księgowość wewnętrzna',
            do1: 'Obsługa kont firmowych',
            do2: 'Usprawnienie procesów księgowych',
        },
    ];

    return (
        <>
            <div className={style.departmentsContainer}>
                <h2 className={style.departmentsContainer__h2}>Czym się zajmujemy</h2>
                <div className={style.departmentsContainer__wrapper}>

                {departments.map((item) => 
                    <Department 
                    key={item.id}
                    img={item.img}
                    type={item.type}
                    do1={item.do1}
                    do2={item.do2}
                    />
                )}
                </div>
            </div>
        </>
    )
}

export default Departments;