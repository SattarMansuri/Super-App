
import axios from 'axios'
const genre = localStorage.getItem('genre')
export const MoviesApi = async() => {
 try{
const api = `http://www.omdbapi.com/?apikey=68322b2e&s=${genre}`
const result = await axios.get(api)
return result?.data?.Search
 }catch(err){
  console.log(err)
 }
}
