import * as UserRepository from "./user.repository";
import { User } from "./user.type";

const createUser = async (name: string): Promise<User> => {
    const findUser = await UserRepository.findUserByName(name);
    if (findUser) {
        throw new Error("Name has to be unique");
    }
    const user = await UserRepository.insertUser(name);
    return user;
};

const getAllUsers = async (): Promise<User[]> => {
    const users = await UserRepository.findUsers();
    return users;
};

const getUser = async (id: number): Promise<User> => {
    const user = await UserRepository.findUser(id);

    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

const deleteUserById = async (id: number): Promise<void> => {
    await getUser(id);
    await UserRepository.deleteUser(id);
};

const editUserById = async (id: number, name: string): Promise<User> => {
    await getUser(id);
    const user = await UserRepository.editUser(id, name);
    return user;
};

export { createUser, getAllUsers, deleteUserById, getUser, editUserById };
