// const clientId = "58c2517b-dce9-41b0-88ba-bd02e92e5a5c";
// const clientSecret =
//   "Rbxr4Ht7S9k1mS0ibbBmh1bM31uhvW7uRbXD9QZ0zQ1vtHJkAY1ZY6OcBYVc4k8E";
// const redirectUri = "http://127.0.0.1:5500/index.html";
// const code = "ПОЛУЧЕННЫЙ_КОД_АВТОРИЗАЦИИ";

// fetch("https://modelingmonstera.amocrm.ru/oauth2/access_token", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     client_id: clientId,
//     client_secret: clientSecret,
//     grant_type: "authorization_code",
//     code: code,
//     redirect_uri: redirectUri,
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("AccessToken:", data.access_token);
//     console.log("RefreshToken:", data.refresh_token);
//   })
//   .catch((error) => console.error("Ошибка:", error));
