import Vue from 'vue'

export default Vue.extend({
  render() {
    return (
      <div id="app">
        <p>
          <router-link to="/basic">Basic</router-link> |
          <router-link to="/source">Source</router-link> |
          <router-link to="/fx">Functional</router-link> |
          <router-link to="/tabs">Tabs</router-link> |
          <router-link to="/scoped">Scoped</router-link>
        </p>
        <router-view />
      </div>
    )
  }
})
