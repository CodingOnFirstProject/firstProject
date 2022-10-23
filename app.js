const express = require("express");

const app = express();

const PORT = 8300; // 포트번호

app.set("view engine", "ejs"); //app에 view engine을 ejs로 설정
app.use("/views", express.static(__dirname + "/views")); // ejs 파일을 저장할 views 폴더의 경로

//브라우저가 ip:port/stztic/image/cat.jpg
//해당 파일을 ip:port/static/image/cat.jpg 에 존재하는지 찾음
app.use("/static", express.static(__dirname + "/static"));

// app.get('/',function(request, response){
//     //client가 get 요청을 보내면 -> 응답으로 send('안에 있는 메서지')를 띄운다
//     // response.send('connect success');
//     response.render('sights')
// })

app.get("/", function (request, response) {
  //client가 get 요청을 보내면 -> 응답으로 send('안에 있는 메서지')를 띄운다
  // response.send('connect success');
  response.render("main");
});

app.get("/sights", function (request, response) {
  response.render("sights");
});

app.get("/review", function (request, response) {
  response.render("review");
});

app.get("/sights2", function (request, response) {
  response.render("sights2");
});

app.get("/sights3", function (request, response) {
  response.render("sights3");
});

app.get("/sights4", function (request, response) {
  response.render("sights4");
});

app.get("/weather", function (request, response) {
  response.render("weather");
});
app.get("/exchangeRate", function (request, response) {
  response.render("exchangeRate");
});
app.get("/loading", function (request, response) {
  response.render("loading");
});
app.get("/prac", function (request, response) {
  response.render("prac");
});

app.get("/Popup", function (request, response) {
  response.render("Popup");
});

app.get("/country", function (request, response) {
  response.render("country");
});

app.get("/food", function (request, response) {
  response.render("food");
});

//로컬 서버 동작
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
