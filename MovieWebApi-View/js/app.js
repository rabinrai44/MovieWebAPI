function getMovie() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "http://localhost:50621/api/Movies", true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);

      let output = "";

      const movie = JSON.parse(this.responseText);
      movie.forEach(element => {
        output += `         
          
            <ul class="list-group"><li class="list-group-item">${
              element.Title
            }</li></ul>
                
            `;
      });

      document.getElementById("movie").innerHTML = output;
    }
  };

  xhr.send();
}

function getCategory() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "http://localhost:50621/api/Movies", true);

  xhr.onload = function() {
    if (this.status === 200) {
      let output = "";
      let cat = document.querySelector(".search_category").value;

      const movie = JSON.parse(this.responseText);
      movie.forEach(element => {
        if (element.Category === cat)
          output += `          
            <ul class="list-group">
                <li class="list-group-item">${element.Title}</li>
            </ul>
             
            `;
      });

      document.getElementById("movie").innerHTML = output;
    }
  };

  xhr.send();
}
