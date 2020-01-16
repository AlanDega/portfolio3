<template>
  <v-app>
    <v-app-bar app color="#060715" >
      <v-toolbar-title class="headline text-uppercase">
        <div class="d-none d-md-flex">
              <img src="./assets/logoA.png" alt="Alogo" >
        </div>
        <div class="d-flex d-sm-flex d-md-none">
              <img src="./assets/logoA.png" alt="Alogo" width="22.5" height="45">
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-none d-md-flex" >
<a href="https://github.com/AlanDega">
           <img src="./assets/newGit.png" alt="githubLogo" height="30px" width="30px">
      </a>
         <a href="https://www.linkedin.com/in/alan-dega-a3b0b6182/">
           <img src="./assets/newLinked.png" alt="linkedinLogo" height="30px" width="30px">
      </a>
         <a  href="https://twitter.com/ArkiDega">
           <img src="./assets/newTwitter.png" alt="twitterLogo" height="40px" width="40px">
      </a>
      </div >
      <div class="d-flex d-sm-flex d-md-none"> 
<a href="https://github.com/AlanDega">
           <img src="./assets/newGit.png" alt="githubLogo" height="20px" width="20px">
      </a>
         <a  href="https://www.linkedin.com/in/alan-dega-a3b0b6182/" class="icon2">
           <img src="./assets/newLinked.png" alt="linkedinLogo" height="20px" width="20px">
      </a>
         <a  href="https://twitter.com/ArkiDega" class="icon3">
           <img src="./assets/newTwitter.png" alt="twitterLogo" height="20px" width="20px">
      </a>
      </div>

         
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.icon2{
  margin: 0px 20px;
}
.icon3{
  margin-right: 10px;
}
</style>
