import { Form } from 'react-bootstrap';

import './FormCheck.scss';

const FormControl = ({ label, error, groupClassName, ...props }) => {
	return (
		<Form.Group className={groupClassName}>
			<Form.Label>{label}</Form.Label>
			<Form.Check {...props} />
			<Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
		</Form.Group>
	);
};

export default FormControl;
