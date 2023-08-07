import style from './Department.module.scss';

const Department = props => {
    return (
        <>
            <div className={style.departmentConatiner}>
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
            </div>
        </>
    )
}

export default Department;