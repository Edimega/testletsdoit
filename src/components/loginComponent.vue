<template>
	<menuLoginComponent />
	<div class="container mb-5">
		<div class="row">
			<div class="col-md-6 offset-md-3">
				<div class="card">
					<div class="card-header">
						<h3>Login</h3>
					</div>
					<div class="card-body">
						<form class="row">
							<div class="mb-3">
								<label for="logemail" class="form-label ms-3">Email</label>
								<input type="email" class="form-control rounded-pill" id="logemail" required
									v-model="contacto.email">
							</div>
							<div class="mb-3">
								<label for="logpassword" class="form-label ms-3">Password</label>
								<input type="password" class="form-control rounded-pill" id="logpassword" required v-model="contacto.password">
								<div v-if="alert" class="alert alert-danger mt-3 rounded-pill text-center">{{ message }}</div>
							</div>
							<button class="btn btn-primary rounded-pill fs-5" @click="submit" >Entrar</button>
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
		name: 'loginComponent',
		data() {
			return {
				contacto: {
					email: '',
					password: ''
				},
				message: '',
				alert: false
			}
		},
		components: {
			menuLoginComponent
		},
		props: {
			msg: String
		},
		methods: {
			submit() {
				event.preventDefault();
				if (this.contacto.email == '' || this.contacto.password == '') {
					this.message = 'Por favor llene todos los campos';
					this.alert = true;
				} else {
					let conf = {
						header: {
							'Content-Type': 'application/json'
						},
					}
					axios.post('https://apistaging.todoscomemos.com/auth/login.json', this.contacto, conf)
						.then(response => {
							if (response.status == 200) {
								localStorage.setItem('token', response.data.user.auth_token);
								localStorage.setItem('nombre', response.data.user.first_name + " " + response.data.user.last_name);
								localStorage.setItem('avatar', response.data.user.profile_picture.url);
								this.$router.push('/');
							} else {
								this.message = response.data.message;
								this.alert = true;
							}
						})
						.catch(error => {
							if (error.response.status == 401) {
								this.message = 'Usuario o contraseña incorrectos';
								this.alert = true;
							}
						})
				}
			}
		}
	}
</script>

<style scoped>
</style>