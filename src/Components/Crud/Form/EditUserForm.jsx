import React from 'react';
import UserForm from './UserForm';

const EditUserForm = (props) => {
	const onSubmit = (data, e) => {
		data.id = props.currentUser.id;
		props.edit(props.currentUser.id, data);
		e.target.reset();
	};

	return <UserForm user={props.currentUser} onSubmit={onSubmit} />;
};

export default EditUserForm;