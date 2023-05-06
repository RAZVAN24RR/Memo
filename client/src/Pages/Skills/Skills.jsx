import React, { useEffect, useState } from 'react';
import HardSkills from './HardSkills';
import FESkills from './FESkills';
import BESkills from './BESkills';
import SoftSkills from './SoftSkills';
import { useNavigate } from 'react-router';
import { axiosAuthInstanceToAPI } from '../../Utils/networking.util';
import Button from 'react-bootstrap/esm/Button';

import './Skills.css';

function Skills() {
  let [index, setIndex] = useState(0);
  let [skills, setSkills] = useState({});
  const navigate = useNavigate();

  const upSkill = (partSkill) => {
    setSkills((prevSkill) => {
      if ('frameworks' in prevSkill && 'frameworks' in partSkill) {
        prevSkill.frameworks = [
          ...prevSkill.frameworks,
          ...partSkill.frameworks,
        ];
        delete partSkill['frameworks'];
      }

      return { ...prevSkill, ...partSkill };
    });
    if ('techStack' in partSkill) {
      const addFE =
        partSkill.techStack === 'FRONTEND' || partSkill.techStack === 'BOTH';
      const addBE =
        partSkill.techStack === 'BACKEND' || partSkill.techStack === 'BOTH';
      if (addFE) {
        setForms((prev) => [...prev, <FESkills upSkill={upSkill} />]);
      }
      if (addBE) {
        setForms((prev) => [...prev, <BESkills upSkill={upSkill} />]);
      }
      setForms((prev) => [...prev, <SoftSkills upSkill={upSkill} />]);
    }

    setIndex((prev) => prev + 1);
  };
  let [forms, setForms] = useState([<HardSkills upSkill={upSkill} />]);

  useEffect(() => {
    if (index === forms.length) {
      /*
            for (let skill in skills) {
                //console.log(skills[skill]);
                if (skill === undefined || skills[skill]?.length === 0 || skills[skill] === '') {
                    delete skills[skill];
                }
            }//*/
      //request
      //console.log(skills);

      axiosAuthInstanceToAPI.patch('/users/', skills).then(
        (res) => {
          navigate('/profile/me');
        },
        (err) => {
          console.error(err);
          alert('ERROR!');
        }
      ); //*/
    }
  }, [forms.length, index, navigate, skills]);

  return (
    <div className="Skills-Container">
      <h1 className="Title-Skills">SKILLS</h1>
      {forms[index]}
      <div classname="btn-left">
        <Button
          id="btn-left"
          variant="primary"
          onClick={() =>
            setIndex((prev) => {
              return prev - 1;
            })
          }
          // className={index === 0 ? 'invisible' : 'visible'}
        >
          &#8592;
        </Button>
      </div>
    </div>
  );
}

export default Skills;
