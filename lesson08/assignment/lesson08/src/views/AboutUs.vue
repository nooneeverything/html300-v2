<template>
<!-- Accordian Created Using V-For Loop Iterating Through Content-->
  <b-container>
    <div id="app">
    <b-row>
      <b-col>
          <h2 class="mt-5"> About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus lacinia pharetra. Pellentesque diam turpis, ultrices et lorem id, sagittis pretium lacus. Sed tempor semper metus in cursus. Aliquam commodo suscipit erat, at sodales elit. Praesent viverra accumsan rutrum. Donec turpis dui, viverra quis turpis mattis, vestibulum vehicula orci. Ut commodo urna quam, nec ultrices neque posuere non. Phasellus nulla tellus, dapibus at suscipit ultrices, venenatis eu nibh. Vestibulum luctus auctor laoreet. Ut tempus imperdiet velit, eleifend pulvinar diam.
                Nunc in velit ante. Sed vel elit est. Suspendisse tincidunt elit vel fermentum iaculis. Donec condimentum magna quis orci laoreet, nec vehicula velit placerat. Aliquam consectetur commodo massa, ut vulputate urna egestas et. Nullam a velit sit amet nulla eleifend vestibulum sed quis odio. Morbi eget finibus quam, sed porta dui. Nunc nec ante posuere, lacinia dui maximus, aliquet libero. Sed leo nulla, bibendum ac ipsum eu, varius eleifend sem. Nunc imperdiet id eros ac sagittis.
              </p>
                        
      </b-col>
    </b-row>

    <div v-for="x in questions" :key="x">
      <b-card-header>
        <b-button block size="lg" v-b-toggle.collapse-1 variant="success" pill v-on:click="x.isOpen = !x.isOpen">{{x.question}}</b-button>
      </b-card-header>
      <b-card-body>
        <b-card-text v-if="x.isOpen">{{x.answer}}</b-card-text>
      </b-card-body>
    </div>

</div>

<!--<div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">{{items.a1.question}}</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ items.a1.answer }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">{{items.a2.question }}</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{items.a2.answer}}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">{{ items.a3.question }}</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{items.a3.answer }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div> -->
</b-container>
  
</template>


<script>
  export default{
    name: 'app',
    data(){
      return{
        questions: {
          item1: {
            question: "Who are our typical clients?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum odio purus, nec commodo lacus auctor vitae. Curabitur et interdum sem, ut egestas sapien. Integer sem magna, iaculis eget venenatis at, egestas non eros. Suspendisse erat ipsum, volutpat quis nisi sed, pulvinar vestibulum dui. Fusce porttitor iaculis malesuada. In dignissim sit amet ante nec rutrum. Pellentesque vel maximus diam. Ut id pellentesque libero, a rutrum ante. Donec id nulla diam.",
            isOpen: "True"
          },
          item2: {
            question: "How do our fees work?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum odio purus, nec commodo lacus auctor vitae. Curabitur et interdum sem, ut egestas sapien. Integer sem magna, iaculis eget venenatis at, egestas non eros. Suspendisse erat ipsum, volutpat quis nisi sed, pulvinar vestibulum dui. Fusce porttitor iaculis malesuada. In dignissim sit amet ante nec rutrum. Pellentesque vel maximus diam. Ut id pellentesque libero, a rutrum ante. Donec id nulla diam.",
            isOpen: "True"
          },

          item3: {
            question: "What kind of services do we provide?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum odio purus, nec commodo lacus auctor vitae. Curabitur et interdum sem, ut egestas sapien. Integer sem magna, iaculis eget venenatis at, egestas non eros. Suspendisse erat ipsum, volutpat quis nisi sed, pulvinar vestibulum dui. Fusce porttitor iaculis malesuada. In dignissim sit amet ante nec rutrum. Pellentesque vel maximus diam. Ut id pellentesque libero, a rutrum ante. Donec id nulla diam.",
            isOpen: "True"
          },

        }
    }
  }
  }
</script>