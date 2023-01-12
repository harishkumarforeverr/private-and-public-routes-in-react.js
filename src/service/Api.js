import axios from "axios";
// import { BASEURL } from '../utils/constant';
const BASEURL = "";

const url = BASEURL + "/user";

export const getAllUsers = async (id) => {
  return await axios.get(`${url}`);
};
export const getUser = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const addUser = async (user) => {
  return await axios.post(url, user);
};

export const editUser = async (id, user) => {
  return await axios.put(`${url}/${id}`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
