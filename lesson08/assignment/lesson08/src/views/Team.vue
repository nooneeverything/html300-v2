
<template>
  <div id="app">
    <section v-if="posts">
      <post
        v-for="post in posts"
        v-bind:post="post"
        v-bind:key="post.id"
        >
    </post>  
    </section>
  </div>
</template>

<script>
  import Post from '../components/ImagePage.vue';
  export default{
    name: "app",
    components:{  
      Post },
    data(){
      return{ 
        posts:[
          {title: "Roberta Evenson", id: 1,  src: require('../assets/images/image1.jpg') , alt: "image of a lawyer", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis enim, convallis at mi sed, finibus scelerisque felis. Etiam consequat nisi dui, venenatis porta erat consectetur eu. In sed lectus erat. Donec porttitor velit nec massa varius rhoncus. Vivamus orci nunc, commodo non mollis in, tristique sed neque. Aenean sollicitudin scelerisque mi quis pretium. In malesuada mauris sed ante ullamcorper lobortis. Duis erat nisi, varius sed bibendum non, vulputate et sem. Vestibulum ac mattis tortor. '},
          {title: "Robert Peterson",  id: 2, src: require('../assets/images/image2.jpg') , alt: "image of a lawyer", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis enim, convallis at mi sed, finibus scelerisque felis. Etiam consequat nisi dui, venenatis porta erat consectetur eu. In sed lectus erat. Donec porttitor velit nec massa varius rhoncus. Vivamus orci nunc, commodo non mollis in, tristique sed neque. Aenean sollicitudin scelerisque mi quis pretium. In malesuada mauris sed ante ullamcorper lobortis. Duis erat nisi, varius sed bibendum non, vulputate et sem. Vestibulum ac mattis tortor. '},
          {title: "Rebecca Stevens",  id: 3, src: require('../assets/images/image3.jpg') , alt: "image of a lawyer", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis enim, convallis at mi sed, finibus scelerisque felis. Etiam consequat nisi dui, venenatis porta erat consectetur eu. In sed lectus erat. Donec porttitor velit nec massa varius rhoncus. Vivamus orci nunc, commodo non mollis in, tristique sed neque. Aenean sollicitudin scelerisque mi quis pretium. In malesuada mauris sed ante ullamcorper lobortis. Duis erat nisi, varius sed bibendum non, vulputate et sem. Vestibulum ac mattis tortor. '},
        ]
      }
    }
  }
</script> 