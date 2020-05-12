require("dotenv").config();
const { getMessageFromString } = require("./utilities");
const fs = require("fs");
const blandoAudio = "./media/audio/blandoAudio.ogg";
const ketama1 = "./media/img/ketama1.png";
const ketama2 = "./media/img/ketama2.png";
const ketama3 = "./media/img/ketama3.png";

const TelegramBot = require("node-telegram-bot-api");
const token = process.env.NTBA_FIX_319;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
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
      case "ketama":
        const ketamaArrayImg = [ketama1, ketama2, ketama3];

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
        bot.sendMessage(chatId, "TOPOLINUUUUUUUS");
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
      default:
        break;
    }
  }

  return;
});

bot.on("polling_error", (err) => console.log(err));
