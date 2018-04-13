<template>
  <div class="hello w3-pink">
    <h1>{{ msg }}</h1>

    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://github.com/vuejs/vue-cli/tree/dev/docs" target="_blank">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank">babel</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org/en/essentials/getting-started.html" target="_blank">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org/en/intro.html" target="_blank">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org/en" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

<div>
  <slick ref="slick" :options="slickOptions" style="height:100px">
    <img src="http://placehold.it/200x100" alt="" style="height:100px">
    <img src="http://placehold.it/200x100" alt="" style="height:100px">
    <img src="http://placehold.it/200x100" alt="" style="height:100px">
    <img src="http://placehold.it/200x100" alt="" style="height:100px">
    <img src="http://placehold.it/200x100" alt="" style="height:100px">
    <img src="http://placehold.it/200x100" alt="" style="height:100px">
    <img src="http://placehold.it/200x100" alt="" style="height:100px">
  </slick>
</div>


  </div>



</template>

<script>
import Slick from "vue-slick";
// import 'node_modules/slick-carousel/slick/slick.css';

export default {
  components: { Slick },
  name: "HelloWorld",
  props: {
    msg: String
  },

  data() {
    return {
      slickOptions: {
        slidesToShow: 5
        // Any other options that can be got from plugin documentation
      }
    };
  },

  // All slick methods can be used too, example here
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import 'node_modules/slick-carousel/slick/slick.css'; */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
