// url = "https://modelingmonstera.amocrm.ru/api/v4/leads?page=1&limit=10";
// options = null;

// fetch(url, options)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// const subdomain = "modelingmonstera"; // Поддомен нужного аккаунта
// const url = `https://${subdomain}.amocrm.ru/oauth2/access_token`; // Формируем URL для запроса

// // Соберем данные для запроса
// const data = {
//   client_id: "31557362",
//   client_secret:
//     "Rbxr4Ht7S9k1mS0ibbBmh1bM31uhvW7uRbXD9QZ0zQ1vtHJkAY1ZY6OcBYVc4k8E",
//   grant_type: "authorization_code",
//   code: "def502005832a5cc94910d779bfd48dcfdbccf893b5ab66f3c8ec824a878398e6534325d930dca9f542b5dd0b986985d9e844f039f5b582a1afbf3c4bc594d159703e7679728c2672fb72904ea063f2562ee8d13da171a608a8183064166dd0a8e7be14ed034b3ccf7423f57aff46000c7f976c3fb38726fc795e4c8ce11d479abe386475d2c7061653facc11e7352300db5095bc727da4d8866616f86432bf12575fd813c934aa5c42d6d9dcf0603a9cf1a6aae0644cd110ec990ddb825b531fa2db603d5f46ec56a8146075bdd58e1bb0ada8ad8b1f4a2023bc27eab36299bddc901fca29da987d007fa3f21cd7115a2639e6b0bfdacf7425c25cdfd33d0f50c791e1b054a2f1dac80b78fed672c58f961e245373d5e8458fdb00568556bdb4b4f652fbbd7f188e07abe8dba1e0d8d5a3d8968a7ec20912b5332b9bff138f3c4b7a7835d3c4989803fe0cd55b1b2e236c36dced3a2c8e81b030e74781d1243c29f152cc8a00e2279f981a2654005cff492d60f78e6159647fb8555586686ecbeb54e454827536cbf66c3651e23b8a87f4c8e75b7e0a22c35f80f5db1611f68ba2864000a25f55b268ea56e0a152f1dba249cf6da42c220f28c64f7796f26b944ff719a72ce1b4a5d289de914d1879f36084f774716540f0bf7917d9f9ab1bf3d7ed2059e7a",
//   redirect_uri: "https://test.ru/",
// };

// // Выполняем POST-запрос
// fetch(url, {
//   method: "POST", // Метод запроса
//   headers: {
//     "Content-Type": "application/json",
//     "User-Agent": "amoCRM-oAuth-client/1.0",
//     "Access-Control-Allow-Headers": "*",
//   },
//   body: JSON.textingify(data), // Преобразуем данные в строку JSON
// })
//   .then((response) => {
//     if (!response.ok) {
//       // Если сервер вернул код ответа, который не является успешным, выбрасываем ошибку
//       const errors = {
//         400: "Bad request",
//         401: "Unauthorized",
//         403: "Forbidden",
//         404: "Not found",
//         500: "Internal server error",
//         502: "Bad gateway",
//         503: "Service unavailable",
//       };
//       throw new Error(errors[response.status] || "Undefined error");
//     }
//     return response.json(); // Парсим тело ответа как JSON
//   })
//   .then((data) => {
//     // Обработка успешного ответа
//     console.log("Access Token:", data.access_token);
//     console.log("Refresh Token:", data.refresh_token);
//     console.log("Token Type:", data.token_type);
//     console.log("Expires In:", data.expires_in);
//   })
//   .catch((error) => {
//     // Обработка ошибок сети и HTTP статусных ошибок
//     console.error("Ошибка:", error.message);
//   });

function countWords(text) {
  let wordCounts = {};
  let currentWord = "";

  for (let i = 0; i <= text.length; i++) {
    if (i < text.length && text[i] != " ") {
      currentWord += text[i];
    } else if (currentWord.length >= 0) {
      wordCounts[currentWord] = (wordCounts[currentWord] || 0) + 1;
      currentWord = "";
    }
  }

  for (let word in wordCounts) {
    console.log(`${word} - ${wordCounts[word]}`);
  }
}

let text = "apple banana orange orange apple";
countWords(text);

// const apiURL = `https://www.amocrm.ru/oauth?client_id=10651566&redirect_uri=http://127.0.0.1:5500/index.html&response_type=code&state=1234`;

// const tokenUrl = "https://www.amocrm.ru/oauth2/access_token";
// const data = {
//   client_id: "10651566",
//   client_secret:
//     "Rbxr4Ht7S9k1mS0ibbBmh1bM31uhvW7uRbXD9QZ0zQ1vtHJkAY1ZY6OcBYVc4k8E",
//   grant_type: "authorization_code",
//   code: "",
//   redirect_uri: "http://127.0.0.1:5500/index.html",
// };

// fetch(apiURL)
//   .then((response) => {
//     console.log(response);
//   })
//   .then(() => {
//     fetch(tokenUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log("Токен доступа:", data))
//       .catch((error) => console.error("Ошибка:", error));
//   });

function redirectToAuthorizationPage() {
  const client_id = "10651566";
  const redirect_uri = encodeURIComponent("http://127.0.0.1:5500/index.html");
  const response_type = "code";
  const state = "1234"; // Используйте уникальное значение для защиты от CSRF
  const authUrl = `https://www.amocrm.ru/oauth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&state=${state}`;

  window.location.href = authUrl;
}

// Можете вызвать эту функцию при нажатии на кнопку или при определённом условии
// redirectToAuthorizationPage();

document.addEventListener("DOMContentLoaded", function () {
  redirectToAuthorizationPage();
  const queryParams = new URLSearchParams(window.location.search);
  const authCode = queryParams.get("code");

  if (authCode) {
    console.log("Код авторизации получен: ", authCode);
    const tokenUrl = "https://www.amocrm.ru/oauth2/access_token";
    const data = {
      client_id: "10651566",
      client_secret:
        "Rbxr4Ht7S9k1mS0ibbBmh1bM31uhvW7uRbXD9QZ0zQ1vtHJkAY1ZY6OcBYVc4k8E",
      grant_type: "authorization_code",
      code: authCode,
      redirect_uri: "http://127.0.0.1:5500/index.html",
    };

    fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Токен доступа получен: ", data);
        // Токен доступа теперь можно использовать для выполнения API-запросов
      })
      .catch((error) =>
        console.error("Ошибка при получении токена доступа: ", error)
      );
  } else {
    console.error("Код авторизации не получен.");
    // Здесь можно реализовать логику повторного перенаправления на страницу авторизации
  }
});
