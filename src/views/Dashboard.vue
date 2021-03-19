<template>
   <div id="dash" class="container-fluid">
       <div class="row">
           <div class="col-12 col-sm 8col-dm-0 sidebar">
               <b-card title="Filtros" tag="article" class="mb-2" bg-variant="dark" text-variant="white">
                   <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
                        <div class="row">
                            <div class="col-12">
                                <b-form-input id="input-title"  v-model="filters.title"  type="text" placeholder="Buscar pelo título"></b-form-input>
                            </div>
                            <div class="col-12" my-3>
                                 <b-form-checkbox id="checkbox-my-jobs" v-model="filters.myJobs" 
                                   name="myJobs" value="true" unchecked-value="false">
                                   Meus Projetos
                                 </b-form-checkbox>
                            </div>
                            <div class="col-12">
                                <b-button type="submit" variant="primary" size="lg" block>Buscar</b-button>
                                <b-button type="submit" variant="danger" size="sm" block>Limpar</b-button>
                            </div>
                        </div>
                   </b-form>
               </b-card>
           </div>
       </div>
   </div>
</template>

<script>
export default {
  data: () => ({
     jobs: null,
     filters: {
         title: '',
         myJobs: false
     },
     pagination: {
         offset: 0,
         limit: 5,
         count: 0
     }
  })
}
</script>

<style>

</style>