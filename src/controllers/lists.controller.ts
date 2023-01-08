import { Request, Response } from "express";
import { Op } from "sequelize";
import { rolesLists } from "../constants";
import { Brand, CompatibilityOfModel, ProductByList, VersionByProduct } from "../models";

export const getLists = async(req: Request, res: Response) => {
    try {
        const roles = rolesLists.find(roleList => roleList.name === req.role);
        
        const lists = await Brand.findAll({
            include: {
                model: ProductByList,
                attributes: ['name','quality',...roles?.lists!]
            }
        });

        return res.status(200).json(lists);
    } catch (error:any) {
        console.log(error);
        return res.status(500).json({ msg: 'Ha ocurrido un error, comuniquese con el administrador.' });
    }
}

interface ParamsList {
    name: string;
}

export const getListByProductName = async(req: Request<ParamsList>, res: Response) => {
    const { name } = req.params;
    try {
        const products = await ProductByList.findAll({
            attributes: {
                exclude: ['id_brand']
            },
            include: {
                model: Brand,
                attributes: {
                    exclude: ["color"],
                },
            },
            where: {
                [Op.or]: [
                    { "$brand.name$": { [Op.substring]: name } },
                    { name: { [Op.substring]: name } },
                ],
            }
        });
        return res.status(200).json(products);
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ msg: 'Ha ocurrido un error, comuniquese con el administrador.' });
    }
}

interface ParamsListDetail {
    id: number;
}

export const getListProductDetail = async(req: Request<ParamsListDetail>, res: Response) => {
    const { id } = req.params;
    try {
        const product = await ProductByList.findOne({
            attributes: ["id", "name"],
            include: [
                {
                    model: Brand,
                    attributes: {exclude: ['color']}
                },
                {
                    model: CompatibilityOfModel,
                    attributes: {exclude: ['id_product_by_list']}
                },
                {
                    model: VersionByProduct,
                    attributes: {exclude: ['id_product_by_list']}
                }
            ],
            where: { id }
        });
        return res.status(200).json(product);
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ msg: 'Ha ocurrido un error, comuniquese con el administrador.' });
    }
}