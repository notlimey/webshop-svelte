<script lang="ts">
	import type { ShopItemType } from "src/types";


    export let item: ShopItemType;
</script>

<div id={"shopitem-" + item.id} class="w-full flex flex-col border border-transparent hover:bg-gray-50 transition-colors">
    <img src={item.image} alt="item" class="w-full h-48 object-contain">
    <div class="p-2">
        <p class="text-lg font-medium mb-1">{item.name}</p>
        <p class="mb-3">{item.description}</p>
        <p class="text-right">NOK {item.price},-</p>
        <button class="bg-black w-full py-1.5 px-3 text-white mt-3">Add to cart</button>
    </div>
</div>