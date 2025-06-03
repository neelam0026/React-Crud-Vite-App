import { useContext } from "react";
import UserContext from "./UserStore";

const UserForm = () => {
  const {userInfo, onChangeHandler, addHandler} = useContext(UserContext);
  // console.log("data:in form::", userInfo);

  const onChange= (e) => {
    const fresherUserInfo = {
      ...userInfo,
       [e.target.name]: e.target.value,
    };
    onChangeHandler(fresherUserInfo);
  }
  
  return (
    <div className="flex min-h-full flex-6 flex-col justify-center px-6 py-10 lg:px-8">
      <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        </div>      
       
        <form className=" mt-10"
        onSubmit={(e) =>  {
              e.preventDefault() ;// Prevent to refresh the page after submit
              addHandler(); // Call the addHandler to add data to the table
              console.log("data:in form::", userInfo);
        }}
        > 
          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={userInfo.name}
                onChange={onChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900" >
              Email Address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={userInfo.email}
                onChange={onChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="age"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Age
              </label>
            </div>
            <div className="mt-2">
              <input
                id="age"
                name="age"
                type="number"
                placeholder="Enter your age"
                value={userInfo.age}
                onChange={onChange}
                required
                className="block w-full rounded-md bg-white px-3 my-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
               <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;