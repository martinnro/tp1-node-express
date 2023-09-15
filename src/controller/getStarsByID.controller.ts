import { Request, Response } from "express"
import starsData from '../data/stars.json'

export async function getStarsByID (req: Request, res: Response) {
    const starId = parseInt(req.params.id) //transformo el string que viene de express en formato numero para poder compararlo
    const star = starsData.find((star) => star.id === starId)
    if(!star) {
        res.status(404).json({
            error: 'STAR_NOT_FOUND',
            message: `Star ${starId} not found in the database`
        })
    }
    res.status(200).json(star)
}