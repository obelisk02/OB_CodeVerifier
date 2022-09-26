import { Request, Response } from "express";
import IVideogame from '../models/interfaces/videogame';


const getAll = (req:Request, res:Response) => {
    res.status(200).json({ 
        message: `Get all videogames`
    })
}

const get = (req:Request, res:Response) => {
    const id = req.params.id;
    res.status(200).json({ 
        message: `Get one videogames with id ${id}`
    })
}

const create = (req:Request, res:Response) => {
    const {name, company, year} = req.body

    if (name ==='' || company === '' || !company || year <1800){
        res.status(400).json({
            message: 'Name, company or year cannot be empty'
        })
        return;
    }

    const videogame: IVideogame = {
        name,
        company,
        year
    }

    res.status(200).json({
        message: 'Created',
        data: videogame
    })
}

const update = (req:Request, res:Response) => {
    res.status(200).json({ 
        message: `Get one videogames with id ${id}`
    })
}