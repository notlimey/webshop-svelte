import { auth, db } from "$lib/firebase";
import type { CartItemType, ShopItemType } from "$myTypes";
import type { User } from "firebase/auth";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { writable } from "svelte/store";
import { user as writableUser, loading } from "./authStore";
import { products } from "./store";

let user: null | User = null;
let userLoading = true;
let prods = [] as ShopItemType[];

loading.subscribe(l => userLoading = l)
writableUser.subscribe(u => user = u);
products.subscribe(p => prods = p);

const cart = writable<CartItemType[]>([]);

const addToCart = (item: ShopItemType) => {
    cart.update((items) => {
        const existing = items.find((x) => x.id === item.id);

        if (existing) {
            existing.amount += 1;
        } else {
            items.push({ id: item.id, amount: 1, item });
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

const initCart = async () => {
    // wait for user to be loaded
    if (userLoading) {
        setTimeout(initCart, 100);
        return;
    }
    let satItems = false;
    if (user) {
        const cartRef = doc(db, "cart", user.uid);
        const snapshot = await getDoc(cartRef);
        if (snapshot.exists()) {
            const data = snapshot.data();

            if (data && data.items) {
                const getMappedBack = data.items.map((item: { id: number, amount: number }) => ({
                    id: item.id,
                    amount: item.amount,
                    item: prods.find((p) => p.id === item.id)
                }));
                cart.set(getMappedBack);
                satItems = true;
            }
        }
    }
    const storage = window.localStorage;
    if (!satItems) {
        const _cart = storage.getItem('cart');
        cart.set(_cart ? JSON.parse(_cart) : []);
    }

    cart.subscribe(async (items) => {
        storage.setItem('cart', JSON.stringify(items));
        if (!user) return;
        const mappedItems = items.map((item) => ({
            id: item.id,
            amount: item.amount,
        }));
        await setDoc(doc(db, "cart", user.uid), {
            items: mappedItems,
            lastUpdated: Timestamp.now()
        });
    });
}

export { addToCart, removeFromCart, decrement, increment, initCart };

export default cart;