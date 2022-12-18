import type { CartItemType } from "$myTypes";
import { writable } from "svelte/store";

const cart = writable<CartItemType[]>([]);

const addToCart = (id: number) => {
    cart.update((items) => {
        const item = items.find((item) => item.id === id);

        if (item) {
            item.amount += 1;
        } else {
            items.push({ id, amount: 1 });
        }

        return items;
    });
}

const removeFromCart = (id: number) => {
    cart.update((items) => items.filter((item) => item.id !== id));
}

const decrement = (id: number) => {
    cart.update((items) => {
        const item = items.find((item) => item.id === id);

        if (item && item.amount > 1) {
            item.amount -= 1;
        }

        return items;
    });
}

const increment = (id: number) => {
    cart.update((items) => {
        const item = items.find((item) => item.id === id);

        if (item) {
            item.amount += 1;
        }

        return items;
    });
}

const initCart = () => {
    const storage = window.localStorage;
    const _cart = storage.getItem('cart');
    cart.set(_cart ? JSON.parse(_cart) : []);

    cart.subscribe((items) => {
        storage.setItem('cart', JSON.stringify(items));
    });
}

export { addToCart, removeFromCart, decrement, increment, initCart };

export default cart;