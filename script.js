
axios.get('https://tk-whatsapp.herokuapp.com/messages')
  .then(function (response) {
    // handle success
    console.log("sUCESS");
    console.log(response);
    for (let index = 0; index < response.data.length; index++) {
      //const element = response.data[i];
      let message = response.data[index];

      document.querySelector("div").innerHTML += `
     <div id="img_div"> 
     <img src="${message.profilePic}"> <h2>${message.name}</h2> 
     </div>
     <div class="content"> 
    
     <p class="time-left">${message.time.slice(0, 8)}</p>
       <span id="countRead">${message.numbUnread}</span>
      <p id="firstLine">${message.firstLine}</p>  
    </div>
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


