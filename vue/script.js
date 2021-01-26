var slider = new Vue({
  el: '#slider',
  data: {
    immagine: [
      'https://www.viaggiatoriweb.it/wp-content/uploads/2020/03/isole-azzorre-portogallo.jpg',
      'https://www.columbusassicurazioni.it/media/31269/azzorret3.jpg',
      'https://www.beborghi.com/wp-content/uploads/2018/11/beborghi_azzorre_sao-miguel_miradouro-setes-citades-900x600.jpg',
      'https://images1.bovpg.net/r/back/it/sale/5e4a525697f71o.jpg'
    ],
    contatore: 3
  },
  methods: {
    precedente: function(){
      console.log(this.contatore);
      if (this.contatore < 0) {
        this.contatore = this.immagine.length
      } else {
        this.contatore--;
      }
    }
  }
});

// this.contatore++;
// if (this.contatore > this.immagine.length -1) {
//   alert('ci')
// }
