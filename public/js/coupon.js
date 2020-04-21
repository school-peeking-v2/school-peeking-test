let itemList = "";

function userSessionCheck_inven() {
    firebaseEmailAuth.onAuthStateChanged(function(user) {
        if (user) {
            firebaseDatabase.ref("users/" + user.uid).once('value').then(function (snapshot) {
                console.log(snapshot);
                name = snapshot.child("name").val();
                loginUserKey = snapshot.key;
                userInfo = snapshot.val();

                user_item = userInfo.items;
                user_coupon = userInfo.coupon;
                user_exp = userInfo.exp;
                user_quiz = userInfo.quiz;
                user_current = userInfo.current_img;

                chkItem();
                return true
            });
        } else {
        }
    });
}