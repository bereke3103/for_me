<template>
    <div class="row m-lg-5">

        <table class="table ">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <tr :class="isEdit(person.id) ? 'd-none' : ''">
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td><a href="#" @click.prevent="changePersonId(person.id, person.name, person.age, person.job)"
                           class="btn btn-success"> Edit </a></td>
                    <td><a href="#" @click.prevent="deletePerson(person.id)"
                           class="btn btn-danger"> Delete </a></td>
                </tr>
                <tr :class="isEdit(person.id) ? '' : 'd-none'">
                    <th scope="row">{{ person.id }}</th>
                    <td><input type="text" class="form-control" v-model="name"></td>
                    <td><input type="number" class="form-control" v-model="age"></td>
                    <td><input type="text" class="form-control" v-model="job"></td>
                    <td><a href="#" @click.prevent="updatePerson(person.id)" class="btn btn-success"> Update </a></td>
                    <td><a href="#" @click.prevent="deletePerson(person.id)"
                           class="btn btn-danger"> Delete </a></td>
                </tr>
            </template>
            </tbody>
        </table>

    </div>
</template>

<script>

export default {
    name: "IndexComponent",

    data() {
        return {
            people: null,
            editPersonId: null,
            name: null,
            age: null,
            job: null,
        }
    },

    mounted() {
        this.getPeople();
    },

    methods: {
        getPeople() {
            axios.get('/api/people')
                .then(res => {
                    this.people = res.data
                })
        },

        updatePerson(id) {
            this.editPersonId = null,
                axios.patch(`/api/people/${id}`, {name: this.name, age: this.age, job: this.job})
                    .then(res => {
                        this.getPeople();
                    })
        },


        deletePerson(id) {
                axios.delete(`/api/people/${id}`)
                    .then(res => {
                        this.getPeople();
                    })
        },

        changePersonId(id, name, age, job) {
            this.editPersonId = id
            this.name = name
            this.age = age
            this.job = job
        },

        isEdit(id) {
            return this.editPersonId === id
        }
    },


    computed: {}
}
</script>

<style scoped>

</style>
