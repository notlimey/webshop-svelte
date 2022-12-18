<script>
	import Container from "./Container.svelte";

</script>

<header class="h-20 px-5 bg-black text-white">
    <Container classes=" w-full h-full flex items-center justify-between">
        <h1 class="text-2xl">Webshop in svelte</h1>
        <div>
            <a href="/cart" class="mr-6 relative">Cart <span class="absolute -top-3">4</span></a>
            <a href="/login">Login</a>
        </div>
    </Container>
</header>