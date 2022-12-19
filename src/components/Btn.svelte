<script>
    $: classes = "bg-black text-white py-1.5 px-3 hover:bg-black/80";
</script>

<button class={classes} {...$$restProps}>
    <slot></slot>
</button>