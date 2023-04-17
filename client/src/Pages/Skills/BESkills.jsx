import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';

function BESkills({ upSkill }) {
    const OPTIONS = ['NODE', 'DJANGO', 'SPRING', 'RAILS'];
    const [frameworks, setFrameworks] = useState([]);

    const handleChange = event => {
        const { checked, id: opt } = event.target;
        if (checked) {
            setFrameworks(prev => [...prev, opt]);
        } else {
            let aux = frameworks;
            const indexOf = frameworks.indexOf(opt);
            aux.splice(indexOf, 1);
            setFrameworks(aux);
        }
    }

    const handleClick = event => {
        upSkill({ frameworks });
    }
    return (
        <div>
            <div>
            {
                OPTIONS.map(elem => <Form.Check 
                    key={elem}
                    type={'checkbox'}
                    name='techStack'
                    id={elem}
                    label={elem !== 'BOTH' ? elem[0] + elem.slice(1).toLowerCase() : 'Frontend & Backend'}
                    onChange={handleChange}
                />)
            }
            <Button variant="primary" onClick={handleClick}>&#8594;</Button>
        </div>
        </div>
    );
}

export default BESkills;