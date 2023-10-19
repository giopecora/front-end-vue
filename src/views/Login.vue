<template>
  <div class="row-login">
    <div class="left-login">
      <div class="col-12 d-flex justify-content-center align-items-center">

        <form @submit.prevent="login" class="login-form">
          <div class="form-group">
            <label for="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="joaosilva@email.com"
              autocomplete="off"
              v-model="input.email"
              :class="{'is-invalid': getValidation('email')}"
              class="form-control"
            >
          </div>

          <div class="form-group mt-2">
            <label for="password mt-2">
              Senha
            </label>
            <input
              id="password"
              type="password"
               v-model="input.password"
              placeholder="Digite sua senha"
              :class="{'is-invalid': getValidation('password')}"
              class="form-control"
            >
          </div>

          <button type="submit" class="btn btn-primary btn-block  mt-3">
            <i class="fas fa-sign-in-alt mr-2"></i> Entrar
          </button>
       </form>
       <h3>{{ this.output }}</h3>

      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <!-- <img src="../assets/images/login.svg" class="img-login" /> -->
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import http from '@/services/http.js';
import { SET_AUTHENTICATION, SET_USERNAME } from "../store/storeconstants";

export default {
    data() {
        return {
        input: {
            email: "",
            password: ""
        },
        output: "",
        }
    },

    methods: {
    async login() {
        try {
            const {data} = await http.post('/login',this.input);

            if (data.access_token) {
                this.output = "Authentication complete"
                this.$store.commit(`setAuth`, data.access_token);
                this.output = "Authentication complete."
                
                this.$router.push('/dashboard')
            } else {
                this.$store.commit(`setAuth`, false);
                this.output = "Username and password can not be empty"
            }
          
        } catch (error) {
            console.log(error);
        }
    },
    getValidation(field) {
    //   return this.$v.form[field] ? this.$v.form[field].$error : false;
    }
    },

    validations: {
        form: {
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(6)
        }
        }
    }
}
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.row-login {
  margin-left: 0;
}

.left-login {
  background-color: #F2F2F2;
  height: 250px;
  width: 300px;
  padding-top: 25px
}

.title-login {
  font-weight: bold;
}

.img-login {
  width: 600px;
  height: 600px;
}
</style>
