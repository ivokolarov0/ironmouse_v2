<template>
  <div class="colors">
    <v-style>
      :root {
      {{ colorValues }}
      }
    </v-style>
  </div>
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
      {
        title: 'Hair',
        slug: 'hair',
        arr: [
          {
            label: 'Purple',
            slug: 'purple',
            color: '#81678d',
          },
        ],
      },
    ],
  }),

  computed: {
    colorValues() {
      return this.colors
        .reduce((acc, { arr, slug }) => {
          const item = arr.map(
            (color) => `--${slug}-${color.slug}: ${color.color}`
          );
          acc = [...acc, ...item];
          return acc;
        }, [])
        .join(';');
    },
  },
};
</script>
