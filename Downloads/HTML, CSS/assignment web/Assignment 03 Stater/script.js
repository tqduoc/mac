"use strict";

// thông tin cá nhân

const info = document.querySelector(".info");
const right = document.querySelector(".right");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

info.classList.add("hidden");

const displayMessage = function (error) {
  document.querySelector(".error-email").textContent = error;
};

document.querySelector(".submit").addEventListener("click", function () {
  const email = document.querySelector("#email").value;
  console.log(email);

  //dùng match để kiểm tra email
  const check = email.match(regex);

  if (!email) {
    displayMessage("Chưa nhập email !");

    document.querySelector(".error-email").style.color = "red";
  } else if (check) {
    info.classList.remove("hidden");
    right.classList.add("hidden");
  } else if (!check) {
    displayMessage("Không đúng định dạng !");

    document.querySelector(".error-email").style.color = "red";
  }
});

// ẩn thông tin nghề nghiệp

function mouseIn(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}

function mouseOut(element) {
  const viewMore = element.querySelector(".control-view");

  if (!viewMore.classList.value.includes("less-more")) {
    viewMore.style.display = "none";
  }
}

// khi click vào view more, less more
function clickViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".control-view");
  const sectionControl = parentElement.querySelectorAll(".section-content");

  if (viewMore.classList.value.includes("view-more")) {
    sectionControl.forEach((element) => {
      element.style.display = "block";
    });

    viewMore.classList.add("less-more");
    viewMore.classList.remove("view-more");

    viewMore.textContent = "LESS MORE";
  } else {
    sectionControl.forEach((element) => {
      element.style.display = "none";
    });

    viewMore.classList.remove("less-more");
    viewMore.classList.add("view-more");

    viewMore.textContent = "VIEW MORE";
  }
}
