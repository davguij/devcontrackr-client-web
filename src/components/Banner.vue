<template>
  <section class="hero is-small is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Primary bold title
        </h1>
        <h2 class="subtitle">
          Primary bold subtitle
        </h2>
      </div>
    </div>
    <div class="hero-foot">
      <nav class="tabs">
        <div class="container">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <router-link to="/conferences/create">New conference</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'banner',
};
</script>

<style>

</style>
