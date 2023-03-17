<template>
  <div class="about">
    <h1>Welcome to Novelties</h1>

    <div class="container">
      <div class="row">
        <div class="col" id="aboutme">
         <img src="https://i.postimg.cc/kgRjRqxy/AM-vinyl.jpg" alt="..." class="img-thumbnail">
         <span id="aboutmesub">I am an aspiring front-end developer in Cape Town, South Africa.</span>
         <br>
         <br><span id="aboutcontent"> I am a creative, hard-working person who is not afraid of a challenge. I enjoy solving
          problems and working with others in group projects. On, occasion, I enjoy leading group projects, because 
          i feel that i possess the necessary leadership qualities needed to produce excellent work. 
          My dedicated nature and effective, enthusiastic and positive personality allows for the best quality of work to be produced.</span>
        </div>
      
        <div class="col" id="workexp">


      <h4>Hobbies and Interests</h4>
      <ul>
        <li>violin</li>
        <li>cats</li>
        <li>baking</li>
        <li>cooking</li>
        <li>reading</li>
        <li>writing</li>
        <li>traveling</li>
        <li>psychology</li>
        <li>music</li>
        <li>photography</li>
        <li>movies</li>
        <li>sewing</li>
    
      </ul>
    </div>
</div>
    </div>
      
  </div>
</template>
<style scoped>
h1 {
  font-weight: bolder;
}
h4 {
  font-weight: bold;
  text-decoration: underline;
}
li {
  text-decoration: none;
  list-style: none;
}
.container {
  margin-bottom: 20px;
}
#about {
  padding-left: 344px; 
  font-size: 100px; 
  color: #b09cd1;
}
#aboutmeheadliner {
  font-size: 30px;
}

.img-thumbnail {
  width: 200px;
  height: 200px;
  padding: 0px;
  margin: 10px;
}
#aboutmesub {
  padding: 0;
  margin: 0;
  width: 200px;
  height: 200px;
  font-weight: bolder;
  float: right;
  font-size: x-large;
  margin-left: 0px;
}

#aboutcontent {
  font-size: 20px;
  padding-bottom: 20px !important;
}
#aboutme, #workexp {
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, .67);
}

#workexp {
  width: 120px;
  padding: 10px;
}

#workexphead {
  font-size: 30px; 
  color: #531063;
  padding-left: 110px;
  font-weight: bolder;
  padding-top: 10px;
}

#workexplist {
  padding: 45px;
}
li {
  text-decoration: none;
}
</style>