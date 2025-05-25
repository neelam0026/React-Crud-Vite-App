const userStore = {
  users: [],
  addUser(user) {
    this.users.push(user);
  },
  removeUser(userId) {
    this.users = this.users.filter(user => user.id !== userId);
  },
  getUsers() {
    return this.users;
  },
};

export default userStore;