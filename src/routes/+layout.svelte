<script lang="ts">
	import Container from "$components/Container.svelte";
	import Header from "$components/Header.svelte";
	import { auth } from "$lib/firebase";
	import { initCart } from "$stores/cart";
	import { products } from '$stores/store';
	import { onAuthStateChanged } from "firebase/auth";
	import { onMount } from "svelte";
	import "../app.css";
	import type { LayoutData } from './$types';
    import { loading, user } from '$stores/authStore';

    export let data: LayoutData;
    products.set(data.products);

    onMount(() => {
        initCart();
    });
    onAuthStateChanged(auth, (u) => {
        loading.set(false);
        user.set(u);
    })
</script>

<Header />
<Container classes="mt-24">
    <slot />
</Container>