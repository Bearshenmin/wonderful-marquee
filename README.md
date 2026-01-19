# 非常好的跑馬燈
## 概述
這是一個跑馬燈網頁，展示以下內容：

- 新聞：公視新聞 RSS feed 跑馬燈
- 天氣：即時天氣 + 天氣預報
- 地震報告：最新地震報告
- 跑馬燈效果：優雅的滾動展示界面

## 結構

```
wonderful-marquee/
├── server.js          # 後端服務器
├── package.json       # 項目依賴配置
├── README.md
└── public/
    └── index.html     # 前端主頁面
```

後端：Node.js + Express 5.2.1

前端：HTML5 + CSS3 + JavaScript

字體：Google Fonts (Huninn)

API 來源：

- PTS 新聞 RSS: [](https://news.pts.org.tw/xml/newsfeed.xml)
- ExpTech API: 天氣與地震數據

## 啟動方式
```
npm install
npm start
```
