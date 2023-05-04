<template>
	<div>
		<button
			type="button"
			:class="`w-30 text-white ${bg} ${hover} focus:ring-4 ${focus} font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ${dark} ${darkHover} focus:outline-none ${darkFocus}`"
			@click="$emit('do')"
		>
			{{ label }}
		</button>
	</div>
</template>

<script setup>
import { ref, toRefs } from 'vue';
const props = defineProps({
	label: { type: String, default: '' },
	color: { type: String, default: 'pink' },
});

const { label, color } = toRefs(props);
const styles = {
	bg: `bg-${color}-700`,
	hover: `hover:bg-${color}-800`,
	focus: `focus:ring-${color}-300`,
	dark: `dark:bg-${color}-600`,
	darkHover: `dark:hover:bg-${color}-700`,
	darkFocus: `dark:focus:ring-${color}-800`,
};

const { bg, hover, focus, dark, darkHover, darkFocus } = styles;
// const bg = ref(`bg-${color}-700`);
// const hover = ref(`hover:bg-${color}-800`);
// const focus = ref(`focus:ring-${color}-300`);
// const dark = ref(`dark:bg-${color}-600`);
// const darkHover = ref(`dark:hover:bg-${color}-700`);
// const darkFocus = ref(`dark:focus:ring-${color}-800`);
</script>
