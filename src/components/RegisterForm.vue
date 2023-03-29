<template>
    <div>
        <section class="vh-100 bg-image">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5"  id="reg">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div class="form-outline mb-4">
                  <input type="text" class="form-control" placeholder="your first name..." v-model="payload.firstName" />
                  <label class="form-label" for="form3Example1cg">Name</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="text" class="form-control" placeholder="your surname..." v-model="payload.lastName" />
                  <label class="form-label" for="form3Example1cg">Surname</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" class="form-control form-control-lg" placeholder="your email address..." v-model="payload.emailAdd" />
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                </div>
                <div class="row">
                  <label class="form-label bg-gradient fw-bold opacity-75">Gender: </label>
                  <div>
                      <span class="fw-bold text-dark"> Male</span>
                      <input type="radio" name="gender" v-model="payload.gender" value="Male" />
                      <br>
                      <span class="fw-bold text-dark"> Female </span>
                      <input type="radio" name="gender" v-model="payload.gender" value="Female" />
                  </div>
              </div>
                <div class="form-outline mb-4">
                  <input type="tel" class="form-control form-control-lg" placeholder="your cell number"  v-model="payload.cellphoneNumber" />
                  <label class="form-label" for="form3Example3cg">Your cellnumber</label>
                </div>
                <div class="row my-3">
                  <input class="form-control bg-transparent fw-bold" v-model="payload.userRole" type="text"
                      placeholder="Enter your role" />
              </div>
                <div class="form-outline mb-4">
                  <input type="text" class="form-control form-control-lg" placeholder="your image url..." v-model="payload.userProfile" />
                  <label class="form-label" for="form3Example3cg"></label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" class="form-control form-control-lg" v-model="payload.userPwd" />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="password" class="form-control form-control-lg" placeholder="YYYY-MM-DD" v-model="payload.JoinDate" />
                  <label class="form-label" for="form3Example4cg">Date Joined</label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-primary btn-block btn-lg gradient-custom-4 text-body" @click="signup">Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
                    class="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
</template>

<script>
    export default {
      data() {
        return {
            payload: {
                firstName: '',
                lastName: '',
                gender: '',
                emailAdd: '',
                userRole: '',
                userPass: '',
                cellPhoneNumber: '',
                joinDate: '',
                userProfile: 'https://i.postimg.cc/RFGFXwxQ/icon.png'
            }
        }
    },
    methods: {
        signUp() {
            this.$store.dispatch('register', this.payload)
        }
    }
  }
</script>

<style scoped>
#reg {
  background-color: #4613BD;
  
}
</style>