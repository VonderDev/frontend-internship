import axios from 'axios'

export async function API_getStatistics() {
   try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    // console.log(response)
    return {success: true, data: response.data}
   } catch (error) {
       return {success:false}
   }
}