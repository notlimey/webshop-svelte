
export type ShopItemType = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}

export type CartItemType = {
    item: ShopItemType;
    id: number;
    amount: number;
}

export type AccountSettings = {
    saveToBasket: boolean;
}