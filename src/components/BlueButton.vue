<template>
	<div>
		<button
			type="button"
			class="w-[5.8] sm:w-[7.2rem] smobile:w-[5.8rem] text-[.45rem] sm:text-sm smobile:text-[.6rem] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mb-8 mx-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			@click="$emit('ClearBoard')"
		>
			Clear Board
		</button>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
