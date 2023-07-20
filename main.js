const loginorout = document.getElementById("loginText")

if(window.localStorage.getItem("token")){
    loginorout.appendChild(`<a href="./login.html">Logout</a>`)
}

fetch('https://43.201.5.234:8080/products')
  .then(response => response.json())
  .then(data => {
    // 데이터를 기반으로 HTML 요소 생성
    const tags = data.map(item => {
      const tag = document.createElement('div');
      tag.textContent = item.name;
      return tag;
    });
    console.log(tags)
  })


  .catch(error => {
    console.error('API 요청 중 오류 발생:', error);
  });