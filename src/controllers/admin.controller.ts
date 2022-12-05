import { Request, Response } from "express";
import { Op } from "sequelize";
import { User } from "../models";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ["password"] },
            where: {
                id: {
                    [Op.not]: req.id,
                },
            },
        });
        return res.status(200).json(users);
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
};

interface Body {
    id: number;
    role: string;
}

export const changeAccessToLists = async (req: Request<{},{},Body>,res: Response) => {
    const { id, role } = req.body;
    try {
        const userChange = await User.findOne({ where: { id } });

        if (!userChange) {
            return res.status(404).json({ msg: "No existe ningun usuario con ese id." });
        }

        userChange.access_to_lists
            ? userChange.update({ access_to_lists: false, role: "CLIENT" })
            : userChange.update({ access_to_lists: true, role});

        return res.status(200).json({ msg: "Estado del usuario actualizado" });
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
};