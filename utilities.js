const commandList = require("./commandList.json");

function getMessageFromString(msg) {
  let msgToReturn = "";
  commandList.list.forEach((listItem) => {
    if (msg.includes(listItem)) {
      msgToReturn = listItem;
    }
  });
  if (msgToReturn !== "") {
    return msgToReturn;
  }
  return false;
}

module.exports = { getMessageFromString };
