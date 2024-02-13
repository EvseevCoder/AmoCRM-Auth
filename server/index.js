const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const app = express();
const port = 3000;

app.use(express.json());

// Замените эти значения на данные вашего приложения в amoCRM
const clientId = "58c2517b-dce9-41b0-88ba-bd02e92e5a5c";
const clientSecret =
  "Rbxr4Ht7S9k1mS0ibbBmh1bM31uhvW7uRbXD9QZ0zQ1vtHJkAY1ZY6OcBYVc4k8E";
const redirectUri = "https://amo-crm-auth.vercel.app/"; // Этот адрес должен быть зарегистрирован в вашем приложении amoCRM

// Маршрут для инициирования процесса OAuth
app.get("/auth", (req, res) => {
  const authUrl = `https://www.amocrm.ru/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&mode=post_message`;
  res.redirect(authUrl);
});

// Маршрут для обработки редиректа с кодом авторизации
app.get("/oauth2/callback", async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send("Код авторизации не получен.");
  }

  try {
    const response = await fetch("https://www.amocrm.ru/oauth2/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUri,
      }),
    });

    const data = await response.json();

    if (data.access_token) {
      console.log("AccessToken:", data.access_token);
      res.send("AccessToken получен. Проверьте консоль сервера.");
    } else {
      throw new Error("Не удалось получить AccessToken");
    }
  } catch (error) {
    console.error("Ошибка при получении AccessToken:", error);
    res.status(500).send("Внутренняя ошибка сервера при получении AccessToken");
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
