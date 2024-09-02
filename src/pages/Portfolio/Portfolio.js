import './Portfolio.css';

import React, {useState, useEffect} from 'react';

import { requestWithoutBodyWithoutJWT } from '../../utils';
import config from '../../config.json';

import { useTranslation } from 'react-i18next';

function Portfolio({setError500}){

    const { t, i18n } = useTranslation();

    const [projects, setProjects] = useState(null);

    const getProjects = async () => {
        try{
            const response = await requestWithoutBodyWithoutJWT(config.apiUrl + '/api/projects');

            if(response == 401 || response == 403 || response == 404){
                setError500(true);
            }

            if(response == 500){
                setError500(true);
            }

            const data = await response.json();
        
            setProjects([...Object.values(data)])
        } catch{
            setError500(true);
        }
    }

    useEffect(() => {
        getProjects();
    }, []);

    return(
        <div className='page--container portfolio' id='portfolio'>

            {projects && projects.map((project, index) => (
                <div key={index} className='portfolio--project'>
                    <div className='portfolio--project--image--container'>
                        <img src={config.apiUrl + "/api/projects/image/" + project.image} className='portfolio--project--image' />
                    </div>
                    <h2 className='portfolio--project--name'>{i18n.language === "en" ? project.name : project.french_name}</h2>
                    <p className='portfolio--project--description'>{i18n.language === "en" ? project.description : project.french_description}</p>
                    {project.github_link !== null || project.project_link !== null ? (
                        <div className='portfolio--project--links'>
                            {project.github_link && <a href={project.github_link}>GitHub</a>}
                            {project.project_link && <a href={project.project_link}>{t('portfolio.project_link')}</a>}
                        </div>
                    ):null}
                    
                </div>
            ))}
            
        </div>
    );

}

export default Portfolio;
