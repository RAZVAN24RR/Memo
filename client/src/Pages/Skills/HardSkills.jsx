import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Skills.css';

function HardSkills({ upSkill }) {
  const OPTIONS = ['FRONTEND', 'BACKEND', 'BOTH'];
  const [xp, setXp] = useState(null);
  const [techStack, setTechStack] = useState('');

  const handleChange = (event) => {
    setXp(event.target.value);
  };

  const handleOpClick = (event) => {
    setTechStack(event.target.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!techStack) {
      alert('select a tech stach!');
      return;
    }
    const yearsOfExperience = Number(xp);
    upSkill({ yearsOfExperience, techStack });
  };

  return (
    <div>
      hard
      <Form className="form_hard_skills" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 width_200" controlId="">
          <Form.Label>
            {' '}
            <h4 className="Profile-p">--Experience:</h4>{' '}
          </Form.Label>
          <Form.Control type="number" min={0} onChange={handleChange} />
        </Form.Group>
        <h4 className="Profile-p">--Stack:</h4>
        <div key={`radios`} className="mb-3">
          {OPTIONS.map((elem) => (
            <Form.Check
              key={elem}
              type={'radio'}
              name="techStack"
              className="form-radio"
              id={elem}
              label={
                elem !== 'BOTH'
                  ? elem[0] + elem.slice(1).toLowerCase()
                  : 'Frontend & Backend'
              }
              onClick={handleOpClick}
            />
          ))}
        </div>
        <Button variant="primary" id="btn-right" type="submit">
          &#8594;
        </Button>
      </Form>
    </div>
  );
}

export default HardSkills;
