
Pi.init({ version: "2.0", sandbox: false });

function authenticatePiUser() {
    const scopes = ["username", "wallet_address"];
    Pi.authenticate(scopes, function(auth) {
        console.log("✅ مصادقة ناجحة:", auth);
        alert("تم تسجيل الدخول باسم: " + auth.user.username + "\nLogged in as: " + auth.user.username);
    }, function(error) {
        console.error("❌ فشل المصادقة:", error);
        alert("فشل تسجيل الدخول. Authentication failed.");
    });
}
