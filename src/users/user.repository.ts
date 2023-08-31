// Komunikasi dengan database

import db from "db/db";
import { User } from "./user.type";

const findUsers = async (): Promise<User[]> => {
    const users = await db.user.findMany();
    return users;
};

const findUser = async (id: number): Promise<User> => {
    const user = await db.user.findUnique({
        where: {
            id,
        },
    });
    return user;
};

const findUserByName = async (name: string): Promise<User> => {
    const user = await db.user.findFirst({
        where: {
            name,
        },
    });
    return user;
};

const insertUser = async (name: string): Promise<User> => {
    const user = await db.user.create({
        data: { name },
    });
    return user;
};

const deleteUser = async (id: number): Promise<void> => {
    await db.user.delete({
        where: {
            id,
        },
    });
};

const editUser = async (id: number, name: string): Promise<User> => {
    const user = await db.user.update({
        where: {
            id,
        },
        data: { name },
    });
    return user;
};

export {
    findUsers,
    findUser,
    findUserByName,
    insertUser,
    deleteUser,
    editUser,
};
