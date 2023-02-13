<script>
	let LinkCursor = 'default';
	$: Status = 'Profile select';
	let Procces = { Finished: false };
	let Network = { Online: false };
	let App = '';
	setTimeout(function () {
		Status = 'Waiting...';
		Procces = { Finished: true };
		LinkCursor = 'pointer';
		App = '/app';
	}, 3000);

	setInterval(function () {
		if (navigator.onLine) {
			Network = { Online: true };
		} else {
			Network = { Online: false };
		}
	}, 250);
</script>

<svelte:head>
	<title>Launcher - {Status}</title>
</svelte:head>
<a href={App} style="color:inherit; cursor:{LinkCursor};">
	<div class="main">
		{#if Network.Online}
			{#if Procces.Finished}
				<h1 style="font-size: 6em;" id="link">Click to continue</h1>
			{:else}
				<h1 style="font-size:6em;">Loading</h1>
			{/if}
		{:else}
			<h1 style="font-size: 6em;">Please connect to wifi</h1>
		{/if}
	</div>
</a>

<style>
	.main {
		height: 100vh;
		display: flex;
		align-items: center; /* Vertical center alignment */
		justify-content: center; /* Horizontal center alignment */
		background-size: cover;
		flex-direction: column;
		background: #141e30; /* fallback for old browsers */
		background: -webkit-linear-gradient(
			to right,
			#243b55,
			#141e30
		); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to right,
			#243b55,
			#141e30
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
	a:hover {
		opacity: 100%;
		filter: brightness(100%);
	}
</style>
