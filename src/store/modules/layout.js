import LayoutDefault from '@/layouts/LayoutDefault';

export default {
  namespaced: true,
  state: {
    layout: LayoutDefault,
    layoutProps: {},
  },
  mutations: {
    setLayout: (state, layout) => {
      state.layout = layout;
    },
    setLayoutProps: (state, layoutProps) => {
      state.layoutProps = layoutProps;
    },
  },
};
