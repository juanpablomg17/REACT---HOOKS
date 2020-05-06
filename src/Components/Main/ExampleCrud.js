import React,{Fragment,useState} from 'react'






import UserTable from '../Crud/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from '../Crud/Form/AddUserForm';
import EditUserForm from '../Crud/Form/EditUserForm';


 function Main() {

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
  
    const [currentUser,setcurrentUser] = useState({
      id: null, name: '', username: ''
    })
  
    // const editRow = (user) => {
    //   setEditing(true);
    //   setcurrentUser({
    //     id: user.id, name: user.name, username: user.username
    //   })
    // }
  
    const editUser = (user) => {
          setEditing(true);
          setcurrentUser(user);
      };
  
    const updateUser = (id, editUser) => {
          setEditing(false);
          setUsers(users.map((user) => (user.id === id ? editUser : user)));
      };

      return (
		<div className='container'>
			<h1>CRUD App with Hooks</h1>
			<div className='flex-row'>
				<div className='flex-large'>
					{editing ? (
						<div>
							<h2>Edit user</h2>
              <EditUserForm currentUser={currentUser} edit={updateUser}/>
							
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
          <UserTable users={users} deleteUser={deleteUser}
           editUser ={editUser}/>
				</div>
			</div>
		</div>
	);
    }  

export default Main;