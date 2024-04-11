// Add your code here
function submitData(name, email){

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email
        })
    })
   .then((response) => response.json())
   .then( (object) => document.body.innerHTML = object[ "id" ])
   .catch( function ( error ) {
    document.body.innerHTML = error.message
  } )


};
