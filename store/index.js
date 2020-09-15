export const state = () => ({
});
export const getters = {
  olderToYounger: (state) => (module) => {
    return _.orderBy(state[module],(item) => new Date(item.debut),'desc');
  }
};
export const mutations = {
};
