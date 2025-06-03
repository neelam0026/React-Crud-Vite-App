import UserContext from "./UserStore";
import { useContext } from "react";

const UserTable = () => {
  const { list } = useContext(UserContext);
  console.log("data:in table::", list);

  return (
    <div className="flex justify-center flex-col mt-5">
      <table className="min-w-[500px] border border-gray-300 rounded-lg shadow-lg bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b">S.No</th>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Age</th>
            <th className="px-4 py-2 border-b">Action </th>
          </tr>
        </thead>
         <tbody>       
            {list?.map((item, i) => {
              return (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{i + 1}</td>
                  <td className="px-4 py-2 border-b">{item.name}</td>
                  <td className="px-4 py-2 border-b">{item.email}</td>
                  <td className="px-4 py-2 border-b">{item.age}</td>
                  <td className="px-4 py-2 border-b">
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline ml-2">Delete</button>
                  </td>
                </tr>
              );
            })}
                   
        </tbody> 
      </table>
    </div>
  );
};
export default UserTable;