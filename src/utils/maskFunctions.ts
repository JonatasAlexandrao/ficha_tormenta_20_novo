

function maskMoney( inputValue:number ) :number {

  inputValue.replace(/[^0-9]/g, '')
      let num = inputValue.toString()

      if(num == '' || num.length < 3) {
        num = '0,00'
      }

      num = num.replace(/[^0-9]/g, '')

      num = num.replace(',', '')
      num = num.replace('.', '')

      num = num.replace(/(^\d{2}$)/g, '0,'+'$1')
      num = num.replace(/(\d)(\d{2}$)/g, '$1'+','+'$2')
      num = num.replace(/(00,)(\d{2}$)/g, '0,'+'$2')
      num = num.replace(/(0)(\d{1})(,)(\d{2}$)/g, '$2'+'$3'+'$4')
      num = num.replace(/(\d)(\d{3})(,\d{2}$)/g, '$1'+'.'+'$2'+'$3')

      inputValue = num

  return inputValue
}


export { maskMoney }