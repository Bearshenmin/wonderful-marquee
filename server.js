const express = require("express");
const fetch = require("node-fetch");

const app = express();

/* ✅ 開 CORS */
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

/* 📁 靜態文件服務 */
app.use(express.static("public"));

app.get("/rss", async (req, res) => {
    const r = await fetch("https://news.pts.org.tw/xml/newsfeed.xml");
    const text = await r.text();
    res.send(text);
});

app.get("/forecast", async (req, res) => {
    const r = await fetch("https://api.exptech.dev/api/v3/weather/forecast/730");
    const json = await r.json();
    res.json(json);
});

app.get("/weather", async (req, res) => {
    const r = await fetch("https://api.exptech.dev/api/v3/weather/realtime/23.31,120.32");
    const json = await r.json();
    res.json(json);
});

app.get("/eq-report", async (req, res) => {
    const r = await fetch("https://api.exptech.dev/api/v1/eq/report");
    const json = await r.json();
    res.json(json);
});

app.listen(3000, () => {
    console.log("Service running 👉 http://localhost:3000");
});
