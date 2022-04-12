<template>
	<menuLoginComponent />
	<div class="container">
		<div class="row">
			<div class="col-md-6 offset-md-3">
				<div class="card">
					<div class="card-header">
						<h3>Error 404</h3>
					</div>
					<div class="card-body">
						Esta pagina no esta disponible o no existe.
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import menuLoginComponent from './template/menuLoginComponent.vue';
	export default {
		name: 'error404Component',
		components: {
			menuLoginComponent
		},
		props: {
			msg: String
		}
	}
</script>

<style scoped>
</style>