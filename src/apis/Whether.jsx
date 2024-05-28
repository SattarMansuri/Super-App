import axios from 'axios'

export const Whether = async () => {
 try{
const api = `http://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=Mumbai`
const response = await axios.get(api)
return response.data
 }catch(err){
  console.log(err)
 }
}
