<script lang="ts">
	import ShopItem from "$components/ShopItem.svelte";
	import { products } from "$stores/store";
	import type { ShopItemType } from "$myTypes";
	import { onMount } from "svelte";
    
    let prods: ShopItemType[] = [];
    let show = false;

    onMount(() => show = true);

    products.subscribe((value) => {
        prods = value;
    });
</script>

<h2 class="mt-16 text-3xl font-bold">My webshop items</h2>
{#if show}
    <div class="grid grid-cols-3 gap-x-8 gap-y-6 my-12">
        {#each prods as item, i}
            <ShopItem 
                index={i}
                item={item}
            />
        {/each}
    </div>
{/if}