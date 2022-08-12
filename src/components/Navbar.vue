<template>
	<header class="sticky top-0 bg-weather-primary shadow-lg">
		<nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6 justify-between">
			<RouterLink :to="{ name: 'HomeView' }">
				<div class="flex items-center gap-3 text-2xl">
					<font-awesome-icon icon="fa-solid fa-sun" />
					<p>The Local Weather</p>
				</div>
			</RouterLink>
			<div class="flex gap-3">
				<div class="text-xl hover:text-weather-secondary duration-150 cursor-pointer">
					<font-awesome-icon icon="fa-solid fa-circle-info" />
				</div>
				<div class="text-xl hover:text-weather-secondary duration-150 cursor-pointer">
					<font-awesome-icon icon="fa-solid fa-plus" />
				</div>
			</div>
		</nav>
	</header>
</template>

<style scoped>
</style>