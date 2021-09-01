<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  margin: 0;
  height: 100%;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input {
  margin: 0.5em;
  width: 20em;
  padding: 0.5em;
  &:focus {
    outline-color: skyblue;
  }
}

.error {
  color: red;
  font-style: italic;
  font-size: 0.9em;
  width: 18em;
}

#loginBG {
  height: 100%;
  background-image: url("assets/LoginBG.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 5%;
}
#form-container {
  font-size: 1em;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  position: absolute;
  padding: 0.5rem;

  @media (min-width: 768px) {
    border-radius: 0.5em;
    box-shadow: 0 1em 2em 0.5em rgba(0, 0, 0, 0.2),
      0 1em 2em 0.5em rgba(0, 0, 0, 0.19);
    height: 25em;
    width: 30em;
    left: 10em;
    top: 10em;
  }
}

form {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#form-btn {
  width: 20em;
  padding: 0.5em;
}
</style>
