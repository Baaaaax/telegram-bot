const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());

require("dotenv").config();
process.env.NTBA_FIX_319 = 1;
process.env["NTBA_FIX_350"] = 1;
const { getMessageFromString } = require("./utilities");
const fs = require("fs");

const blandoAudio = "./media/audio/blandoAudio.ogg";
const dislessiaAudio = "./media/audio/dislessiaAudio.ogg";
const ketamaImg1 = "./media/img/ketama1.png";
const ketamaImg2 = "./media/img/ketama2.png";
const ketamaImg3 = "./media/img/ketama3.png";
const linusImg1 = "./media/img/linusImg1.jpg";
const linusImg2 = "./media/img/linusImg2.jpg";
const linusImg3 = "./media/img/linusImg3.jpg";
const linusImg4 = "./media/img/linusImg4.jpg";
const baxImg = "./media/img/baxImg.jpg";
const tiltImg = "./media/img/tiltImg1.jpg";
const lunaImg1 = "./media/img/lunaImg1.jpg";

const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  if (msg.text) {
    const message = getMessageFromString(msg.text.toLowerCase());
    if (message) {
      switch (message) {
        case "sylok":
          bot.sendMessage(
            chatId,
            "E' andata via la luce al locale regà , assurdo!"
          );
          break;
        case "blando":
        case "blaando":
          const blandoFileOptions = {
            // Explicitly specify the file name.
            filename: "blandoAudio",
            // Explicitly specify the MIME type.
            contentType: "audio/ogg",
          };
          bot.sendAudio(chatId, blandoAudio, {}, blandoFileOptions);
          break;
        case "blade":
          bot.sendMessage(chatId, "UE UAJò FARMIAM U PLAGIAMENT");
          break;
        case "rehab":
          bot.sendMessage(chatId, "SESSO DROGA AMORE!");
          break;
        case "palla":
          bot.sendMessage(chatId, "INSTA SHOP");
          break;
        case "issue":
          bot.sendMessage(chatId, "Li risolvo tutti zi!");
          break;
        case "caffettino":
        case "caffe":
        case "caffè":
          bot.sendMessage(chatId, "Uè figa caffettinoo ?");
          break;

        case "baxs":
        case "baks":
        case "bax":
        case "bex":
        case "bacs":
        case "becs":
          bot.sendMessage(chatId, "AO");
          break;
        case "rudy":
          bot.sendMessage(chatId, "AMORE PATATO");
          break;
        case "fortnite":
          bot.sendMessage(chatId, "Scala muro scala muro");
          break;
        case "overwatch":
          bot.sendMessage(chatId, "BEST GIOCO EVAH!");
          break;
        case "genji":
          bot.sendMessage(chatId, "DASH ZACCAGNATA DASH ZACCAGNATA!");
          break;
        case "dislessia":
        case "dislessico":
          const dislessiaFileOptions = {
            // Explicitly specify the file name.
            filename: "dislessiaAudio",
            // Explicitly specify the MIME type.
            contentType: "audio/ogg",
          };
          bot.sendAudio(chatId, dislessiaAudio, {}, dislessiaFileOptions);
          break;
        case "rlaru":
          bot.sendMessage(
            chatId,
            "IL GRANDE, MITICO, INIMITABILE RLARUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU!"
          );
          break;
        case "ketama":
          const ketamaArrayImg = [ketamaImg1, ketamaImg2, ketamaImg3];

          let ketImg =
            ketamaArrayImg[Math.floor(Math.random() * ketamaArrayImg.length)];

          const ketamaFileOptions = {
            // Explicitly specify the file name.
            filename: "ketama",
            // Explicitly specify the MIME type.
            contentType: "image/png",
          };
          bot.sendPhoto(chatId, ketImg, {}, ketamaFileOptions);
          break;
        case "126":
          bot.sendMessage(chatId, "HIHIHI LOVEGANG");
          break;
        case "38":
          bot.sendMessage(chatId, "Già t'accollavi nbotto!");
          break;
        case "vero":
          bot.sendMessage(chatId, "Qualcuno ha detto RLARU ?!?");
          break;
        case "powa":
          bot.sendMessage(chatId, "Io ero qui quando non c'ero");
          break;
        case "linus":
          const linusImgArray = [linusImg1, linusImg2, linusImg3, linusImg4];

          let linusImg =
            linusImgArray[Math.floor(Math.random() * linusImgArray.length)];

          const linusFileOptions = {
            // Explicitly specify the file name.
            filename: "linus",
            // Explicitly specify the MIME type.
            contentType: "image/jpg",
          };
          bot.sendPhoto(chatId, linusImg, {}, linusFileOptions);
          break;
        case "guarito":
          bot.sendMessage(chatId, "Si dice guanito coglione");
          break;
        case "valorant":
          bot.sendMessage(chatId, "Quercia mode activated!");
          break;
        case "fabi":
          bot.sendMessage(chatId, "Si dice FABAYOLO!");
          break;
        case "grande":
        case "grosso":
          bot.sendMessage(chatId, "Sei na branda !");
          break;
        case "bro":
          bot.sendMessage(chatId, "Bella secco che dici ?!");
          break;
        case "quercia":
          bot.sendMessage(
            chatId,
            "Bravo , pianta le radici pe terra mortacci tua!"
          );
          break;
        case "xd":
          bot.sendMessage(chatId, "XDXDXDXDXDXDXDXDXDXDXD");
          break;
        case "lavoro":
        case "lavorare":
        case "milano":
        case "english":
          bot.sendMessage(
            chatId,
            "Dopo un lunga call e dopo aver fatto il briefing della giornata, posso dire che RLARU ha risolto tutte le ISSUE :)"
          );
          break;
        case "power":
          bot.sendMessage(
            chatId,
            "BENVENUTO NELLA DPG 666 ESHGHERE BRO, ORA CI DEVI DIRE PERCHé TUA MADRE è MORTA MORTACCI TUA"
          );
          break;
        case "ao":
          const baxFileOptions = {
            // Explicitly specify the file name.
            filename: "bax",
            // Explicitly specify the MIME type.
            contentType: "image/jpg",
          };
          bot.sendPhoto(chatId, baxImg, {}, baxFileOptions);
          break;
        case "tilt":
        case "tilting":
        case "tiltare":
        case "tiltato":
        case "rosicare":
        case "rosic":
        case "rosik":
          const tiltFileOptions = {
            // Explicitly specify the file name.
            filename: "tilt",
            // Explicitly specify the MIME type.
            contentType: "image/jpg",
          };
          bot.sendPhoto(chatId, tiltImg, {}, tiltFileOptions);
          break;
        case "luna":
          const lunaFileOptions = {
            // Explicitly specify the file name.
            filename: "luna",
            // Explicitly specify the MIME type.
            contentType: "image/jpg",
          };
          bot.sendPhoto(chatId, lunaImg1, {}, lunaFileOptions);
          break;
        default:
          break;
      }
    }
  }

  return;
});

bot.on("polling_error", (err) => console.log(err));

app.listen(port, () => console.log(`listening on port ${port}!`));
