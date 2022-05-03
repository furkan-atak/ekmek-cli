<template>
	<v-overlay fullscreen z-index="999999" :value="GET_LOADING">
		<v-progress-circular indeterminate size="64"></v-progress-circular>
	</v-overlay>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["GET_LOADING"])
	}
};
</script>