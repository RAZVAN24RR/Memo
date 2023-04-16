import React, { useEffect, useState } from 'react';
import HardSkills from './HardSkills';
import FESkills from './FESkills';
import BESkills from './BESkills';
import SoftSkills from './SoftSkills';
import { useNavigate } from 'react-router';

function Skills() {
    let [index, setIndex] = useState(0);
    let [skills, setSkills] = useState({});
    const navigate = useNavigate();

    const upSkill = partSkill => {
        setSkills(prevSkill => {
            if ('frameworks' in prevSkill && 'frameworks' in partSkill) {
                prevSkill.frameworks = [
                    ...prevSkill.frameworks,
                    ...partSkill.frameworks
                ];
                delete partSkill['frameworks'];
            }

            return { ...prevSkill, ...partSkill };
        })
        if ('techStack' in partSkill) {
            const addFE = partSkill.techStack === 'FRONTEND' || partSkill.techStack === 'BOTH'
            const addBE = partSkill.techStack === 'BACKEND' || partSkill.techStack === 'BOTH'
            if (addFE) {
                setForms(prev => [...prev, <FESkills upSkill={upSkill}/>])
            }
            if (addBE) {
                setForms(prev => [...prev, <BESkills upSkill={upSkill}/>])
            }
            setForms(prev => [...prev, <SoftSkills upSkill={upSkill}/>])
        }
        
        setIndex(prev => prev + 1);
    }
    let [forms, setForms] = useState([
        <HardSkills upSkill={upSkill}/>
    ]);


    useEffect(() => {
        if (index === forms.length) {
            //request
            console.log(skills);
            //navigate('/profile/me');
        }
    }, [forms.length, index, navigate, skills])

    return (
        <div>
            <p>SKILL page</p>
            {forms[index]}
        </div>
    );
}

export default Skills;