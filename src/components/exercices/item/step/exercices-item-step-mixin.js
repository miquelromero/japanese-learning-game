export default {
  props: {
    exercice: {
      type: Object,
      mandatory: true,
      default: null,
    },
  },
  methods: {
    emitEvent(event, params) {
      this.$emit('event', {
        event: event,
        params: params,
      });
    },
  },
};
