import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';

function SoftSkills({ upSkill }) {
    const COM_STYLES = ['ASSERTIVE', 'PASSIVE', 'AGGRESSIVE', 'COLLABORATIVE'];
    const [comStyle, setComStyle] = useState('');

    const handleComClick = event => {
        setComStyle(event.target.id);
    }

    const handleSubmit = event => {
        upSkill({ comStyle });
    }

    return (
        <div>
            soft
            {
                COM_STYLES.map(elem => <Form.Check 
                    key={elem}
                    type={'radio'}
                    name='techStack'
                    id={elem}
                    label={elem !== 'BOTH' ? elem[0] + elem.slice(1).toLowerCase() : 'Frontend & Backend'}
                    onClick={handleComClick}
                />)
            }
            <Button variant="primary" onClick={handleSubmit}>&#8594;</Button>
        </div>
    );
}

export default SoftSkills;