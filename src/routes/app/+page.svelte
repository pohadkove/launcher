<script>
	import { background } from './../+layout.js';
	import Nav from '$lib/Nav.svelte';
	import Twitch from '$lib/Twitch.svelte';
	import Netflix from '$lib/shortcuts/Netflix.svelte';
	import Prime from '$lib/shortcuts/Prime.svelte';
	import Crunchyroll from '$lib/shortcuts/Crunchyroll.svelte';
	import Hulu from '$lib/shortcuts/Hulu.svelte';
</script>

<div class="wallpaper" style="background-image: url('{background}');">
	<Nav />
	<div class="flex flex-wrap gap-4 m-10">
		<div>
			<Twitch />
		</div>
		<Netflix />
		<Prime />
		<Crunchyroll />
		<Hulu />
	</div>
</div>

<style>
	.wallpaper {
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 100vh;
		width: 100vw;
	}
</style>
