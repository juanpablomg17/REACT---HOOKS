import React, { useState } from 'react';

import './App.css';

import UserTable from './Components/Crud/UserTable';



import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './Components/Crud/Form/AddUserForm';
import EditUserForm from './Components/Crud/Form/EditUserForm';

function App() {

  const userData = [
    { id: uuidv4(), name: 'Tania', username: 'tania00232' },
    { id: uuidv4(), name: 'pepe', username: 'pepe5701' },
    { id: uuidv4(), name: 'ben', username: 'ben45' }
  ]

  // state
  const [users, setUsers] = useState(userData);

  // Agregar usuarios

  const addUsers = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  // eliminar usuarios

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  // editar usuarios

  const [editing, setEditing] = useState(false);




  return (
		<div className='container'>
			<h1>CRUD App with Hooks</h1>
			<div className='flex-row'>
				<div className='flex-large'>
					{editing ? (
						<div>
							<h2>Edit user</h2>
							
						</div>
					) : (
						<div>
							<h2>Add user</h2>
							<AddUserForm addUser={addUsers} />
						</div>
					)}
				</div>
				<div className='flex-large'>
					<h2>View users</h2>
					<UserTable users={users} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	);
};



export default App;
