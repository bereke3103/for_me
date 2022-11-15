<template>
<div>

    <CreateComponent></CreateComponent>
    <IndexComponent ref="index"></IndexComponent>

<!--    <table class="table">-->
<!--        <thead>-->
<!--        <tr>-->
<!--            <th scope="col">Name</th>-->
<!--            <th scope="col">Age</th>-->
<!--            <th scope="col">Sport</th>-->
<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--        <tr v-for="person in vzaimosvyaz">-->
<!--            <td>{{ person.name }}</td>-->
<!--            <td>{{ person.age }}</td>-->
<!--            <td>{{ person.sport }}</td>-->
<!--        </tr>-->

<!--        </tbody>-->
<!--    </table>-->


</div>
</template>

<script>
import IndexComponent from "./IndexComponent";
import SinglePostComponent from "./SomeComponent";
import CreateComponent from "./CreateComponent";

export default {
    name: "PostComponent",
    components: {
        CreateComponent,
        IndexComponent
    },

    // mounted() {
    //     this.getPosts()
    // },

    // methods: {
    //     getPosts() {
    //         axios.get('/post')
    //             .then(function (data) {
    //                 console.log(data.data)
    //             })
    //     }
    //
    //
    // },

}
</script>

<style scoped>

</style>
