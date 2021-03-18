<template>

  <div class="home text-center">

      <b-jumbotron header="CDWorks" lead="Os melhores programadores estão aqui!">
      <p>Coloque os seus projectos de desenvolvimento de software na mao de quem sabe o que faz.</p>
      <b-button variant="primary" @click="$router.push('/register')"> Mais Informações</b-button>
      </b-jumbotron>

      <div class="container">
        <div class="row">

          <div class="col-12 col-sm-6 pb-2">
              <b-card border-variant="primary" body-text-variant="primary" text-variant="dark" title="Sou Freelancer" sub-title="Busque um novo projecto">
                 <b-card-text>
                   Trabalhe em projectos interessantes que voce realmente deseja trabalhar.
                 </b-card-text>
                     <router-link to="/register" class="card-link text-white btn btn-primary">Cadastrar-se</router-link>
              </b-card>
          </div>

            <div class="col-12 col-sm-6 pb-2">
              <b-card border-variant="danger" body-text-variant="danger" text-variant="dark" title="Busco Freelancer" sub-title="Cadastre seu novo projecto">
                 <b-card-text>
                   Venha para a nossa plataforma e entre em contacto com os melhores devs.
                 </b-card-text>
                     <router-link to="/register" class="card-link text-white btn btn-danger">Cadastrar-se</router-link>
              </b-card>
          </div>

        </div>
      </div>

  </div>

</template>

<script>


export default {
  name: 'Home',
 
}
</script>
