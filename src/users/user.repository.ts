// Komunikasi dengan database

import db from "db/db";

const findUsers = async () => {
    const users = await db.user.findMany();
    return users;
};

const findUser = async (id) => {
    const user = await db.user.findUnique({
        where: {
            id: parseInt(id),
        },
    });
    return user;
};

const findUserByName = async (name) => {
    const user = await db.user.findFirst({
        where: {
            name,
        },
    });
    return user;
};

const insertUser = async (name) => {
    const user = await db.user.create({
        data: { name },
    });
};

const deleteUser = async (id) => {
    const user = await db.user.delete({
        where: {
            id,
        },
    });
};

const editUser = async (id, name) => {
    const user = await db.user.update({
        where: {
            id,
        },
        data: { name },
    });
};

export {
    findUsers,
    findUser,
    findUserByName,
    insertUser,
    deleteUser,
    editUser,
};
