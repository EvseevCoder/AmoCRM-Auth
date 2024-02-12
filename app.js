function redirectToAuthorizationPage() {
  const client_id = "10651566";
  const redirect_uri = encodeURIComponent("http://127.0.0.1:5500/index.html");
  const response_type = "code";
  const state = "1234"; // Используйте уникальное значение для защиты от CSRF
  const authUrl = `https://www.amocrm.ru/oauth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&state=${state}`;

  window.location.href = authUrl;
}

auth = document.querySelector(".auth");
auth.onclick = () => {
  console.log("auth");
  redirectToAuthorizationPage();
};

// Можете вызвать эту функцию при нажатии на кнопку или при определённом условии
// redirectToAuthorizationPage();

document.addEventListener("DOMContentLoaded", function () {
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
      redirect_uri: "https://amo-crm-auth.vercel.app/",
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
