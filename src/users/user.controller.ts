import express from "express";
import type { Request, Response } from "express";
const router = express.Router();

import * as UserService from "./user.service";

// Create User
router.post("/", async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const user = await UserService.createUser(name);
        res.status(201).json({
            status: "success",
            message: "Data created successfully",
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message,
        });
    }
});

// Get All Users
router.get("/", async (req: Request, res: Response) => {
    const users = await UserService.getAllUsers();
    res.status(200).json({
        status: "success",
        data: users,
    });
});

// Delete User
router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await UserService.deleteUserById(parseInt(id));
        res.status(200).json({
            status: "success",
            message: "Data deleted successfully",
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message,
        });
    }
});

// Get User
router.get("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const user = await UserService.getUser(parseInt(id));

        res.status(200).json({
            status: "success",
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message,
        });
    }
});

// Edit User
router.put("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({
                status: "Error",
                message: "Some fields are missing",
            });
        }
        const user = await UserService.editUserById(parseInt(id), name);

        res.status(200).json({
            status: "success",
            message: "Data updated succesfully",
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message,
        });
    }
});

export default router;
