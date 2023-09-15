import { Request, Response } from 'express';
import starsData from '../data/stars.json'


export async function getStarsController (req: Request, res: Response) {
    const type = req.query.type as string
    let stars = starsData
    if(type){
        stars = starsData.filter((star) => star.type.includes(type))
    }
    res.status(200).json(stars)
}