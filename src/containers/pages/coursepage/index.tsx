import React from 'react';

import IconLogo from '../../../components/icon-logo/icon-logo';
import PageHeader from '../../../components/page-header/page-header';
import Navigation from '../../../components/navigation/navigation';
import CourseCards from '../../../components/course-cards/course-cards';
import AccountBar from '../../../components/account-bar/account-bar';
import { getConfigValue } from '@ijl/cli';
import { useAsync } from 'react-async';

import style from '../style.css';


const loadSuggetions = async () => {
    const apiUrl = getConfigValue('frontera.api');
    return await fetch(`${apiUrl}/suggetions/search/1`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    }).then((res) => res.json());
};

const Coursepage = () => {
    const { data, error, isLoading } = useAsync({ promiseFn: loadSuggetions });
    // function handleSubmit() {
    //     const apiUrl = getConfigValue('frontera.api');
    //     return fetch(`${apiUrl}/suggetions/search/1`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8',
    //         }
    //     }).then((res) => res.json());
    // }
    // console.log(data.themes);
    return (
        <div className={style.body}>
            <header className={style.header}>
                <nav className={style.userNav}>
                    <div className={style.userNav}>
                        <IconLogo color={'purple'} />
                        <Navigation links={['Home', 'Trending', 'Suggestions']} />
                    </div>
                    <AccountBar/>
                </nav>
            </header>
            <main className={style.container}>
                <section className={style.login}>
                    <PageHeader color={'purple'} label={'JavaScript Mastering'} size={'medium'}/>
                    <section className={style.gallery}>
                        <CourseCards
                            cards={[
                                {label:'React', imageSrc: '../../assets/images/code.jpg'},
                                {label:'CI/CD', imageSrc: ''},
                                {label:'Dynamics', imageSrc: ''},
                                {label:'git', imageSrc: ''},
                                {label:'React', imageSrc: ''},
                                {label:'CI/CD', imageSrc: ''},
                                {label:'Dynamics', imageSrc: ''},
                                {label:'git', imageSrc: ''},
                                {label:'React', imageSrc: ''},
                                {label:'CI/CD', imageSrc: ''},
                                {label:'Dynamics', imageSrc: ''},
                                {label:'git', imageSrc: ''},
                                {label:'React', imageSrc: ''},
                                {label:'CI/CD', imageSrc: ''},
                                {label:'Dynamics', imageSrc: ''}]}/>
                    </section>
                </section>
            </main>
        </div>
    )
};

export default Coursepage;
