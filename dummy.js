  // define the callAPI function that takes a first name and last name as parameters
  var callAPI = (name,phone,email)=>{
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"Name":name,"phone":phone,"email":email});
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://bdx7i0im36.execute-api.ap-northeast-2.amazonaws.com/run/", requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}

let clickData = [
    {

    },{

    }
]