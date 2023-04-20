function testRequest(){
    fetch('http://localhost:9090/test')
    .then(result => result.json())
    .then(json => console.log(json));
};