"use server"

export async function generateLink(data, authToken){
    try{
        if(!(data.baseLink)){
            return {message:"Please Provide Some Link to be Converted!"}
        }
    const response = await fetch('https://api.wellnessz.in/api/generateCustomLink', {
        method: 'POST',        
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`,
          },
          body: JSON.stringify(data),
      });    
      const res = await response.json()
    //   console.log(res)
      return res
    }
    catch(err){
        return err;
    }
}