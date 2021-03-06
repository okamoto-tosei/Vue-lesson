const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The title',
      author: 'Brandon Sanderson',
      age: 45,
      x: 0,
      y: 0,
      url: 'http://www.thenetninja.co.uk',
      books: [
        {
          title: 'name of the wind',
          author: 'patrick rothfuss',
          img: 'assets/1.jpeg',
          isFav: true,
        },
        {
          title: 'the way of kings',
          author: 'brandon sanderson',
          img: 'assets/2.jpeg',
          isFav: false,
        },
        {
          title: 'the final empire',
          author: 'brandon sanderson',
          img: 'assets/3.jpeg',
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      console.log(e);
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    boolChange(item) {
      console.log(item);
      item.isFav = !item.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount('#app');
