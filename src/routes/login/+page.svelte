<script>
	import Btn from "$components/Btn.svelte";
	import { auth } from "$lib/firebase";
	import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider)
        console.log(res)
    }
</script>

<div class="flex flex-col">
    <Btn on:click={loginWithGoogle}>
        Login with google
    </Btn>
</div>