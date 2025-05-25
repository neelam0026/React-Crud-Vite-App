const UserForm = () => {
  return (
    <div>
      <h1>User Form</h1>
      <form className="flex align-center justify-center"      
        onSubmit={(e) => {
          e.preventDefault();
        }}>

        <label>
          Name:
          <input type="text" name="name" id="name" required placeholder="Enter Your Name"
          className="block w-full rounded-md bg-white px-3 py-3 border border-gray-300"/>
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" placeholder="Enter your e-mail" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;