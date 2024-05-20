const express = require('express');
const cors = require('cors');
const http = require('http');

const port = 3000;
const mainRouter = require('./routes/mainRoute.js');
const app = express();

var server = http.createServer(app);

global.accessKey = 'pk_47db1f1ebeb14c2aa7bafd398b030a75';
global.secretKey = 'sk_4ef7fc1d46f043c08bdd1b065535a120';

app.use(cors({
    origin: ['http://localhost:3000'], 
    credentials: true // withCredentials 활성화
  }));


app.use('/', mainRouter);

  server.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})



//let investData = [];
// const sellRate = 0.025;
// const seedMoney = 30000000;
// const buyPointRate = 0.005;
//
// const fetchDate = () => {
//     axios.get(
//         `https://kr.investing.com/etfs/proshares-ultra-qqq-etf-historical-data`,
//     )
//     .then((data)=> {
//         const $ = cheerio.load(data.data);
//         let closePrice = [];
//         let marketPrice = [];
//         let highPrice = [];
//         let lowPrice = [];
//
//
//
//         let closeElement = $(".historical-data-v2_price__atUfP td:nth-child(2)");
//         let markeElement = $(".historical-data-v2_price__atUfP td:nth-child(3)");
//         let highElement = $(".historical-data-v2_price__atUfP td:nth-child(4)");
//         let lowElement = $(".historical-data-v2_price__atUfP td:nth-child(5)");
//
//         for(let i = 0; i < closeElement.length; i++) {
//             closePrice.push(closeElement.eq(i).text());
//
//         }
//
//         for(let i = 0; i < markeElement.length; i++) {
//             marketPrice.push(markeElement.eq(i).text());
//
//         }
//
//         for(let i = 0; i < highElement.length; i++) {
//             highPrice.push(highElement.eq(i).text());
//
//         }
//
//         for(let i = 0; i < lowElement.length; i++) {
//             lowPrice.push(lowElement.eq(i).text());
//
//         }
//
//         return {
//             closePrice : closePrice.reverse(),
//             marketPrice : marketPrice.reverse(),
//             highPrice : highPrice.reverse(),
//             lowPrice : lowPrice.reverse(),
//         }
//
//
//
//
//     })
//
// }
//
// fetchDate().then((data) => {
//     console.log(data);
// })
//
//
// const rateOfReturn = (
//     highPoint,
//     lowPoint,
//     endPoint,
//   ) => {
//     const buyPoint = lowPoint * buyPointRate + lowPoint;
//     const sellPoint = buyPoint * sellRate + buyPoint;
//     const minuxSellpoint = ((buyPoint - endPoint) / buyPoint) * seedMoney;
//     if (highPoint > sellPoint) {
//       console.log(
//         `seedMoney : ${seedMoney} 수익 : ${seedMoney * sellRate} 예수금 : ${seedMoney * sellRate + seedMoney}`,
//       );
//     } else {
//       console.log(
//         `종가 : ${endPoint} , 최고 도달 비율 : ${((highPoint - buyPoint) / buyPoint) * 100} 손실액 : ${seedMoney - minuxSellpoint}`,
//       );
//     }
//   };
//
// rateOfReturn(82.88, 81.61, 80.11);