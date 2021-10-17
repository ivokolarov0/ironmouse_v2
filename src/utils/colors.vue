<template>
  <div class="colors">
    <v-style v-for="(color, index) in colorVars" :key="index">
      :root { --{{ color.slug }}: {{ color.color }}
      }
    </v-style>
  </div>
  <!-- /.colors -->
</template>

<script>
export default {
  name: 'Colors',

  data: () => ({
    colors: [
      {
        title: 'Head',
        slug: 'head',
        arr: [
          {
            label: 'Face',
            color: '#f9f5f2',
            slug: 'face',
          },
        ],
      },
      {
        title: 'Eyes',
        slug: 'eyes',
        arr: [
          {
            label: 'Iris',
            color: '#f3b4fb',
            slug: 'iris',
          },
          {
            label: 'Iris-shadow',
            color: '#52397a',
            slug: 'iris-shadow',
          },
        ],
      },
      {
        title: 'Mouth',
        slug: 'mouth',
        arr: [
          {
            label: 'Tongue',
            slug: 'tongue',
            color: '#e19079',
          },
          {
            label: 'Tongue Shadow',
            slug: 'tongue-shadow',
            color: '#8f463f',
          },
        ],
      },
      {
        title: 'Blush',
        slug: 'blush',
        arr: [
          {
            label: 'Background',
            slug: 'background',
            color: '#e19079',
          },
          {
            label: 'Lines',
            slug: 'lines',
            color: '#815144',
          },
        ],
      },
    ],
  }),

  computed: {
    colorVars() {
      return this.colors.reduce((acc, { arr, slug }) => {
        const item = arr.map((color) => ({
          color: color.color,
          slug: `${slug}-${color.slug}`,
        }));
        acc = [...acc, ...item];
        return acc;
      }, []);
    },
  },
};
</script>
