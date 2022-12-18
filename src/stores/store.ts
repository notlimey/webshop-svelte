import type { ShopItemType } from 'src/types';
import { writable } from 'svelte/store';
import cart from './cart';

export const products = writable<ShopItemType[]>([]);
export { cart };