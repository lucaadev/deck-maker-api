import { Request, Response } from 'express';
import CardService from '../services/card';

class CardController {
    static createCard = async (request: Request, response: Response) => {
        try {
            const data = request.body;

            const created = await CardService.createCardS(data);
            
            return response.status(201).json(created);
        } catch (error: any) {
            const { status, message } = error;
            return response.status(status).json(message);
        }
    }

    static getCards = async (_request: Request, response: Response) => {
        try {
            const cards = await CardService.getCardsS();
            return response.status(200).json(cards);
        } catch (error: any) {
            const { status, message } = error;
            return response.status(status).json(message);
        }
    }

    static deleteCard = async (request: Request, response: Response) => {
        const { id } = request.params;
        try {
            const deleted = await CardService.deleteCardS(id);
            return response.status(200).json(deleted);
        } catch (error: any) {
            const { status, message } = error;
            return response.status(status).json(message);
        }
    }
};

export default CardController;