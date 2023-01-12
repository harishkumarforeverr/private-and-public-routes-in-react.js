import {
  getAllUsers,
  getUser,
  addUser,
  editUser,
  deleteUser,
} from "../../service/Api";

export const getAllUsersHandler = async () => {
  const res = await getAllUsers();
  console.log(res.data);
};

export const getUserHandler = async (id) => {
  const res = await getUser(id);
  console.log(res);
};
export const addUserHandler = async (obj) => {
  const res = await addUser(obj);
  console.log(res);
};
export const editUserHandler = async (id, user) => {
  const res = await editUser(id, user);
  console.log(res);
};
export const deleteUserHandler = async (id) => {
  const res = await deleteUser(id);
  console.log(res);
};