<script setup>
  import UserModel from '../models/UserModel';
</script>

<script>
  export default {
    data() {
      return {
        fullName: "",
        login: "",
        password: "",
        confirmPassword: "",
        signUpError: false,
        signUpErrorText: ""
      }
    },
    watch: {
      signUpError() {
        console.log(this.signUpError);
      }
    },
    methods: {
      async signUp(e) {
        const form = e.target;

        if (!form.checkValidity()) {
          form.classList.add("was-validated");
        } else {
          const currentUser = new UserModel({ fullName: this.fullName, login: this.login, password: this.password, confirmPassword: this.confirmPassword });

          console.log(currentUser);

          const signUpResult = await currentUser.signUp();

          const { flag, message } = signUpResult;

          if (flag) {
            console.log("Usuário cadastrado com sucesso!");
            this.$router.push("/");
          } else {
            this.signUpErrorText = message;
            this.signUpError = true;
          }
        }
      },
      setFullName(e) {
        this.fullName = e.target.value.trim();
      },
      setLogin(e) {
        this.login = e.target.value.trim();
      },
      setPassword(e) {
        this.password = e.target.value.trim();
      },
      setConfirmPassword(e) {
        this.confirmPassword = e.target.value.trim();
      },
    }
  }
</script>

<template>
  <div class="container d-flex justify-content-center align-items-center h-100">
    <form class="needs-validation" novalidate @submit.prevent.stop="signUp">
      
      <div class="alert alert-warning alert-dismissible fade show p-3" role="alert" v-if="signUpError">
        <div class="d-flex justify-content-between w-100">
          <h4 class="alert-heading">Erro de login</h4>
          <button type="button" class="close btn" data-dismiss="alert" aria-label="Close" @click="signUpError=false">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <p>{{ signUpErrorText }}</p>
      </div>

      <h4>
        Cadastrar
      </h4>

      <p class="text-muted">
        Criar uma conta no sistema de gerência de desbravadores
      </p>

      <div class="mb-3 has-validation">
        <label for="fullNameInput" class="form-label">Nome completo</label>
        <input type="text" class="form-control" id="fullNameInput" @change="setFullName" required />
        <span class="invalid-feedback">
          Campo obrigatório
        </span>
      </div>

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
      
      <div class="mb-3 has-validation">
        <label for="confirmPasswordInput" class="form-label">Confirmar senha</label>
        <input type="password" class="form-control" id="confirmPasswordInput" @change="setConfirmPassword" required />
        <span class="invalid-feedback">
          Campo obrigatório
        </span>
      </div>

      <button type="submit" class="btn btn-primary mb-3">Cadastrar</button>

      <p class="text-muted">Já tem uma conta? <a href="/">Entrar</a></p>
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
  
    form > h4 {
      font-size: 2rem;
      margin: 0;
    }
  }
</style>
