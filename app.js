const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The title',
      author: 'Brandon Sanderson',
      age: 45,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e) {
      console.log(e, e.type);
    },
  },
});

app.mount('#app');
