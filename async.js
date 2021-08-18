function esperarPor(tempo=2000) {
    return new Promise((resolve) => {
            
           setTimeout(()=>{
               resolve()
           }, tempo)
      
    })
}

// esperarPor(2000)
// .then(()=>console.log('Executando Promise'))
// .then(esperarPor)
// .then(()=>console.log('Executando Promise'))
// .then(esperarPor)
// .then(()=>console.log('Executando Promise'))

async function executar(){
    await esperarPor(2000)
    console.log('Async 1');

    await esperarPor(2000)
    console.log('Async 2');

    await esperarPor(2000)
    console.log('Async 3');

}

executar()