<script lang="ts">
	import { addToCart } from "$stores/cart";
	import type { ShopItemType } from "src/types";
    import { fade, fly } from 'svelte/transition';

    export let item: ShopItemType;
    export let index: number;

    const handleAddToCart = (e: MouseEvent) => {
        addToCart(item);
        handleAnimateFlyingUp(e);
    }

    const handleAnimateFlyingUp = (e: MouseEvent) => {
        const elem = document.createElement("img");
        elem.src = item.image;
        elem.classList.add("flying-up-img");
        elem.style.left = `${e.x}px`;
        elem.style.top = `${e.y}px`;

        const flyTo = document.getElementById("cart-count");
        if(!flyTo) return;
        document.body.appendChild(elem);
        const flyToRect = flyTo.getBoundingClientRect();
        const flyToX = flyToRect.x + flyToRect.width / 2;
        const flyToY = flyToRect.y + flyToRect.height / 2;

        const xDiff = flyToX - e.x;
        const yDiff = flyToY - e.y;

        const angle = Math.atan2(yDiff, xDiff);

        const xSpeed = Math.cos(angle) * 10;

        const ySpeed = Math.sin(angle) * 10;

        let y = e.y;
        let x = e.x;

        const interval = setInterval(() => {
            x += xSpeed;
            y += ySpeed;

            elem.style.left = `${x}px`;
            elem.style.top = `${y}px`;

            if ((x > flyToX && y > flyToY) || y > window.innerHeight || x > window.innerWidth || x < 0 || y < 40) {
                clearInterval(interval);
                document.body.removeChild(elem);
            }
        }, 6);
    }
</script>

<div id={"shopitem-" + item.id} class="w-full flex flex-col border border-transparent hover:bg-gray-50 transition-colors"  in:fly="{{ y: 200, duration: 400 + (index * 50) }}" out:fade="{{duration: 200}}">
    <img src={item.image} alt="item" class="w-full h-48 object-contain">
    <div class="p-2">
        <p class="text-lg font-medium mb-1">{item.name}</p>
        <p class="mb-3">{item.description}</p>
        <p class="text-right">NOK {item.price},-</p>
        <button class="bg-black w-full py-1.5 px-3 text-white mt-3 hover:bg-black/80" on:click={handleAddToCart}>Add to cart</button>
    </div>
</div>