import React from 'react'
import axios from 'axios'

export const News = async() => {
 try{
const api = `https://newsapi.org/v2/everything?q=India&apiKey=6f1c0ab9530f417fa67a0d70a0d7c17d`
const result = await axios.get(api)
return result
 }catch(err){
  console.log(err)
 }
}
