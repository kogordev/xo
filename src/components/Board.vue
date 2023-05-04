<template>
	<div class="flex flex-col mt-4">
		<div class="flex" v-for="(row, x) in board" :key="x">
			<div
				:class="`sm:w-28 sm:h-28 min-h-[6rem] min-w-[6rem]  m-1
				${
					cell === player1.value.label
						? player1.value.labelColor
						: cell === player2.value.label
						? player2.value.labelColor
						: ''
				} 
				border flex items-center justify-center text-xl
				${
					!player1.value.active && !player2.value.active
						? ''
						: 'hover:bg-slate-300'
				} duration-150 cursor-pointer
				${
					player1.value.winAxes
						? (player1.value.winAxes[x][0] === x &&
								player1.value.winAxes[x][1] === y) ||
						  (player1.value.winAxes[y][0] === x &&
								player1.value.winAxes[y][1] === y)
							? 'bg-green-300'
							: 'bg-white'
						: ''
				}
				${
					player2.value.winAxes
						? (player2.value.winAxes[x][0] === x &&
								player2.value.winAxes[x][1] === y) ||
						  (player2.value.winAxes[y][0] === x &&
								player2.value.winAxes[y][1] === y)
							? 'bg-green-300'
							: 'bg-white'
						: ''
				}`"
				v-for="(cell, y) in row"
				:key="y"
				@click="$emit('draw', [x, y, (isToServer = true)])"
			>
				{{ cell }}
			</div>
		</div>
	</div>
</template>

<script setup>
import { toRefs } from 'vue';
const props = defineProps({
	board: {
		type: Array,
		default: [],
	},
	player1: {
		type: Object,
		default: () => {},
	},
	player2: {
		type: Object,
		default: () => {},
	},
});

const { board, player1, player2 } = toRefs(props);
</script>
