<template>
<!-- V-If Statment Used to Change Content-->


    <b-container>
      <b-row>

        <b-col cols="6">
          <h3 class="text-center pb-3 mt-5">{{header1}}</h3>
          <p v-if="contactinfo.length >= text">{{contactinfo}}</p>
        
        </b-col>
        <b-col cols="6">
          <h3 class="text-center mb-4 mt-5">{{header2}}</h3>
          <p v-if="contactinfo.length >= text">{{contactinfo}}</p>
        </b-col>
      </b-row>
    

      <b-row>
        <b-col cols="6">
          <h3 class="text-center pb-3 mt-5"> {{header3}} </h3>
          <p v-if="contactinfo.length >= text">{{contactinfo}}</p>
        </b-col>
      
    
      
        <b-col cols="6">
          <h3 class="text-center pb-3 mt-5">{{header4}}</h3>
          <p v-if="contactinfo.length >= text">{{contactinfo}}</p>
        </b-col>
      </b-row>
    </b-container>
    </template>
    
    <script>
    

      export default{
        name: 'app',
        data(){
          return{
            contactinfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean tempus ligula ac elit porta, nec ornare mauris bibendum. Donec vitae justo tristique, ornare diam in, imperdiet orci.Curabitur sit amet eros semper mauris ultricies consequat ut et ante.Morbi pellentesque dolor ac orci ultrices, eu sagittis eros dignissim.",
            text: 48,
            header1: 'Email',
            header2: 'Phone',
            header3: 'Address',
            header4: 'Messenger Pigeon'
        }
      }
      }
    </script>