// ES6 Classes

const elena = {
  name: 'Elena',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

elena.normal()
elena.arrow()
