import db from "db/db";
import {
    deleteUser,
    editUser,
    findUser,
    findUserByName,
    findUsers,
    insertUser,
} from "./user.repository";

const createUser = async (name) => {
    const findUser = await findUserByName(name);
    if (findUser) {
        throw new Error("Name has to be unique");
    }
    const user = await insertUser(name);
    return user;
};

const getAllUsers = async () => {
    const users = await findUsers();
    return users;
};

const getUser = async (id) => {
    const user = await findUser(id);

    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

const deleteUserById = async (id) => {
    await getUser(id);
    await deleteUser(id);
};

const editUserById = async (id, name) => {
    await getUser(id);
    const user = await editUser(id, name);
    return user;
};
export { createUser, getAllUsers, deleteUserById, getUser, editUserById };
