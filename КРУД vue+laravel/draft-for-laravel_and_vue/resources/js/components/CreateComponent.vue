<template>
    <div>

        <div class="row  w-25 m-lg-5">
            <div class="mb-3">
                <input type="text" class="form-control" v-model="name" id="name" placeholder="Имя">
            </div>
            <div class="mb-3">
                <input type="number" class="form-control" v-model="age" id="age" placeholder="Возраст">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" v-model="job" id="job" placeholder="Работа">
            </div>
            <div class="mb-3">
                <input @click.prevent="addPerson" class="btn btn-primary" value="Добавить">
            </div>
        </div>

        <SomeComponent :obj="obj"></SomeComponent>

    </div>
</template>

<script>
import SomeComponent from "./SomeComponent";

export default {
    name: "CreateComponent",

    components: {
        SomeComponent,
    },

    data() {
        return {
            name: null,
            age: null,
            job: null,
            obj: {
                color: 'Yellow',
                number: 50,
                isPublished: false,
            }
        }

    },

    mounted() {
        this.addPerson()
    },

    methods: {
        addPerson() {
            axios.post('/api/people', {name: this.name, age: this.age, job: this.job})
                .then(res => {
                    console.log(res)
                    this.name = null;
                    this.age = null;
                    this.job = null;
                    this.$parent.$refs.index.getPeople()
                })
        }
    },


    computed: {}
}
</script>

<style scoped>

</style>
