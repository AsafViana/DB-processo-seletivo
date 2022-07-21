class Forca {
  constructor(gabarito) {
    this.gabarito = gabarito
    this.letrasChutadas = []
    this.vidas = 6
    this.palavra = []
    this.resultado = 'aguardando chute'

    let c =0
    while(c < this.gabarito.length){
      c++
      this.palavra.push('_')
    }
  }

  chutar(letra) { 
    if(letra.length == 1){
      if(!this.letrasChutadas.includes(letra)){
      this.letrasChutadas.push(letra)

        if (this.gabarito.includes(letra)){
          console.log("\nAcertou") 
          this.acertouLetra(letra)
        }
        else {
          this.vidas = this.vidas - 1
          console.log("\nErrou")
        }
      }
    }

    
  }

  verificaStatus(){ 
    if (this.vidas == 0){
      this.resultado = "perdeu"
    }
    else{
      if (!this.palavra.includes('_')){
        this.resultado = "ganhou"
      }
    }
  }

  acertouLetra(letra){ 
    let c = 0

    while(c < this.gabarito.length){
      if (letra === this.gabarito[c]){
        this.palavra[c] = letra
      }
      c++
    }
  }

  buscarEstado() { 
    this.verificaStatus()
    return this.resultado; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
