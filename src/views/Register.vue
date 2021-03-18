<template>
  <div id="register" class="container">
     <div class="row">
      <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-3">
          <h2>Faça seu cadastro</h2>
          <hr>
          <b-alert variant="danger" v-if="error.message" show>{{error.message}}</b-alert>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  data: () => ({
      form: {
          name: null,
          email: null,
          password: null,
          passwordConfirmation: null
      }
  })
}
</script>

<style>

</style>