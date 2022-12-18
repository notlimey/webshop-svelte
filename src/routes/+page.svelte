<script>
	import ShopItem from "$components/ShopItem.svelte";

</script>

<h2 class="mt-16 text-3xl font-bold">My webshop items</h2>
<div class="grid grid-cols-3 gap-x-8 gap-y-6 my-12">
    {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as item}
        <ShopItem 
            item={{
                id: item,
                name: "Item 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.",
                price: 100,
                image: "https://northstore.no/wp-content/uploads/2021/05/106-48_F.png"
            }}
        />
    {/each}
</div>