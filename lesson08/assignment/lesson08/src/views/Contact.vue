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
      <b-row>
        <b-col>
          <b-button type="button" name="button" v-on:click= "show = !show"> More Information </b-button>
          <p v-if="show"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus leo tellus, sit amet dapibus est consequat at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi at facilisis massa. Etiam euismod purus urna, a consectetur massa ultricies sed. Mauris tellus dui, cursus at quam non, euismod condimentum neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean gravida odio eros, non semper nisl venenatis id. In viverra fringilla turpis ac mollis.
          Proin sodales nisl a massa eleifend, in pulvinar dolor posuere. Maecenas cursus posuere turpis sed interdum. Integer non rhoncus augue, et finibus erat. Nulla lacinia suscipit enim, eget convallis nunc tristique et. Nulla ante lectus, tempus ut elementum elementum, placerat ac ligula. Nullam non dui euismod urna blandit dictum sed ut tortor. Quisque sed aliquam quam. Vivamus tincidunt, ipsum vitae euismod ultrices, tellus nisi condimentum eros, sit amet dictum enim ipsum quis felis. Suspendisse ipsum ante, rutrum sed vulputate non, tincidunt sed quam. Vestibulum imperdiet augue at ornare fermentum. Praesent magna nunc, pharetra sit amet scelerisque in, consequat ac sapien. Donec sodales risus a consequat egestas. Nulla sollicitudin, nibh sed blandit faucibus, turpis lacus tristique lectus, non commodo tellus tellus non ante. Integer at tellus eget mauris bibendum pretium ac quis eros.</p>
          <p v-else> Click Button Above to Show More Ways To Contact Us</p>
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
            show: false,
            header1: 'Email',
            header2: 'Phone',
            header3: 'Address',
            header4: 'Messenger Pigeon'
        }  
      }
      }
    </script>