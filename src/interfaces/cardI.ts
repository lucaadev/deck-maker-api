export interface CardI {
    id: number;
    name: string;
    image?: string;
    description: string;
    rarity: string;
    life: number;
    attack: number;
    defense: number;
    price: number;
    cardSuper: boolean;
    deckId: number;
}