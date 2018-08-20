<template>
    <div>
        <h3>Person Info</h3><hr/>
        <div class="container">
            <strong>Total: {{ persons.length }}</strong>
            <div class="row">
                <div class="col-md-7">
                     <table class="table table-bordered">
                        <thead>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr :key="index" v-for="(person, index) in persons">
                                <td>{{ person._source.first_name }}</td>
                                <td>{{ person._source.last_name }}</td>
                                <td>{{ person._source.email }}</td>
                                <td>
                                    <a @click.prevent="handleInfo(person._id)" href="#">Info</a>
                                    <a @click.prevent="handleDelete(person._id)" href="#">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-5">
                      <button @click="handleCreate" class="btn btn-primary btn-sm pull-right">Create</button>
                     <h3>Single Person: </h3>
                     <hr/>
                     <p v-if="loading">Loading...</p>
                     <ul v-if="!loading && singlePerson.hasOwnProperty('full_name')">
                        <li>{{ singlePerson.full_name }}</li>
                        <li>{{ singlePerson.email }}</li>
                     </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            persons: [],
            singlePerson: {

            },
            loading: false,
        }
    },
    methods: {
        handleCreate() {
            return this.$router.push({
                name: 'elastic.index'
            });
        },
        handleInfo(id) {
            const URL = `${baseUrl}/elastic-data/${id}`;
            this.loading = true;
            axios.get(URL)
                .then((res) => {
                    this.singlePerson = res.data.data[0]._source;
                    this.loading = false;
                })
                .catch((err) => {
                    this.loading = false;
                })
        },
        handleDelete(id) {
            const isConfirmed = confirm("Are you sure to delete ?");

            if (isConfirmed) {
                const URL = baseUrl + id;
                axios.delete(URL)
                    .then((res) => {
                        this.tableData();
                    })
                    .catch((err) => {
                        console.log(err.response.data);
                    })
            }
        },
        tableData() {
            setTimeout(() => {
                const URL = `${baseUrl}/elastic-data`;
                axios.get(URL)
                    .then((res) => {
                        this.persons = res.data.data
                    })
            }, 1000)
        }
    },
    mounted() {
        this.tableData()
    }
}
</script>

<style lang="scss">
    .pull-right {
        float: right !important;
    }
</style>

