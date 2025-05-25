const UserTable = () => {   
    return (
        <div>
            <h1>User Table</h1>
            <table className="min-w-full border-collapse border border-gray-200 table-auto">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">1</td>
                        <td className="border border-gray-300 px-4 py-2">John Doe</td>
                        <td className="border border-gray-300 px-4 py-2">JohnDoe@gmail.com </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;
    