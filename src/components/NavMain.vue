<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand @click="$router.push('/')">CDWorks</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item @click="$router.push('/dashboard')">Sou Freelancer</b-nav-item>
              <b-nav-item @click="$router.push('/new-job')">Busco Freelancer</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item @click="$router.push('/register')">Cadastra-se</b-nav-item>
                <b-nav-item @click="$router.push('/login')">Entrar</b-nav-item>
                <b-nav-item-dropdown right>
                     <template v-slot:button-content>
                        <em>NOME_USUARIO</em>
                     </template>
                     <b-drodown-item @click="$router.push('/profile/1')">Perfil</b-drodown-item>
                     <b-drodown-item @click="logout()">Sair</b-drodown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
</template>

<script>
export default {
    
    methods: {
        logout() {
         //console.log("Saiu da aplicacao...")
        }
    }
}
</script>

<style>

</style>