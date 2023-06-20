export const bordermixin = {
        data() {
          return {
            border: false
          };
        },
        methods: {
          toggle() {
            this.border = !this.border;
          }
        }

}    
  