const p = new Promise((resolve, reject) => {
  return reject(Error('The Fails!'))
})

p.catch(error => console.log(error.message))
p.catch(error => console.log(error.message))
