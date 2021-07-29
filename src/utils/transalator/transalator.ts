const languagePacks = {
    "word smart": "ภาษา",
    "logic smart": "ตรรกะ",
    "music smart": "ดนตรี",
    "nature smart": "ธรรมชาติ",
    "picture smart": "มิติสัมพันธ์",
    "body smart": "การเคลื่อนไหว",
    "people smart": "มนุษยสัมพันธ์",
    "self smart": "เข้าใจตนเอง",
    "board": "บทความ",
    "question": "คำถาม",
    //----------- Use in Result Feature -----------//
    "ปัญญาด้านภาษา (Word smart)":"ภาษา",
    "ปัญญาด้านตรรกะ (Logic smart)":"ตรรกะ",
    "ปัญญาด้านดนตรี (Music smart)":"ดนตรี",
    "ปัญญาด้านธรรมชาติ (Nature smart)":"ธรรมชาติ",
    "ปัญญาด้านมิติสัมพันธ์ (Picture smart)":"มิติสัมพันธ์",
    "ปัญญาด้านการเคลื่อนไหว (Body smart)":"การเคลื่อนไหว",
    "ปัญญาด้านมนุษยสัมพันธ์ (People smart)":"มนุษยสัมพันธ์",
    "ปัญญาด้านการเข้าใจตนเอง (Self smart)":"การเข้าใจตนเอง",
}
  
type TKeys = keyof typeof languagePacks
  
export function transalateToThai(key: TKeys){
    return languagePacks[key]
}

 