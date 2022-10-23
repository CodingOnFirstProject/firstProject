const form = document.querySelector(".wrap");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nickname = document.getElementById("nickname").value;
  const review = document.getElementById("review").value;

  const list = document.querySelector(".list");
  const reviews = document.querySelector(".reviews");
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const side = document.querySelector(".side");

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const rating1 = document.getElementById("rating1");
  const rating2 = document.getElementById("rating2");
  const rating3 = document.getElementById("rating3");
  const rating4 = document.getElementById("rating4");
  const rating5 = document.getElementById("rating5");

  const divReviews = document.createElement("div");
  divReviews.classList.add("reviews"); // div.reviews 생성
  const divLeft = document.createElement("div");
  divLeft.classList.add("left"); // div.left 생성
  const divRight = document.createElement("div");
  divRight.classList.add("right"); // div.right 생성
  const divSide = document.createElement("div");
  divSide.classList.add("side"); // div.side 생성

  const pericon = document.createElement("div");
  pericon.innerHTML = '<i class="bi bi-person-circle"></i>';
  pericon.classList.add("icon2");
  const pernick = document.createElement("div");
  pernick.textContent = nickname;
  pernick.classList.add("nickname"); // div.nickname 생성 후 nickname value값 삽입

  const pertxt = document.createElement("div");
  pertxt.textContent = review;
  pertxt.classList.add("textreview"); // div.txtreview 생성 후 txtreview value값 삽입

  const perstar = document.createElement("div");

  const star1 = rating1.checked;
  const star2 = rating2.checked;
  const star3 = rating3.checked;
  const star4 = rating4.checked;
  const star5 = rating5.checked;

  if (star5 == true) {
    perstar.innerHTML = '<img src="/static/img/5점.png" alt ="별점이미지">';
    console.log("5");
  } else if (star4 == true && star5 != true) {
    perstar.innerHTML = '<img src="/static/img/4점.png" alt ="별점이미지">';
    console.log("4");
  } else if (star3 == true && star4 != true) {
    perstar.innerHTML = '<img src="/static/img/3점.png" alt ="별점이미지">';
    console.log("3");
  } else if (star2 == true && star3 != true) {
    perstar.innerHTML = '<img src="/static/img/2점.png" alt ="별점이미지">';
    console.log("2");
  } else if (star1 == true && star2 != true) {
    perstar.innerHTML = '<img src="/static/img/1점.png" alt ="별점이미지">';
    console.log("1");
  } else {
    perstar.textContent = "";
    console.log("0");
  }
  perstar.classList.add("stars"); // div.stars 생성 후 stars value값 삽입

  const perdate = document.createElement("div");
  perdate.textContent = `${year}.${month + 1}.${day}`;
  perdate.classList.add("dates"); // div.dates 생성 후 dates value값 삽입

  const makeBtn = document.createElement("button");
  makeBtn.innerHTML = "삭제";
  makeBtn.classList.add("deletBtn");
  // 삭제버튼을 누르면 발생하는 이벤트 만들기
  makeBtn.addEventListener("click", (event) => {
    // 삭제버튼을 클릭하면 이벤트 발생

    const btn = event.target; // => 그 이벤트 발생의 'target'을 btn 변수에 선언
    console.log(btn); // 콘솔창을 띄우면 버튼 태그가 출력됨

    const deleteAll = btn.parentNode; // btn의 부모 노드 => commentDiv(버튼 태그를 감싸는 상위태그)

    list.removeChild(deleteAll);
    // commentDiv를 감싸는 상위 태그 => comment,  comment의 자식 노드를 삭제한다 => deleteAll을(commentDiv태그를)

    // 결과적으로 삭제버튼을 클릭하면 그 삭제버튼을 포함하는 부모태그 commentDiv 자체가 지워져서
    // 원하는 댓글을 삭제할 수 있다.
  });

  list.append(divReviews);
  if (nickname === "" || review === "") {
    perdate.textContent = "";
    pericon.innerHTML = "";
  } // nickname value와 review value가 없을때 date출력되지 않게끔
  divReviews.append(divLeft, divRight);

  divLeft.append(pericon, pernick);
  divRight.append(pertxt, divSide);
  divSide.append(perstar, perdate, makeBtn);

  //별점 선택 안했으면 메시지 표시
  if (rating.rate == 0) {
    alert("별점을 선택해주세요!");
    return false;
  }
  //리뷰 5자 미만이면 메시지 표시
  if (document.getElementById("review").value.length < 5) {
    alert("리뷰를 5자 이상 써주세요!");
    return false;
  }
  if (rating.rate != 0 && document.getElementById("review").value.length < 5) {
    alert("리뷰등록이 완료되었습니다!");
  }

  // document.getElementById("nickname").value = "";
  // document.getElementById("review").value = "";
  $("form[name='review']").each(function () {
    this.reset();
  }); // 등록 눌렀을때 폼 초기화
});

document.getElementById("review").addEventListener("keydown", function () {
  //리뷰 20자 초과 안되게 자동 자름
  let reviewLength = document.getElementById("review");

  let lengthCheckEx = /^.{20,}$/;
  if (lengthCheckEx.test(reviewLength.value)) {
    //20자 초과 컷
    reviewLength.value = reviewLength.value.substr(0, 20);
  }
});

function Rating() {}
Rating.prototype.rate = 0;
Rating.prototype.setRate = function (rateobj, newrate) {
  //별점 마킹 - 클릭한 별 이하 모든 별 체크 처리
  this.rate = newrate;
  let checks = null;
  //요소가 파라메터로 넘어오면 별점 클릭, 없으면 저장 후 전체 초기화
  if (rateobj) {
    rateobj.querySelector(".ratefill").style.width =
      parseInt(newrate * 60) + "px"; // 현재 별점 갯수 채색
    checks = rateobj.querySelectorAll(".rate_radio"); // 넘어온 요소 하위의 라디오버튼만 선택
  } else {
    //전체 별점 채색 초기화
    const rateFills = document.querySelectorAll(".ratefill");
    rateFills.forEach(function (item) {
      item.style.width = parseInt(newrate * 60) + "px"; //
    });
  }

  //별점 체크 라디오 버튼 처리
  if (checks) {
    checks.forEach(function (item, idx) {
      if (idx < newrate) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    });
  }
};
let rating = new Rating(); //별점 인스턴스 생성
document.addEventListener("DOMContentLoaded", function () {
  //별점선택 이벤트 리스너
  const rateForms =
    document.querySelectorAll(".rating"); /* 별점 선택 템플릿을 모두 선택 */
  rateForms.forEach(function (item) {
    //클릭 이벤트 리스너 각각 등록
    item.addEventListener("click", function (e) {
      let elem = e.target;
      if (elem.classList.contains("rate_radio")) {
        rating.setRate(elem.parentElement, parseInt(elem.value)); // setRate() 에 ".rating" 요소를 첫 번째 파라메터로 넘김
      }
    });
  });

  $(".nickForm").submit(function (e) {
    e.preventDefault();
    let nickVal = $(".nickInput").val();

    $(".nickInput").val("");

    $(".nickDiv").addClass("hidden");

    $(".welcDiv").removeClass("hidden");

    $(".welcDiv").text(`환영합니다 ${nickVal}님`);
    console.log(nickVal);
  });
});
