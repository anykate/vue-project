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
				<div class="text-xl hover:text-weather-secondary duration-150 cursor-pointer" @click="toggleModal">
					<font-awesome-icon icon="fa-solid fa-circle-info" />
				</div>
				<div class="text-xl hover:text-weather-secondary duration-150 cursor-pointer">
					<font-awesome-icon icon="fa-solid fa-plus" />
				</div>
			</div>
			<BaseModal :modalActive="modalActive" @close-modal="toggleModal">
				<div class="text-black">
					<h1 class="text-2xl mb-1">About:</h1>
					<p class="mb-4">
						The Local Weather allows you to track the current and future weather of cities
						of your choosing.
					</p>
					<h2 class="text-2xl">How it works:</h2>
					<ol class="list-decimal list-inside mb-4">
						<li>Search for your city by entering the name into the search bar.</li>
						<li>
							Select a city within the results, this will take you to the current weather
							for your selection.
						</li>
						<li>
							Track the city by clicking on the "+" icon in the top right. This will save
							the city to view at a later time on the home page.
						</li>
					</ol>

					<h2 class="text-2xl">Removing a city</h2>
					<p>
						If you no longer wish to track a city, simply select the city within the home
						page. At the bottom of the page, there will be am option to delete the city.
					</p>
				</div>
			</BaseModal>
		</nav>
	</header>
</template>

<script setup>
import BaseModal from "@/components/BaseModal.vue";
import { ref } from "vue";

const modalActive = ref(null);
const toggleModal = () => {
	modalActive.value = !modalActive.value;
};
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
	transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
	opacity: 0;
}

.modal-inner-enter-active {
	transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
	transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
	opacity: 0;
	transform: scale(0.8);
}

.modal-inner-leave-to {
	transform: scale(0.8);
}
</style>
