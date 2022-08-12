<template>
	<div class="flex flex-col min-h-screen font-roboto bg-weather-primary">
		<Navbar />
		<main>
			<router-view />
		</main>
	</div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<style lang="scss">
</style>