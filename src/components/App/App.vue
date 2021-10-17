<template>
  <div id="ironmouse">
    <colors />
    <Head />
  </div>
</template>

<script>
import Colors from '../../utils/colors.vue';
import Head from '../head/head';
export default {
  name: 'App',

  components: {
    Head,
    Colors,
  },
};
</script>
