<template>
  <div class="eyes">
    <eye class="left" />
    <eye class="right" />
  </div>
</template>

<script>
import eye from '../eye/eye.vue';
export default {
  components: { eye },
  name: 'Eyes',
};
</script>
