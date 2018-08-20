<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4 card">
                <h3>Create Customer</h3><hr/>
                <form>
                    <div class="form-group">
                        <input type="text" v-model="first_name" class="form-control" placeholder="First Name">
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="last_name" class="form-control" placeholder="Last Name">
                    </div>
                    <div class="form-group">
                        <input type="email" v-model="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <button @click.prevent="handleSave" class="btn btn-primary btn-sm">Save</button>
                        <button @click.prevent="handleBack" class="btn btn-primary btn-sm">Back</button>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            first_name: '',
            last_name: '',
            email: ''
        }
    },
    methods: {
        handleSave() {
            const payload = {
                first_name: this.first_name,
                last_name: this.last_name,
                full_name: `${this.first_name} ${this.last_name}`,
                email: this.email
            };
            const URL = `${baseUrl}/elastic-data`;
                axios.post(URL, payload)
                .then((response) => {
                   this.handleBack()
                })
                .catch((err) => {
                    console.log(err.response.data);
                })
            
        },
        handleBack() {
            return this.$router.push({
                        name: 'elastic'
                    });
        }
    }
}
</script>
<style>
    .card{
        background: light-gray;
        margin-top: 10px;
    }
</style>


