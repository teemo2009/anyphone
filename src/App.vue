<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		mounted() {
		
		}
	}
</script>

<style>
	html {
		height: 100%;
	}
	
	body {
		margin: 0;
		padding: 0;
		height: 100%;
	}
	
	#app {
		position: relative;
		height: 100%;
	}
	
	ul,
	li {
		list-style: none;
	}
	
	
</style>