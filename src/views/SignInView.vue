<script setup>
  import UserModel from "../models/UserModel";

  const form = document.getElementsByClassName('needs-validation');
</script>

<script>
  export default {
    data() {
      return {
        login: "",
        password: "",
        signInError: false,
        signInErrorText: ""
      }
    },
    watch: {
      async signInError() {
        if (this.signInError) {
          const signInErrorTimeout = setTimeout(() => {
            this.signInError = false;
            
            clearTimeout(signInErrorTimeout);
          }, 5000);
        }
      }
    },
    methods: {
      setLogin(e) {
        this.login = e.target.value.trim();
      },
      setPassword(e) {
        this.password = e.target.value.trim();
      },
      async signIn() {
        const form = this.$refs.signInForm;

        if (!form.checkValidity()) {
          form.classList.add("was-validated");
        } else {
          const currentUser = new UserModel({ login: this.login, password: this.password });

          const signInResult = await currentUser.signIn();

          const { flag, message, token } = signInResult;

          if (flag) {
            localStorage.setItem("token", token);

            this.$router.push("/pathfinders");
          } else {
            this.signInErrorText = message
            this.signInError = true;
          }
        }
      }
    }
  }
</script>

<template>
  <div class="container d-flex justify-content-center align-items-center h-100">
    <form class="needs-validation" novalidate @submit.prevent.stop="signIn" ref="signInForm">
      
      <div class="alert alert-warning alert-dismissible fade show p-3" role="alert" v-if="signInError">
        <div class="d-flex justify-content-between w-100">
          <h4 class="alert-heading">Erro de login</h4>
          <button type="button" class="close btn" data-dismiss="alert" aria-label="Close" @click="signInError=false">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <p>{{ signInErrorText }}</p>
      </div>

      <h4>
        Entrar
      </h4>

      <p class="text-muted">
        Entrar no sistema de gerência de desbravadores
      </p>

      <div class="mb-3 has-validation">
        <label for="loginInput" class="form-label">Login</label>
        <input type="text" class="form-control" id="loginInput" @change="setLogin" required />
        <span class="invalid-feedback">
          Campo obrigatório
        </span>
      </div>

      <div class="mb-3 has-validation">
        <label for="passwordInput" class="form-label">Senha</label>
        <input type="password" class="form-control" id="passwordInput" @change="setPassword" required />
        <span class="invalid-feedback">
          Campo obrigatório
        </span>
      </div>

      <button type="submit" class="btn btn-primary mb-3">Entrar</button>

      <p class="text-muted">Não tem uma conta? <a href="/signup">Criar</a></p>
    </form>
  </div>
</template>

<style scoped>
  form > p > a {
    text-decoration: none;
  }

  form > p > a:hover {
    text-decoration: underline;
  }

  @media (max-width: 400px) {
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  
  }

  @media (min-width: 400px) {
    form {
      width: 50%;
      display: flex;
      flex-direction: column;
    }
  }

</style>
