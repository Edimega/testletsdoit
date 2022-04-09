<template>
	<menuDasboardComponent />
	<div class="container mb-5">
		<div class="embed-container">
			<iframe id="myIframe" class="text-center"
			src="https://data.todoscomemos.com/public/dashboard/b6a01980-6fca-421e-9dbd-fcea62d0b82a" frameborder="0" scrolling="yes"></iframe>
		</div>
	</div>
</template>

<script>
	import menuDasboardComponent from './template/menuDasboardComponent.vue';
	export default {
		name: 'inicioComponent',
		components: {
			menuDasboardComponent
		},
		props: {
			msg: String
		},
		mounted() {
			/* consultar token en localStorage */
			if (localStorage.getItem('token') != null) {
				this.$router.push('/');
			} else {
				this.$router.push('/login');
			}
		}
	}
</script>

<style scoped>
	.embed-container {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
		overflow: hidden;
	}

	.embed-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>