<template>
  <div class="about">
    <h1>Welcome to Novelties</h1>

    <div class="container">
      <div class="row">
        <div class="col" id="aboutme">
         <img src="https://i.postimg.cc/kgRjRqxy/AM-vinyl.jpg" alt="arctic monkeys AM vinyl" class="img-thumbnail">
         <span id="aboutmesub">This is your to-go website for all your bookish and vinyl needs.</span>
         <br>
         <br><span id="aboutcontent"> 
          Novelties is your new go-to website when it comes to any and all of your bookish and vinyl needs.
          we specialize in importing limited edition vinyls and making them accessible to you in an effective, yet affordable manner. 
          Our book range is diverse and can cater to any personality. We hope to be of the best service!
        </span>
        </div>
      
        <div class="col" id="workexp">


      <h4>Vinyl Artists include:</h4>
      <ul>
        <li>Arctic Monkeys</li>
        <li>Lana Del Rey</li>
        <li>The Weekend</li>
        <li>The Neighborhood</li>
        </ul>

      <h4>Authors include:</h4>
      <ul>
        <li>M.L. Rio</li>
        <li>Donna Tartt </li>


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