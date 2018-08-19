<template>
	<div>
		<p>First Name: {{ singleUser.firstName }}</p>
		<p>Last Name: {{ singleUser.lastName }}</p>
		<p>Age: {{ singleUser.age }}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				singleUser: {}
			}
		},
		mounted() {
			const URL = `http://localhost:3000/user/${this.$route.params.userId}`;
				axios.get(URL)
					.then((res) => {
						this.singleUser = res.data;
					})
					.catch((err) => {
						console.log(err);
					})
		}
	}
</script>