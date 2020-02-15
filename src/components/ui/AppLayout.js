import { mapMutations } from 'vuex';

export default {
  props: {
    layout: {
      type: Object,
      mandatory: true,
      default: null,
    },
    layoutProps: {
      type: Object,
      mandatory: false,
      default: () => {},
    },
  },
  methods: {
    ...mapMutations('layout', ['setLayout', 'setLayoutProps']),
  },
  watch: {
    layout: {
      immediate: true,
      handler() {
        if (this.layout) {
          this.setLayout(this.layout);
        }
      },
    },
    layoutProps: {
      immediate: true,
      handler() {
        if (this.layoutProps) {
          this.setLayoutProps(this.layoutProps);
        }
      },
    },
  },
  render() {
    return this.$slots.default[0];
  },
};
