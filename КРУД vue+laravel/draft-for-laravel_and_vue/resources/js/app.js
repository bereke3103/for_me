import Vue from "vue";
import PostComponent from "./components/PostComponent";
require('./bootstrap');

const testing = new Vue ({
    el: '#testing',
    components: {
        PostComponent: PostComponent
    }
})
