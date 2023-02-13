<script>
	import { pfp } from './../stores/pfp.js';
	import { user } from './../stores/user.js';
	function close() {
		window.top.close();
		return false;
	}
</script>

<div class="navbar bg-base-100 bg-opacity-10">
	<div class="flex-1">
		<div class="dropdown no-drag">
			<label tabindex="0" class="">
				<button class="btn btn-circle ">
					<img class="rounded-full" src={$pfp} />
				</button>
			</label>
			<ul tabindex="0" class="dropdown-content bg-base-100 menu p-2 shadow  rounded-box w-52">
				<li>
					<a href="/app">
						<i class="bi bi-house" />
						Home
					</a>
				</li>
				<li>
					<a href="/settings">
						<i class="bi bi-gear" />
						Setttings
					</a>
				</li>
			</ul>
		</div>
		&nbsp;
		<a class="btn btn-ghost normal-case text-xl text-white">{$user}</a>
	</div>
	<div class="flex-none ">
		<button on:click={close} class="text-white btn btn-square btn-ghost no-drag">
			<i class="bi bi-x-lg" />
		</button>
	</div>
</div>

<style>
	.navbar {
		-webkit-app-region: drag;
	}
	.no-drag {
		-webkit-app-region: none;
	}
</style>
