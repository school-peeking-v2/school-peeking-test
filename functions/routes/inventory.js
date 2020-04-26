// let itemList = "";
// let itemName = ["신입생", "2학년", "미림인", "3학년", "취준생", "탈미림"];
// let name, loginUserKey, userInfo, user_item, user_coupon, user_exp, user_quiz, user_current;

// /*
// * inventory 개발자 : 강혜정
// * inventory는 회원 정보를 가지고 해야하기 때문에 진짜 선배님 코드를 보고 수정한 거에 불과함
// * 파이어베이스는 이전 코드와 같음
// * 그니깐 만약 작동이 안 되거나 이상하게 될 시에 파이어베이스 연결 후 저에게 연락 부탁
// * 왜 이렇게 짰는지 궁금해도 연락 가능
// * */

// function userSessionCheck_inven() {
//     firebaseEmailAuth.onAuthStateChanged(function(user) {
//         if (user) {
//             firebaseDatabase.ref("users/" + user.uid).once('value').then(function (snapshot) {
//                 console.log(snapshot);
//                 name = snapshot.child("name").val();
//                 loginUserKey = snapshot.key;
//                 userInfo = snapshot.val();

//                 user_item = userInfo.items;
//                 user_coupon = userInfo.coupon;
//                 user_exp = userInfo.exp;
//                 user_quiz = userInfo.quiz;
//                 user_current = userInfo.current_img;

//                 chkItem();
//                 return true
//             });
//         } else {
//         }
//     });
// }

// function chkItem() {
//     itemList += "<div class='row'>";
//     for (let i = 0 ; i < user_item.length ; i++) {
//         itemList += "<div class='col-md' onclick='chgItem(" + i + ")'><div class='inven-item'><img class='item-img' src='img/item" + user_item[i] + ".png' id='img" + i + "'><div class='inven-item-name'>" + itemName[i] + "</div></div></div>";
//     }
//     itemList += "/div>";

//     document.getElementById("inven-me").src = "images/character"+user_current+".png";
//     document.getElementById("inven-inst").innerHTML = "원하는 아이템을 클릭하면, 현재 모습이 바뀝니다!";
//     document.getElementById("inven-list").innerHTML = itemList;
// }

// function chgItem(num) {
//     var ref = firebaseDatabase.ref("users/"+loginUserKey);

//     let obj = {
//         name: name,
//         exp: user_exp,
//         items: user_item,
//         coupon: user_coupon,
//         quiz: user_quiz,
//         current_img: num
//     };
//     ref.set(obj);
// }

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('inventory');
});

module.exports = router;
