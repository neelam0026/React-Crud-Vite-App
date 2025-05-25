import React from 'react'

// import UserContext from './userStore'; // review
import UserTable from './UserTable';
import UserForm from './UserFrom';

const User = () => {

  return ( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
        <UserForm />
        <UserTable />
      </div>
  )

  // return (
    
  //   <UserContext.Provider 
  //     value={{
  //       name: 'neelam',
  //       }}
  //       >
  //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
  //       <UserForm />
  //       <UserTable />
  //     </div>
  //     </UserContext.Provider>
  // );
};

export default User;
