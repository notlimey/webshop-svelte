<svelte:element
	this="button"
	class={'bg-black text-white py-1.5 px-3 hover:bg-black/80 ' + $$restProps.class}
	{...$$restProps}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
><slot /></svelte:element>
