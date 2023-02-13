<script>
	import { streamer } from './../../stores/streamer.js';
	import { pfp } from './../../stores/pfp.js';
	import { user } from './../../stores/user.js';
	import { background } from './../+layout.js';
	import Nav from '$lib/Nav.svelte';
</script>

<Nav />
<div
	class="hero min-h-screen bg-base-200 wallpaper "
	style="background-image: url('{background}');"
>
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<div class="form-control">
					<label class="label">
						<span class="label-text">User name</span>
					</label>
					<input
						bind:value={$user}
						type="text"
						placeholder="email"
						class="input input-bordered"
					/>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Pfp (insert url)</span>
					</label>
					<input
						bind:value={$pfp}
						type="text"
						placeholder="password"
						class="input input-bordered"
					/>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text">insert streamer name</span>
					</label>
					<input
						bind:value={$streamer}
						type="text"
						placeholder="password"
						class="input input-bordered"
					/>
				</div>
				<!--<div class="form-control mt-6">
					<button class="btn btn-primary">Login</button>
				</div>-->
			</div>
		</div>
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
