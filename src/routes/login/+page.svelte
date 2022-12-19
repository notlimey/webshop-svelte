<script>
	import Btn from "$components/Btn.svelte";
	import { auth } from "$lib/firebase";
	import { user } from "$stores/authStore";
	import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
    }
    const logout = async () => {
        await auth.signOut()
    }
</script>

<div class="flex flex-col">
    {#if !$user}
        <Btn on:click={loginWithGoogle}>
            Login with google
        </Btn>
        {:else}
        <Btn on:click={logout}>
            Logout
        </Btn>
    {/if}
</div>