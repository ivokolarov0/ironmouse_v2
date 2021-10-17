<template>
  <div class="head">
    <face />
    <horns />
    <hair />
  </div>
  <!-- /.head -->
</template>

<script>
import Face from '../face/face.vue';
import hair from '../hair/hair.vue';
import Horns from '../horns/horns.vue';
export default {
  components: { hair, Face, Horns },
  name: 'Head',
};
</script>
