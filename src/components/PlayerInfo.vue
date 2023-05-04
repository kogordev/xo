<template>
	<div
		:class="`relative border rounded ${playerObj.value.borderColor} sm:w-28 w-[5.5rem] flex justify-between items-center p-3 cursor-default mx-1`"
	>
		<Transition name="fade">
			<BlinkingStatus class="absolute top-0" v-if="playerObj.value.active" />
		</Transition>
		<span class="text-xl font-bold">{{ playerObj.value.label }}</span>
		<span class="text-gray-400">{{ playerObj.value.wins }}</span>
	</div>
</template>

<script setup>
import { toRefs, ref } from 'vue';
import BlinkingStatus from './BlinkingStatus.vue';

const props = defineProps({
	playerObj: { type: Object, default: () => {} },
});

const { playerObj } = toRefs(props);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
