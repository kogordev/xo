<template>
	<div>
		<button
			type="button"
			class="w-30 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			@click="$emit('ClearBoard')"
		>
			Clear Board
		</button>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
