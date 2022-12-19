<script lang=ts>
	import { user, loading as loadingAuth } from "$stores/authStore";
	import cart from "$stores/cart";
	import Container from "./Container.svelte";

    let len = 0;
    cart.subscribe((value) => {
        len = value.length;
    });
</script>

<header class="h-20 px-5 bg-black text-white fixed top-0 left-0 w-full">
    <Container classes=" w-full h-full flex items-center justify-between">
        <h1 class="text-2xl">Webshop in svelte</h1>
        <div class="flex items-center">
            <a href="/cart" class="mr-10 relative">Cart {#if len > 0}
                <span class="absolute -top-3" id="cart-count">
                    {#if len > 9}
                        <p>+9</p>
                    {:else}
                        <p>{len}</p>
                    {/if}
                </span>
            {/if}</a>
            {#if $loadingAuth === false}
                {#if $user}
                <div class="flex items-center gap-x-2">
                    <p>{$user.displayName}</p>
                    <img class="w-8 h-8 rounded-full" src={$user.photoURL} alt={$user.displayName} />
                </div>
                {:else}
                    <a href="/login">Login</a>
                {/if}
            {:else}
                <p>Loading...</p>
            {/if}
        </div>
    </Container>
</header>