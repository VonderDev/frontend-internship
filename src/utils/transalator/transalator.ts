const languagePacks = {
    "word smart": "ภาษา",
    "logic smart": "ตรรกะ",
    "music smart": "ดนตรี",
    "nature smart": "ธรรมชาติ",
    "picture smart": "มิติสัมพันธ์",
    "body smart": "การเคลื่อนไหว",
    "people smart": "มนุษย์สัมพันธ์",
    "self smart": "เข้าใจตนเอง",
    "board": "บทความ",
    "question": "คำถาม",
    //----------- Use in Result Feature -----------//
    "ปัญญาด้านภาษา":"ภาษา",
    "ปัญญาด้านตรรกะ":"ตรรกะ",
    "ปัญญาด้านดนตรี":"ดนตรี",
    "ปัญญาด้านธรรมชาติ":"ธรรมชาติ",
    "ปัญญาด้านมิติสัมพันธ์":"มิติสัมพันธ์",
    "ปัญญาด้านการเคลื่อนไหว":"การเคลื่อนไหว",
    "ปัญญาด้านมนุษย์สัมพันธ์":"มนุษย์สัมพันธ์",
    "ปัญญาด้านการเข้าใจตนเอง":"การเข้าใจตนเอง",
}
  
type TKeys = keyof typeof languagePacks
  
export function transalateToThai(key: TKeys){
    return languagePacks[key]
}

 