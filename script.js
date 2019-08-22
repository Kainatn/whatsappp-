
axios.get('https://tk-whatsapp.herokuapp.com/messages')
.then(function (response) {
  // handle success
  console.log("sUCESS");
  console.log(response);
  for (let index = 0; index < response.data.length; index++) {
      //const element = response.data[i];
    let message = response.data[index];
      document.querySelector("ul").innerHTML += `
      <li>
      <h4>${message.name}</h4>
      <p>${message.number}</p>
      <p>${message.firdtLine}</p>
      <p>${message.time}</p>
      <img src="${message.profilePic}">
      </li>
      `
  }
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.finally(function () {
  // always executed
  console.log("fINAL");
});


