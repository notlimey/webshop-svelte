import type { ShopItemType } from 'src/types';
import { writable } from 'svelte/store';

export const products = writable<ShopItemType[]>([]);