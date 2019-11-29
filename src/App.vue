<template>
  <div id="app" class="flex w-full h-full bg-gray-200">
    <router-view />
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: `${process.env.VUE_APP_NAME} - ${process.env.VUE_APP_DESCRIPTION}`,
    viewport:
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  },
};
</script>
