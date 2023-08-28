<template>
<div id="app">
  <div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
   <div style= "display: inline-flex; color:white; font-weight:bold">
    <router-link class="nav-link active" to="/">Home</router-link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <router-link class="nav-link active" to="/business">Business</router-link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <router-link class="nav-link active" to="/Projects">Gallery</router-link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <router-link class="nav-link active" to="/about">About</router-link>
  </div>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
  <router-view/>
<body style="min-height: 100vh; display: flex; flex-direction: column;">
  
</body>
  <footer id="dk-footer" class="navbar navbar-dark bg-dark" style="width:100%; margin-top: auto;">
    <div style="margin:6px;">
      <span style="color:silver;">Contact Details</span><br>
    <a href="" style="font-size:small; text-decoration:none">07089584207</a> <br>
  <div style= "display:inline-flex">
    <a href="https://web.whatsapp.com/"><img style="width:20px; height:20px" src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="whatsapp"></a> &nbsp; &nbsp; 
    <a href="https://www.instagram.com/rachaelaverik/"><img style="width:20px; height:20px" src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="instagram"></a> &nbsp; &nbsp; 
    <a href="https://twitter.com/AverikRachael"><img style="width:20px; height:20px" src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="twitter"></a> &nbsp; &nbsp;
    <a href="https://www.youtube.com/@rachaelaverik5171"><img style="width:20px; height:20px" src="https://img.icons8.com/color/48/null/youtube-play.png" alt="twitter"></a> &nbsp; &nbsp;
    <a href="https://www.tiktok.com/@rachaelaverik?lang=en"><img style="width:20px; height:20px" src="https://img.icons8.com/office/16/null/tiktok.png" alt="twitter"></a> &nbsp; &nbsp;
    <a href="https://web.facebook.com/profile.php?id=100004600485637"><img style="width:20px; height:20px" src="https://img.icons8.com/color/48/null/facebook.png" alt="twitter"></a>
  </div>
  <br>
    </div>
</footer>
</div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  align-content: center
};



</style>
