function queryBooks() {
    
    const QUERY = document.getElementById("query").value;
    const results = document.getElementById("res");
    var card = '';
    // results.innerHTML = QUERY;
    
    const URL = "https://www.googleapis.com/books/v1/volumes?q=" + QUERY
    
    var request = new XMLHttpRequest();
    
    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', URL, true);
    
    request.onload = function () {
        // Begin accessing JSON data here
        
        for (var i = 0; i < 10; i++) {
            var data = JSON.parse(this.response);
            // console.log(data)
            var authors = (data["items"][i]["volumeInfo"]["authors"])
            var title = (data["items"][i]["volumeInfo"]["title"])
            var publisher = (data["items"][i]["volumeInfo"]["publisher"])
            var thumbnail = data["items"][i]["volumeInfo"]["imageLinks"]["thumbnail"]
            var info = (data["items"][i]["volumeInfo"]["infoLink"])
            
            // results.innerHTML = authors + "<br>" + title + "<br>" + publisher + "<br>" + thumbnail + "<br>" + info + "<br>"
            
        card = document.createElement('div');
        card.setAttribute('class', 'card col-md-6');
        card.setAttribute('style', 'width: 32rem;');
        card.setAttribute('id', 'results');


        const logo = document.createElement('img');
        logo.src = thumbnail;
        logo.className = "card-img-top"
        // logo.align = "left"
        // console.log(thumbnail)
        card.appendChild(logo);
        
        const card_body = document.createElement('div');
        card_body.setAttribute('class', 'card-body');
        
        const card_title = document.createElement('h5');
        card_title.setAttribute('class', 'card-title');
        card_title.innerHTML = title;
        
        card_body.appendChild(card_title);
        
        const card_text = document.createElement('p');
        card_text.setAttribute('class', 'card-text');
        card_text.innerHTML = "By: " + authors + "<br>Published By: " + publisher;
        
        card_body.appendChild(card_text);
        
        const button = document.createElement('a');
        button.setAttribute('class', 'btn btn-primary btn-md');
        button.setAttribute('href', info);
        button.innerHTML = "See this Book"
        
        card_body.appendChild(button);

        card.appendChild(card_body);
        
        results.appendChild(card); }
    } 
    

    // Send request
    request.send()
    
}