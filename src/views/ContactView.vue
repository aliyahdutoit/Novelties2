<template>
 <h3>Get in touch with us</h3>

     <!--Contact Form section-->
     <div id="form_">
          
        <form class="align-self-center" action="https://formspree.io/f/xdojpryw" method="POST" id="form">
      
          <label for="fname" id="labels">Your Name</label>
          <input type="text" id="fname"  name="firstname" placeholder="Your name..">
      
          <label for="cname" id="labels">Your Cellphone Number</label>
          <input type="tel" id="cnumber" name="cellphonenumber" placeholder="cellphonenumber">
          <br>
          <label for="email" id="labels">Your Email</label>
          <input type="text" id="email" name="email" placeholder="Your email..">
      
          <label for="message" id="labels">Your Message</label>
          <textarea id="message" name="message" placeholder="What is your Enquiry? Tell us more..." style="height:200px"></textarea>
      
          <input type="submit" id="button" value="Submit"  onclick="myFunction()">
      
        </form>
      </div>
<FooterBar/>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
    export default {
        components: {
          FooterBar
        }
    }
</script>

<style scoped>
/*Contact Form*/
  /* Style inputs with type="text", select elements and textareas */
  input[type=text], select, textarea {
    width: 320px; /* Full width */
    padding: 12px; /* Some padding */ 
    padding-left: 10px;
    position: relative;
    margin-left: 40px;
    border: 1px solid #ccc; /* Gray border */
    border-radius: 4px; /* Rounded borders */
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
    resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
  }
  
  /* Style the submit button with a specific background color etc */
  input[type=submit] {
    background-color: blue;
    color: white;
    padding: 13px 40px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  /* When moving the mouse over the submit button, add a darker green color */
  input[type=submit]:hover {
    background-color: #b09cd1;
  }
  
  #button {
    margin-left: 130px;
  }
  
  /* Add a background color and some padding around the form */
  #form {
    border-radius: 5px;
    background-color: #4613BD;
    padding: 30px;
    width: 400px;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .67);
    
  }
  
  #form {
    padding-left: 0px;
    margin-bottom: 40px;
    /* float: right; */
  }
  
  
  #labels {
    padding-left: 40px;
  }
  
#form_ {
  padding-left: 585px;
}
</style>