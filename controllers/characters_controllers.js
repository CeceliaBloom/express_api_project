import query from "../db/utils"

export const findAll = async()=>{
  return await query("SELECT * FROM Characters");
}

export const findOne = async(characterID)=>{
  return await query("SELECT * FROM Characters WHERE CharacterID=?",[characterID]);
}

export const addOne = async (character) => {
  return await query("INSERT INTO Characters SET ?", [character]);
}

export const updateOne = async (characterID,character)=>{
  return await query ("UPDATE Characters SET ? WHERE CharacterID = ?",[character, characterID]);
}

export const removeOne = async (characterID)=>{
  return await query("DELETE FROM Characters WHERE CharacterID = ?",[characterID]);
}


















