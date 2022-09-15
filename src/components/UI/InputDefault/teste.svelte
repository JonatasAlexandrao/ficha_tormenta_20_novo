function onKeyPress(e) {
  if(e.key === 'Enter') {
    e.target.blur()
  }

  const sizeDefault = (this.size / 10)
  const overflowed = this.clientWidth < this.scrollWidth
  
 // const increaseText = this.scrollWidth == this.clientWidth
  const minimumSize = fontSize <= (sizeDefault/2)
  const maximumSize = fontSize >= sizeDefault

  const reducedCharacters = previousValue.length > value.length

  if(overflowed) {
    console.log('diminue', this.clientWidth, this.scrollWidth)
    fontSize = (fontSize * .9)
    console.log(fontSize)
    console.log('minimumSize', minimumSize)
    console.log('maximumSize', fontSize >= sizeDefault)

    
    /*if(minimumSize){
      fontSize = (sizeDefault/1.5)
    }
    if(maximumSize){
      
      fontSize = sizeDefault
      /*console.log('max')
      console.log(fontSize)*//*
    }*/

    /*if(maximumSize) {
        //fontSize = sizeDefault
        console.log('wwwwww')
        console.log(maximumSize, fontSize, sizeDefault)
      }*/
         
  }
  else {
    if(reducedCharacters) {
      let amountErased = previousValue.length - value.length
      console.log(amountErased)
      console.log(fontSize)

      fontSize = (fontSize * (1.1 * amountErased))
      console.log('aumenta')
      /*if(maximumSize) {
        fontSize = sizeDefault
        console.log('aqui')
      }*/
      if(fontSize >= sizeDefault) {
      console.log('entrou no if')
      fontSize = sizeDefault
    }
      
    }

  }
  previousValue = this.value

}