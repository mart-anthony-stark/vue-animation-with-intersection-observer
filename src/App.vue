<template>
  <div>
    <Header />
    <Second />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Second from "@/components/Second.vue";
export default {
  name: "App",
  components: { Header, Second },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.before-enter {
  opacity: 0;
  transform: scale(0.5) rotateZ(-25deg);
  transition: all 1s ease-out;
}
.enter {
  opacity: 1;
  transform: scale(1) rotateZ(0deg);
}
</style>
