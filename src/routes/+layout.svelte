<script lang="ts">
	import Container from "$components/Container.svelte";
	import Header from "$components/Header.svelte";
	import { products } from '$stores/store';
	import "../app.css";
	import type { LayoutData } from './$types';

    export let data: LayoutData;
    products.set(data.products);
</script>

<Header />
<Container>
    <slot />
</Container>