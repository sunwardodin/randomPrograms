function dnaStrand(dna){
    let newRna = ""
    for (let i = 0; i <= dna.length; i++){
      if (dna[i] == "A"){
        newRna += "T"
      } else if (dna[i] == "T"){
        newRna += "A"
      } else if (dna[i] == "G"){
        newRna += "C"
      } else if (dna[i] == "C"){
        newRna += "G"
      }
    }
    return newRna
  }

  console.log(dnaStrand("AATTGGCC"))