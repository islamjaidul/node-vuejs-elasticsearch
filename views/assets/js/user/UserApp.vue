<template>
	<div class="container">
		<h3>User Form: </h3><hr/>
		<div class="row">
			<div class="col-md-4 col-md-offset-2">
				<div class="form-group">
					<input type="text" name="firstName" class="form-control" v-model="form.firstName" placeholder="First Name">
				</div>	

				<div class="form-group">
					<input type="text" name="lastName" class="form-control" v-model="form.lastName" placeholder="Last Name">
				</div>	

				<div class="form-group">
					<input type="number" name="age" class="form-control" v-model="form.age" placeholder="Age">
				</div>	

				<div class="form-group">
					<button @click="handleSave()" class="btn btn-primary">Save</button>
				</div>
			</div>
		</div>

		<h3>User Info: </h3> 
		<h5 class="pull-right">Total - {{ users.length }}</h5><hr/>
		<table class="table table-striped">
			<thead>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Age Name</th>
				<th>Action</th>
			</thead>

			<tbody>
				<tr v-if="users.length" v-for="user in users">
					<td>{{ user.firstName }}</td>
					<td>{{ user.lastName }}</td>
					<td>{{ user.age }}</td>
					<td>
						<button @click="handleView(user._id)" class="btn btn-info btn-sm">View</button>
					</td>
				</tr>

				<tr v-if="!users.length">
					<td>Loading..</td>
					<td>Loading..</td>
					<td>Loading..</td>
					<td>Loading..</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import UserRepo from '../Repository/UserRepository';
	export default {
		data() {
			return {
				form: {},
				users: [],
				singleUser: {}
			}
		},
		computed: {
			userRepo() {
				return new UserRepo();
			}
		},
		methods: {
			handleSave() {
				const URL = 'http://localhost:3000/user';
				axios.post(URL, this.form)
					.then((res) => {
						console.log(res.data);
						this.getUsers();
					})
					.catch((err) => {
						console.log(err);
					})
			},
			handleDelete(id) {
				return this.userRepo.delete(id);
			},
			handleView(id) {
				return this.$router.push({
					name: 'user.single',
					params: {
						userId: id
					}
				})
			},
			getUsers() {
				const URL = 'http://localhost:3000/all-users';
				axios.get(URL)
					.then((res) => {
						this.users = res.data;
					})
			}
		},
		mounted() {
			this.getUsers();
		}
	}
</script>