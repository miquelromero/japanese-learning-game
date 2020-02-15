<template>
  <div class="flex flex-col flex-grow h-full">
    <transition name="transition-slide-down" mode="out-in">
      <nav
        v-if="showNavbar"
        class="flex fixed w-full bg-primary-500 justify-center shadow-md p-4 h-16"
      >
        <div class="w-8 flex-shrink-0">
          <app-icon
            v-if="navbarIconLeft"
            v-on="navbarIconLeft.handlers"
            v-bind="navbarIconLeft.props"
            :size="32"
          />
        </div>
        <div class="flex-grow">
          <vue-typed-js ref="" v-bind="typedJsOptions">
            <span
              class="mx-auto typing font-semibold text-xl text-white"
            ></span>
          </vue-typed-js>
        </div>
        <div class="w-8 flex-shrink-0">
          <app-icon
            v-if="navbarIconRight"
            v-on="navbarIconRight.handlers"
            v-bind="navbarIconRight.props"
            :size="32"
          />
        </div>
      </nav>
    </transition>
    <transition name="transition-fade" mode="out-in" appear>
      <div
        class="overflow-y-auto overflow-x-hidden flex-grow"
        :class="{ 'mt-16': showNavbar }"
        style="transition: all 0.3s ease;"
      >
        <slot />
      </div>
    </transition>
    <transition name="transition-slide-up" mode="out-in" appear>
      <div class="w-full p-4 shadow bg-white" v-if="showFooter">
        <div class="container">
          <component :is="footer" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      mandatory: false,
      default: undefined,
    },
    showNavbar: {
      type: Boolean,
      mandatory: false,
      default: true,
    },
    navbarIconLeft: {
      type: Object,
      mandatory: false,
      default: undefined,
    },
    navbarIconRight: {
      type: Object,
      mandatory: false,
      default: undefined,
    },
    footer: {
      type: Object,
      mandatory: false,
      default: undefined,
    },
  },
  metaInfo: {
    viewport:
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  },
  data() {
    return {
      typedJsOptions: {
        showCursor: false,
        strings: [
          process.env.VUE_APP_NAME,
          process.env.VUE_APP_DESCRIPTION,
          process.env.VUE_APP_NAME,
        ],
        autoInsertCss: false,
        backSpeed: 10,
        backDelay: 3000,
      },
    };
  },
  computed: {
    showFooter() {
      return this.footer !== undefined;
    },
  },
};
</script>

<style>
html,
body {
  @apply h-full w-full bg-gray-300;
}
body {
  @apply overflow-hidden;
}
</style>
