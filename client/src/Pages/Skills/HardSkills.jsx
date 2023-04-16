import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


function HardSkills({ upSkill }) {
    const OPTIONS = ['FRONTEND', 'BACKEND', "BOTH"];
    const [xp, setXp] = useState(null);
    const [techStack, setTechStack] = useState('');

    const handleChange = event => {
        setXp(event.target.value);
    }

    const handleOpClick = event => {
        setTechStack(event.target.id);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const yearsOfExperience = Number(xp);
        upSkill({ yearsOfExperience, techStack });
    }

    return (
        <div>
            hard
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Xp</Form.Label>
                    <Form.Control type="number" min={0} onChange={handleChange} />
                </Form.Group>
                <h4>Stack:</h4>
                <div key={`radios`} className="mb-3">
                    {
                        OPTIONS.map(elem => <Form.Check 
                            key={elem}
                            type={'radio'}
                            name='techStack'
                            id={elem}
                            label={elem !== 'BOTH' ? elem[0] + elem.slice(1).toLowerCase() : 'Frontend & Backend'}
                            onClick={handleOpClick}
                        />)
                    }
                </div>
                <Button variant="primary" type='submit'>Next</Button>
            </Form>
        </div>
    );
}

export default HardSkills;