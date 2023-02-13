<script>
	import { streamer } from './../stores/streamer.js';
</script>

<iframe
	class="twitch  h-60 rounded-lg border-4 border-transparent hover:border-primary duration-150"
	src="https://player.twitch.tv/?channel={$streamer}&parent=localhost&muted=true"
/>

<style>
	.twitch {
	}
</style>
