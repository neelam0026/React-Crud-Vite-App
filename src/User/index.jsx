import { useState } from 'react'; 
import UserForm from './UserForm';
import UserTable from './UserTable';
import UserContext from './UserStore';


const User = () => {
  const [userInfo, setUserInfo,] = useState({
    name: '',
    email: '',
    age: ''
  });

const onChangeHandler = (info) => {
  setUserInfo(info);
}

const [list, setList] = useState([]); // This will be used to store the list of users

const addHandler = () => {
   setList((prevList) => [userInfo, ...prevList]); // Add the new user to the list
   setUserInfo(()=>{
    return {
      name: '',
      email: '',
      age: ''
    };
   }); // Reset the form after adding
} // add data to the table

  return (
    <UserContext.Provider 
    value={{
      userInfo, 
      list,
      setList,
      onChangeHandler,
      addHandler
    }}>      
        <UserForm />
        <UserTable />      
    </UserContext.Provider>
  );
}

export default User;