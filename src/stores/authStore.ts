import { auth } from "$lib/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import { writable } from "svelte/store";

export const user = writable<User | null>(null);
export const loading = writable<boolean>(true);

const initAuth = () => onAuthStateChanged(auth, (u) => {
    user.set(u);
    loading.set(false);
});


export { initAuth };
