
axios.get('https://tk-whatsapp.herokuapp.com/messages')
.then(function (response) {
  // handle success
  console.log("sUCESS");
  console.log(response);
  for (let index = 0; index < response.data.length; index++) {
      //const element = response.data[i];
    let message = response.data[index];
    
      document.querySelector("div").innerHTML += `
      
      <h2>${message.name}</h2>
      <img src="${message.profilePic}">
       <span>${message.numbUnread}</span>
     <p>${message.number}</p>
      <p>${message.firstLine}</p>
      <p>${message.time}</p>
      <hr>
    
  
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


