<template>
    <div class="row m-lg-5">
        <div>Color: {{obj.color}}</div>
        <div>Number: {{obj.number > 10 ? 'more 10' : 'less 10'}}</div>
        <div>is published: {{obj.isPublished ? 'Publised' : 'Not published'}}</div>
    </div>
</template>

<script>
export default {
    name: "SomeComponent",


    props: [
      'obj'
    ],

    data() {
        return {}
    },

    mounted() {
    },

    methods: {

    },


    computed: {}

}
</script>

<style scoped>

</style>
