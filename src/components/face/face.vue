<template>
  <div class="face">
    <div class="face__inner">
      <mouth />
      <blush />
      <eyes />
    </div>
  </div>
</template>

<script>
import Blush from '../blush/blush.vue';
import Eyes from '../eyes/eyes.vue';
import mouth from '../mouth/mouth.vue';
export default {
  components: { mouth, Eyes, Blush },
  name: 'Face',
};
</script>
