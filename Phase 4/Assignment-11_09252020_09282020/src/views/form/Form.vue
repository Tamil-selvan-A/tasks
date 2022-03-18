<template>
  <div class="login">
    <header class="p-3 fixed-top">
      <a class="btn btn-success text-light font-weight-bold mx-4" href="#form">FORM</a>
      <a class="btn btn-success text-light font-weight-bold mx-4" href="#data">DATA</a>
    </header>

    <!--========== FORM ==========-->
    <div class="p-5" id="form">
      <h3 class="text-light mb-4 pt-5">FORM VALIDATION</h3>
      <form v-on:submit.prevent="validate" class="p-3 px-5 rounded-lg mx-auto">
        <!--========== NAME ==========-->
        <input v-model="name" type="text" placeholder="Enter Your Name" class="form-control px-4 mt-4">
        <small v-if="!$v.name.required" class="text-warning d-block text-left p-2">Name is required</small>
        <small v-if="!$v.name.alpha" class="text-warning d-block text-left p-2">Name sholud be alphabet characters</small>
        <!--========== END NAME ==========-->

        <!--========== EMAIL ==========-->
        <input v-model.trim="email"  type="email" placeholder="Enter Your Email" class="form-control px-4 mt-4">
        <small v-if="!$v.email.required" class="text-warning d-block text-left p-2">Email is required</small>
        <small v-if="!$v.email.email" class="text-warning d-block text-left p-2">Enter Valid Email</small>
        <!--========== END EMAIL ==========-->

        <!--========== MOBILE NUMBER ==========-->
        <input v-model.trim="mobile" type="text" placeholder="Enter Mobile Number" class="form-control px-4 mt-4">
        <small v-if="!$v.mobile.required" class="text-warning d-block text-left p-2">Mobile Number is required</small>
        <small v-if="!$v.mobile.numeric" class="text-warning d-block text-left p-2">Mobile Number sholud be a Number</small>
        <!--========== END MOBILE NUMBER ==========-->

        <!--========== DOB ==========-->
        <label for="dob" class="text-light text-left d-block font-weight-light mt-4">Select DOB</label>
        <input v-model.trim="dob" type="date" class="form-control" id="dob">
        <small v-if="!$v.dob.required" class="text-warning d-block text-left p-2">Date of Birth is required</small>
        <!--========== END DOB ==========-->

        <!--========== LANGUAGE  ==========-->
        <p class="text-light text-left mt-4 mb-2 font-weight-light">Select Languages Known</p>
        <div class="form-control d-flex justify-content-around">
          <div>
            <input v-model="tamil" type="checkbox" id="tamil" value="tamil">
            <label for="tamil" class="px-2 text-secondary">Tamil</label>
          </div>
          <div>
            <input v-model="english" type="checkbox" id="english" class="ml-2" value="english">
            <label for="english" class="px-2 text-secondary">English</label>
          </div>
          <div>
            <input v-model="french" type="checkbox" id="french" class="ml-2" value="french">
            <label for="french" class="px-2 text-secondary">French</label>
          </div>
        </div>
        <small v-if="((this.$v.tamil.$model == false) && (this.$v.english.$model == false) && (this.$v.french.$model == false))" class="text-warning d-block text-left p-2">Language preference is required</small>
        <!--========== END LANGUAGE ==========-->

        <!--========== FOOD ==========-->
        <p class="text-light text-left mt-4 mb-2 font-weight-light">Select Food Preference</p>
        <div class="form-control d-flex justify-content-around">
          <div>
            <input v-model="veg" type="radio" id="veg" value="veg">
            <label for="veg" class="px-2 text-secondary">Veg</label>
          </div>
          <div>
            <input v-model="nonVeg" type="radio" id="non-veg" class="ml-2" value="Non-Veg">
            <label for="non-veg" class="px-2 text-secondary">Non-Veg</label>
          </div>
        </div>
        <small v-if="((this.$v.veg.$model == false) && (this.$v.nonVeg.$model == false))" class="text-warning d-block text-left p-2">Food preference is required</small>
        <!--========== END FOOD ==========-->
        
        <!--========== PASSWORD ==========-->
        <input v-model="password" type="text" placeholder="Enter Your Password" class="form-control px-4 mt-4">
        <small v-if="!$v.password.required" class="text-warning d-block text-left p-2">Password is required</small>
        <small v-if="!$v.password.minLength" class="text-warning d-block text-left p-2">Password sholud be more than 6 characters</small>
        <small v-if="!$v.password.maxLength" class="text-warning d-block text-left p-2">Password sholud be less than 12 characters</small>
        <!--========== END PASSWORD ==========-->

        <input type="submit" value="SUBMIT" class="btn btn-success px-5 my-4"> 
      </form>
    </div>
    <!--========== END FORM ==========-->

    <!--========== TABLE ==========-->
    <div class="table-responsive px-4">
      <h3 class="text-light mb-4 pt-5">FORM DATA</h3>
      <table class="table table-light table-striped" id="data">
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>MOBILE</th>
            <th>DOB</th>
            <th>LANGUAGES</th>
            <th>FOOD</th>
            <th>PASSWORD</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="formData in dataArray" :key="formData.Name">
            <td>{{formData.Name}}</td>
            <td>{{formData.Email}}</td>
            <td>{{formData.Mobile}}</td>
            <td>{{formData.DOB}}</td>
            <td>{{formData.Languages}}</td>
            <td>{{formData.Food}}</td>
            <td>{{formData.Password}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--========== END TABLE ==========-->
  </div>
</template>

<script>

import { required, alpha, numeric, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'Form',
  data () {
    return {
      name: '', email: '', mobile: '', dob: '',
      tamil: '', english: '', french: '', veg: '',
      nonVeg: '', password: '', dataArray: [],
      dataObject : { }
    }
  },

  validations: {
    name: { required, alpha },
    email: { required, email },
    mobile: { required, numeric, minLength: minLength(10) },
    dob: { required },
    tamil: { required },
    english: { required },
    french: { required },
    veg: { required },
    nonVeg: { required },
    password: { required, minLength: minLength(6), maxLength: maxLength(12)}
  },
  
  methods: {
      
      validate () {
        this.$v.$touch();

        // TO SET THE CHECKBOX VALUE
        if (this.$v.tamil.$model == true) {
          this.$v.tamil.$model = 'Tamil'
        } 
        else if (this.$v.tamil.$model == false) {
          this.$v.tamil.$model = ''
        }

        if (this.$v.english.$model == true) {
          this.$v.english.$model = 'English'
        }
        else if (this.$v.english.$model == false) {
          this.$v.english.$model = ''
        }
        
        if (this.$v.french.$model == true) {
          this.$v.french.$model = 'French'
        }
        else if (this.$v.french.$model == false){
          this.$v.french.$model = ''
        }
        
        //  TO CHECK ALL FIELDS ARE VALID
        if ((this.$v.$invalid) && 
            ((this.$v.tamil.$model == 'Tamil') || (this.$v.english.$model == 'English') || (this.$v.french.$model == 'French')) && 
            ((this.$v.veg.$model == 'veg') || (this.$v.nonVeg.$model == 'Non-Veg'))) {

            this.dataObject = {
              Name: this.$v.name.$model,
              Email: this.$v.email.$model,
              DOB: this.$v.dob.$model,
              Languages : this.$v.tamil.$model + ' ' + this.$v.english.$model + ' ' + this.$v.french.$model,
              Food : this.$v.veg.$model + ' ' + this.$v.nonVeg.$model,
              Password: this.$v.password.$model
            }

            this.dataArray.push(this.dataObject)
        } 
      }
  }
}
</script>

<style lang="scss" scoped>
.login {
  background: url('../../assets/images/background.jpg') center/cover no-repeat fixed;
}
form {
  max-width: 500px;
  background: rgba($color: #000000, $alpha: 0.5);
}
header {
  background: rgba($color: #000000, $alpha: 0.5);
}
input, label {
  font-weight: 400;
}
.form-control {
 border-radius: 20px;
}
</style>