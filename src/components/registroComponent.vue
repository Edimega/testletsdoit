<template>
	<menuLoginComponent />
	<div class="container mb-5">
		<div class="row">
			<div class="col-md-6 offset-md-3">
				<div class="card">
					<div class="card-header">
						<h3>Crear cuenta</h3>
					</div>
					<div class="card-body">
						<form class="row">
							<div class="mb-3">
								<label for="regnombre" class="form-label ms-3">Nombre</label>
								<input type="text" class="form-control rounded-pill" id="regnombre" required
									v-model="dataRegistro.first_name">
								<!-- <div class="alert alert-danger">{{ $message }}</div> -->
							</div>
							<div class="mb-3">
								<label for="regapellido" class="form-label ms-3">Apellido</label>
								<input type="text" class="form-control rounded-pill" id="regapellido" required
									v-model="dataRegistro.last_name">
								<!-- <div class="alert alert-danger">{{ $message }}</div> -->
							</div>
							<div class="mb-3">
								<label for="regemail" class="form-label ms-3">Email</label>
								<input type="email" class="form-control rounded-pill" id="regemail" required
									v-model="dataRegistro.email">
								<!-- <div class="alert alert-danger">{{ $message }}</div> -->
							</div>
							<div class="mb-3">
								<label for="regtelefono" class="form-label ms-3">Teléfono</label>
								<input type="tel" class="form-control rounded-pill" id="regtelefono" required
									v-model="dataRegistro.cellphone">
								<!-- <div class="alert alert-danger">{{ $message }}</div> -->
							</div>
							<div class="mb-3">
								<label for="regpassword" class="form-label ms-3">Password</label>
								<input type="password" class="form-control rounded-pill" id="regpassword" required
									v-model="dataRegistro.password">
								<!-- <div class="alert alert-danger">{{ $message }}</div> -->
							</div>
							<div class="mb-3">
								<label for="regpasswordcon" class="form-label ms-3">Confirmar password</label>
								<input type="password" class="form-control rounded-pill" id="regpasswordcon" required
									v-model="passwordcon">
								<!-- <div class="alert alert-danger">{{ $message }}</div> -->
							</div>
							<div class="mb-3">
								<!-- <input type="checkbox" class="form-check-input ms-3" id="checkter">
								<label class="form-check-label" for="checkter">Terminos y condiciones</label> -->
								<div v-if="alert" class="alert alert-danger mt-3 rounded-pill text-center">{{ message }}
								</div>
							</div>
							<button class="btn btn-primary rounded-pill fs-5" @click="registrar">Registrarme</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import menuLoginComponent from './template/menuLoginComponent.vue';
	import axios from 'axios';

	export default {
		name: 'registroComponent',
		components: {
			menuLoginComponent
		},
		props: {
			msg: String
		},
		data() {
			return {
				dataRegistro: {
					first_name: '',
					last_name: '',
					email: '',
					cellphone: '',
					password: '',
				},
				passwordcon: '',
				alert: false,
				message: ''
			}
		},
		methods: {
			registrar() {
				event.preventDefault();
				if (this.dataRegistro.first_name == '' || this.dataRegistro.last_name == '' || this.dataRegistro.email == '' || this.dataRegistro.cellphone == '' || this.dataRegistro.password == '' || this.passwordcon == '') {
					this.message = 'Por favor llene todos los campos';
					this.alert = true;
				} else {
					let conf = {
						header: {
							'Content-Type': 'application/json'
						},
					}
					if (this.dataRegistro.password == this.passwordcon) {
						axios.post('https://apistaging.todoscomemos.com/signup', this.dataRegistro, conf)
							.then(response => {
								if (response.status == 201) {
									this.$router.push('/login');
								}else {
									this.message = response.data.message;
									this.alert = true;
								}
							})
							.catch(error => {
									this.message = 'Este correo ya esta registrado';
									this.alert = true;
									console.log(error);
							});
					} else {
						this.message = 'Las contraseñas no coinciden';
						this.alert = true;
					}
				}
			}
		},
		mounted() {
			if (localStorage.getItem('token') != null) {
				this.$router.push('/');
			} else {
				this.$router.push('/login');
			}
		}
	}
</script>

<style scoped>
</style>