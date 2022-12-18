<script lang="ts">
	import ShopItem from "$components/ShopItem.svelte";
	import { products } from "$stores/store";
	import type { ShopItemType } from "$myTypes";
    
    let prods: ShopItemType[] = [];

    products.subscribe((value) => {
        prods = value;
    });
</script>

<h2 class="mt-16 text-3xl font-bold">My webshop items</h2>
<div class="grid grid-cols-3 gap-x-8 gap-y-6 my-12">
    {#each prods as item}
        <ShopItem 
            item={item}
        />
    {/each}
</div>