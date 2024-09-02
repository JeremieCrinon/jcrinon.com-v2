import './Contact.css';

import { useTranslation } from 'react-i18next';

function Contact(){

    const { t } = useTranslation();

    return(
        <div className='page--container contact' id='contact'>

            <p>{t('contact.text1')}<strong href=''>contact@jcrinon.com</strong>{t('contact.text2')}</p>
            
        </div>
    );

}

export default Contact;
