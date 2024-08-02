import { Link } from 'react-router-dom';
import './Home.css';

import { useTranslation } from 'react-i18next';

function Home(){

    const { t } = useTranslation();

    return(
        <div className='page--container home'>

            <section className='home--infos'>

                <h1 className='home--title'>Jérémie Crinon</h1>
                
                <p className='home--text'>{t('home.text')}</p>

                <Link to='/portfolio' className='home--portfolio'>Portfolio</Link>

                <Link to='/contact' className='home--contact'>Contact</Link>

            </section>

            <section className='home--skills'>
                <section className='home--skills--front'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                </section>
                <section className='home--skills--back'>
                    <p>PHP</p>
                    <p>SQL</p>
                    <p>Laravel</p>
                    <p>Symfony</p>
                </section>
                <section className='home--skills--misc'>
                    <p>WordPress</p>
                    <p>Git</p>
                    <p>{t('home.poo')}</p>
                    <p>{t('home.mvc')}</p>
                </section>
            </section>
            
            
        </div>
    );

}

export default Home;
