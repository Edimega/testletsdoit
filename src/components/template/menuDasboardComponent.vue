<template>
	<nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
		<div class="container-fluid">
			<router-link to="/" class="navbar-brand">
				<img src="../../assets/logo.webp" alt="logo" width="70">
			</router-link>
			<ul class="navbar-nav flex-nowrap ms-auto">
				<li class="nav-item dropdown d-sm-none no-arrow">
				</li>
				<div class="d-none d-sm-block topbar-divider"></div>
				<li class="nav-item dropdown no-arrow">
					<div class="nav-item dropdown no-arrow">
						<a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown">
							<span class="d-none d-lg-inline me-2 text-gray-600 small">{{ nombreUser }}</span>
							<img class="border rounded-circle img-profile" :src="avatraUser" width="50" height="50"/>
						</a>
						<div class="dropdown-menu shadow dropdown-menu-end animated--grow-in">
							<a class="dropdown-item" href="#"><i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>Perfil</a>
							<a class="dropdown-item" href="#">
								<i class="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>
								Settings
							</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" @click="cerrarSesion()">
								<i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
								Cerrar sesion
							</a>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'menuDasboardComponent',
		data() {
			return {
				nombreUser: localStorage.getItem('nombre'),
				avatraUser: localStorage.getItem('avatar')
			}
		},
		methods: {
			cerrarSesion() {
				localStorage.removeItem('token');
				localStorage.removeItem('nombre');
				localStorage.removeItem('avatar');
				this.$router.push('/login');
			}
		}
	}
</script>