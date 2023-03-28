<template>
    <div class="formbg">
    <div>
  
  <!-- Pills content -->
  <div class="tab-content">
    <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
      <form>
  
        
  
        <!-- Email input -->
        <div class="form-outline mb-4">
          <input type="email" id="loginName" class="form-control" v-model="payload.emailAdd" />
          <label class="form-label" for="loginName">Email or username</label>
        </div>
  
        <!-- Password input -->
        <div class="form-outline mb-2">
          <input type="password" id="loginPassword" class="form-control" v-model="payload.userPwd" />
          <label class="form-label" for="loginPassword">Password</label>
        </div>
  
        <!-- 2 column grid layout -->
        <div class="row mb-4">
          <div class="col-md-6 d-flex justify-content-center">
            <!-- Checkbox -->
            <div class="form-check mb-3 mb-md-0">
              <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
              <label class="form-check-label" for="loginCheck"> Remember me </label>
            </div>
          </div>
  
          <div class="col-md-6 d-flex justify-content-center">
            <!-- Simple link -->
            <a href="#!">Forgot password?</a>
          </div>
        </div>
  
        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
  
        <!-- Register buttons -->
        <div class="text-center">
          <p>Not a member? <a href="/register">Register</a></p>
        </div>
      </form>
   </div>
   </div>
   </div>
   </div>
    <FooterBar/>
</template>

<script>

import FooterBar from '@/components/FooterBar.vue';

    export default {
        components: {
          FooterBar
        },
      data() {
    return {
      payload: {
        userPwd: '',
        emailAdd: ''
      }
    }
  },
  methods: {
    login() {
      console.log('Debug:', this.payload);
      this.$store.dispatch('login', this.payload)
    }
  }
}
</script>

<style scoped>

.formbg {
    width: 70%;
    margin-left: 200px;
    background-color: #4613BD;
    padding: 50px;
}
</style>