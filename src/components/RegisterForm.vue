<template>
    <div>
        <section class="vh-100 bg-image">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" placeholder="your first name..." v-model="payload.firstName" />
                  <label class="form-label" for="form3Example1cg">Name</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" placeholder="your surname..." v-model="payload.lastName" />
                  <label class="form-label" for="form3Example1cg">Surname</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" placeholder="your email address..." v-model="payload.emailAdd" />
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                </div>
                <div class="row">
                  <label class="form-label bg-gradient fw-bold opacity-75">Gender: </label>
                  <div>
                      <span class="fw-bold opacity-75">Male</span>
                      <input type="radio" name="gender" v-model="payload.gender" value="Male" />
                      <span class="fw-bold opacity-75">Female </span>
                      <input type="radio" name="gender" v-model="payload.gender" value="Female" />
                  </div>
              </div>
                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" placeholder="your cell"  v-model="payload.cellphoneNumber" />
                  <label class="form-label" for="form3Example3cg">Your cellnumber</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" placeholder="your role" v-model="payload.userRole" />
                  <label class="form-label" for="form3Example3cg">Your role</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" placeholder="your url for image" v-model="payload.userRole" />
                  <label class="form-label" for="form3Example3cg">Your profile image</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" v-model="payload.userPwd" />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" placeholder="YYYY-MM-DD" v-model="payload.JoinDate" />
                  <label class="form-label" for="form3Example4cg">joinndate</label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
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
        name: 'RegForm'
    }
</script>

<style scoped>

</style>