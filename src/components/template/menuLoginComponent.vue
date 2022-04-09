<template>
    <nav class="navbar navbar-light bg-light mb-5">
		<div class="container-fluid">
				<img src="../../assets/logo.webp" alt="" width="100" class="d-inline-block align-text-top navbar-brand" >
			<form class="d-flex">
				<router-link to="/login" class="btn btn-sm btn-outline-secondary rounded-pill fs-5">Login</router-link>
				<router-link to="/registro" class="btn btn-sm btn-outline-secondary ms-2 rounded-pill fs-5">Registro</router-link>
			</form>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'menuLoginComponent',
	}
</script>