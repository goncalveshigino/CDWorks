<template>
   <div id="dash" class="container-fluid">
       <div class="row">
           <div class="col-12 col-sm-4 col-dm-3 sidebar">
               <b-card title="Filtros" tag="article" class="my-2" bg-variant="dark" text-variant="white">
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

            <div class="col-12 col-sm-8 col-dm-9 lista my-2">

            <b-button class="float-right" @click="() => $router.push('./jobs/new')" variant="success">Novo Projeto</b-button>
            <h3>Projetos</h3>
            <hr>

            <div v-if="jobs && jobs.length > 0">
              
              <b-card v-for="job in jobs" :key="job.id" :title="job.title" :sub-title="job.Hirer.name" class="my-2" bg-variant="light">
                <b-card-text>{{job.description}}</b-card-text>
                <div class="row">
                    <div class="col-6">
                        <strong>Orcamento</strong>
                        R$ {{job.budget}}
                    </div>
                      <div class="col-6">
                        <strong>Propostas ate:</strong>
                          {{job.deadline}}
                    </div>
                </div>
                <div class="text-right">
                 <hr>
                 <b-button variant="primary">Mais detalhes...</b-button>
                </div>
              </b-card>

              <div class="actions text-center">

                  <b-button  variant="primary" @click="previus()" class="mr-2">Anterior</b-button>
                  <b-button  variant="primary" @click="previus()" class="mr-2">Anterior</b-button>           
                  <p class="text-muted"><small>Do orimeiro projeto ate ao ultimo projecto - e o total de registro</small></p>  
              </div>
            </div>

             <div v-else><span class="text-muted">Nenhum projeto encontrado...</span></div>
            </div>
       </div>
   </div>
</template>

<script>
export default {
  data: () => ({
     jobs:[

         {
                "id": 1,
                "userId": 1,
                "title": "Free",
                "description": "teste",
                "budget": "12345",
                "deadline": "2021-03-23T08:36:13.000Z",
                "createdAt": "2021-03-23T10:30:40.000Z",
                "updatedAt": "2021-03-23T10:30:40.000Z",
                "Hirer": {
                    "id": 1,
                    "name": "Higino Luiz",
                    "description": null,
                    "pic": "http://localhost:3000/uploads1616495375401-luiz.jpeg",
                    "email": "higino@gmail.com",
                    "password": "$2b$10$3XtAtJpkuK8YFTIoVZ5hCuUvqvU6kGOye0TBVfi3kk8YttqmyGDO.",
                    "createdAt": "2021-03-23T10:29:30.000Z",
                    "updatedAt": "2021-03-23T10:29:35.000Z"
                },
                "Skills": [
                    {
                        "id": 3,
                        "name": "vueJs",
                        "JobSkills": {
                            "createdAt": "2021-03-23T10:30:51.000Z",
                            "updatedAt": "2021-03-23T10:30:51.000Z",
                            "jobId": 1,
                            "SkillId": 3
                        }
                    },
                      {
                        "id": 3,
                        "name": "vueJs",
                        "JobSkills": {
                            "createdAt": "2021-03-23T10:30:51.000Z",
                            "updatedAt": "2021-03-23T10:30:51.000Z",
                            "jobId": 1,
                            "SkillId": 3
                        }
                      }
                ]
         }

     ],
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