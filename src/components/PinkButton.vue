<template>
	<div>
		<button
			type="button"
			class="w-[5.8] sm:w-[7.2rem] smobile:w-[5.8rem] text-[.45rem] sm:text-sm smobile:text-[.6rem] text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-2.5 mb-8 mx-1 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-800"
			@click="$emit('NewGame')"
		>
			New Game
		</button>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
