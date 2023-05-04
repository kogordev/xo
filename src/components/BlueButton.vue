<template>
	<div>
		<button
			type="button"
			class="w-[5.6rem] sm:w-[7.2rem] sm:text-sm smobile:text-[.57rem] text-[.45rem] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mb-8 mx-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			@click="$emit('ClearBoard')"
		>
			Clear Board
		</button>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
