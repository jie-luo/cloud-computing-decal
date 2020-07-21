<template>
  <header class="header" id="header" ref="header">
    <nav class="header-logo">
      <g-link to="/"><g-image class="logo" src="~/assets/logo.png" /></g-link>
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="grow"></nav>
      <a href="javascript:void(0);" class="show-menu" v-on:click="showMenu()">
        ☰
      </a>
    </nav>
    <g-link class="nav__link" to="/announcements/">Announcements</g-link>
    <g-link class="nav__link" to="/staff/">Course Staff</g-link>
    <g-link class="nav__link" to="/resources/">Resources</g-link>
    <g-link class="nav__link" to="/policies/">Policies</g-link>
    <a class="nav__link" href="https://piazza.com/class/">Piazza</a>
  </header>
</template>

<script>
export default {
  name: 'ResponsiveNav',
  methods: {
    showMenu: function() {
      var x = this.$refs.header;
      if (x.className === "header") {
        x.className += " responsive";
      } else {
        x.className = "header";
      }
    },
  }
}
</script>

<style>
.logo {
  width: 64px;
  margin-right: 30px;
  height: auto;
}

.header-logo {
  font-size: 18px;
  display: flex;
  align-items: center;
  width: 100%;
}

.header {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
  min-height: 80px;
  width: 100%;
}

.nav__link {
  font-size: 18px;
  margin-left: 10px;
  display: block;
  text-align: center;
  white-space: nowrap;
}

.show-menu {
  font-size: 48px;
  display: none;
}

.grow {
  flex-grow: 0;
}

@media screen and (max-width: 830px) {
  .grow {
    flex-grow: 1;
  }
  .nav__link {
    display: none;
  }
  .header .show-menu {
    display: block;
  }
}
@media screen and (max-width: 830px) {
  .header.responsive {
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }
  .header.responsive .show-menu {
    position: absolute;
    right: 0px;
  }
  .header.responsive a.nav__link {
    display: block;
    text-align: left;
  }
} 

</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
