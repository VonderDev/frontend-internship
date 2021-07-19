const languagePacks = {
    "word smart": "ภาษา",
    "logic smart": "ตรรกะ",
    "music smart": "ดนตรี",
    "nature smart": "ธรรมชาติ",
    "picture smart": "มิติสัมพันธ์",
    "body smart": "การเคลื่อนไหว",
    "people smart": "ปฎิสัมพันธ์",
    "self smart": "เข้าใจตนเอง",
    "board": "บทความ",
    "question": "คำถาม"
  }
  
type TKeys = keyof typeof languagePacks
  
export function transalateToThai(key: TKeys){
    return languagePacks[key]
}

 