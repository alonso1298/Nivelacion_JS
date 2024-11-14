

const url = 'https://jsonplaceholder.typicode.com/users';

// fetch(url, {
//     method: 'POST', // GET, POST, PUT, PATCH, DELETE
//     headers: { // Le podemos indicar al servidor que le estamos enviando datos en formato Json
//         //Recibe un objeto de configuracion, el contenido y el valor que le vamos acignar
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer aquideberiaexistiruntokendeautorizacion'
//     },
//     // body va a contener los datos que queremos enviar al servidor
//     body: JSON.stringify({
//         name: 'Perrito Feliz',
//         website: 'google.com'
//     })
// })
//     .then((response) => response.json())
//     .then(data => console.log(data));

const fn = async () => {
    const response = await fetch(url, {
        method: 'POST', // GET, POST, PUT, PATCH, DELETE
        headers: { // Le podemos indicar al servidor que le estamos enviando datos en formato Json
            //Recibe un objeto de configuracion, el contenido y el valor que le vamos acignar
            'Content-Type': 'application/json',
            'Authorization': 'Bearer aquideberiaexistiruntokendeautorizacion'
        },
        // body va a contener los datos que queremos enviar al servidor
        body: JSON.stringify({
            name: 'Perrito Feliz',
            website: 'google.com'
        })
    })
    const data = await response.json()
    console.log(data);
}
fn()