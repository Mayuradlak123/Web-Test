"use server"


const defaultRes = {status:false, message:"Some Error Occured, Null value in result"};
const catchError = {error:"Some Unexpected Error Occured !"};
// const api = "https://api.wellnessz.in/api" 
 const api = "https://api.wellnessz.in/api" 

// const api = "http://35.154.87.32/api"  
// const api = "http://51.21.57.22/api"  
// const api = "https://api.wellnessz.in/api"  
// old "https://api.wellnessz.in/api"

export async function registerClientManual(data, authToken, mode, coachId=""){
 
    
  try{
      

  const response = await fetch(`${api}/clientRegister?mode=${mode}&id=${coachId}`, {
      method: 'POST',        
      headers: {
        
          'authorization': `Bearer ${authToken}`,
        },
        body: data,
        cache:'no-store'
    });    
    const res = await response.json()
    if(res)
    {return res;}
    return defaultRes;
  }
  catch(err){
    console.log(err)
      return catchError;
  }

}



//verifyClientMeeting function
export async function verifyClient(link, rollno){
    try{
    const response = await fetch(`${api}/verifyClientMeeting?wellnessZLink=https://www.wellnessz.in/club/meet/${link}`, {
        method: 'POST',        
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
          },
          body: JSON.stringify({rollno}),
          cache:'no-store'
      });    
      const res = await response.json()
      // console.log(res)
      if(res.status) 
      {
        // redirect(res.data); 
         }   //though we shouldnt use redirect inside try catch block according to docs
      if(res)return res;
    return defaultRes;
    }
    catch(err){
        return {error:"Some Error Occured"};
    }

}


// get dashboard data
export async function getDashData(authToken){

    try{
       
    const response = await fetch(`${api}/dashboard`, {
        method: 'GET',        
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`,
          },
          next:{revalidate:2},
          // cache:'no-store'
      });    
      const res = await response.json()
    //   console.log(res)
    if(res)return res;
    return defaultRes;
    }
    catch(err){
        return {error:"Some Error Occured"};
    }

}

//get All Clients Data
export async function getAllClients(authToken){
    try{
       
        const response = await fetch(`${api}/allClient?limit=500`, {
            method: 'GET',        
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${authToken}`,
              },
              // next:{revalidate:60}
              cache:'no-store'
          });    
          const res = await response.json()
          // console.log(res)
          if(res)return res;
    return defaultRes;
        }
        catch(err){
            return {error:"Some Error Occured"};
        }
}

//get Organization data
export async function getOrganization(){
    try{
       
        const response = await fetch(`${api}/getOrganisation`, {next:{revalidate:20}});    
          const res = await response.json()
        //   console.log(res)
        if(res)return res;
        return defaultRes;
        }
        catch(err){
            return {error:"Some Error Occured"};
        }
}


// get Client Details
export async function getClientDetails(authToken, id){
    try{
        const response = await fetch(`${api}/client/${id}`, {
            method: 'GET',        
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${authToken}`,
              },
              // next:{revalidate:1}
              cache:'no-store'
          });    
          const res = await response.json()
        //   console.log(res)
        if(res)return res;
        return defaultRes;
        }
        catch(err){
            return {error:"Some Error Occured"};
        }

}

//delete client
export async function deleteClient(authToken, id){
  try{
       
    const response = await fetch(`${api}/deleteClient/${id}`, {
        method: 'DELETE',        
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`,
          },
          cache: 'no-store'
      });    
      const res = await response.json()
    //   console.log(res)
    if(res)return res;
    return defaultRes;
    }
    catch(err){
        return {error:"Some Error Occured"};
    }
}

//update Client
export async function updateClient(data, authToken, id){
  try{
    const payload = {
        name: data.get('clientname'),
        mobileNumber: data.get('phone'),
        email: data.get('email'),
        city : data.get('city')
        // sponseredBy: data.get
    }
    // console.log(payload)
const response = await fetch(`${api}/updateClient/${id}`, {
    method: 'PUT',        
    headers: {
        'authorization': `Bearer ${authToken}`,
      },
      body: data,
      cache:'no-store'
  });    
  const res = await response.json()
  // console.log(res)
  if(res)return res;
    return defaultRes;
}
catch(err){
    return {error:"Some Error Occured"};
}
}


export async function manageOrganization(action, organisation='', id=''){
  try{
    const response = await fetch(`${api}/organisationSetting?action=${action}&id=${id}`, {
        method: 'POST',        
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
          },
          body: JSON.stringify({organisation}),
          cache:'no-store'
      });    
      const res = await response.json()
      
      if(res)return res;
    return defaultRes;
    }
    catch(err){
        return {error:"Some Error Occured"};
    }
}


//find Client
export async function searchClient(clientName){
  try{
    
    // console.log(payload)
const response = await fetch(`${api}/searchClient`, {
    method: 'GET',        
    headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify({clientName}),
      cache:'no-store'
  });    
  const res = await response.json()
  if(res)return res;
    return defaultRes;
}
catch(err){
    return {error:"Some Error Occured"};
}
}


//get list of all meetings held!!
export async function getMeetings(authToken){
  try{
       
    const response = await fetch(`${api}/allMeeting`, {
        method: 'GET',        
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`,
          },
          next:{revalidate:2}
          // cache:'no-store'
      });    
      const res = await response.json()
      
      if(res)return res;
    return defaultRes;
    }
    catch(err){
        return {error:"Some Error Occured"};
    }
}


//get record of meetings
export async function getRecordMeeting(meetingLink){
  try{
    
    // console.log(payload)
const response = await fetch(`${api}/getRecordMeetLink`, {
    method: 'GET',        
    headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify({meetingLink}),
      cache:'no-store'
  });    
  const res = await response.json()
  if(res)return res;
    return defaultRes;
}
catch(err){
    return {error:"Some Error Occured"};
}
}


//get all subscription Info
export async function getAllSubscriptionInfo(authToken, id){
  try{
       
    const response = await fetch(`${api}/getAllSubscription`, {
        method: 'GET',        
        headers: {
            // 'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`,
          },
          cache:"no-store"
      });    
      const res = await response.json()
    //   console.log(res)
    if(res)return res;
    return defaultRes;
    }
    catch(err){
        return {error:"Some Error Occured"};
    }
}


//get Subscription Info of Client
export async function getSubscriptionInfoClient(authToken, id){
  try{
       
    const response = await fetch(`${api}/getSubscription/${id}`, {
        method: 'GET',        
        headers: {
            // 'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`,
          },
          cache:"no-store"
      });    
      const res = await response.json()
    //   console.log(res)
    if(res)return res;
    return defaultRes;
    }
    catch(err){
        return {error:"Some Error Occured"};
    }
}

//add Subscription for Client
export async function addSubscriptionInfoClient(data, authToken, id){
  try{
    // console.log(data.get('amount'))
    const payload = {
      amount:data.get('amount'),
      startDate:data.get('startDate'),
      invoice:data.get('invoice'),
      paymentMode:data.get('paymentMode'),
      endDate:data.get('endDate'),
      
    }
    // console.log(payload)
    const response = await fetch(`${api}/addSubscription/${id}`, {
        method: 'POST',        
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`,
          },
          body:JSON.stringify(payload),
          
      });    
      const res = await response.json()
    //   console.log(res)
    if(res)return res;
    return defaultRes;
    }
    catch(err){
        return {error:"Some Error Occured"};
    }
}

//delete subscription of client
export async function deleteSubscriptionInfoClient(authToken, id){
  try{
       
    const response = await fetch(`${api}/delteSubscription/${id}`, {
        method: 'DELETE',        
        headers: {
            // 'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`,
          },
          cache:"no-store"
      });    
      const res = await response.json()
    //   console.log(res)
    if(res)return res;
    return defaultRes;
    }
    catch(err){
        return {error:"Some Error Occured"};
    }
}

//update subscription info client
export async function updateSubscriptionInfoClient(data, authToken, id){
  try{
       
    const response = await fetch(`${api}/updateSubscription/${id}`, {
        method: 'PUT',        
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`,
          },
          body:JSON.stringify({
            amount:data.get('amount'),
            startDate:data.get('startDate'),
            invoice:data.get('invoice'),
            paymentMode:data.get('paymentMode'),
            endDate:data.get('endDate'),
            
          }),
          // cache:"no-store"
      });    
      const res = await response.json()
      // console.log(res)
    if(res)return res;
    return defaultRes;
    }
    catch(err){
        return {error:"Some Error Occured"};
    }
}




export async function getNotifications(authToken){
  try{
       
    const response = await fetch(`${api}/notification`, {
        method: 'GET',        
        headers: {
            // 'Content-Type': 'application/json',
            // Accept: 'application/json',
            'authorization': `Bearer ${authToken}`,
          },
          cache:"no-store"
      });    
      const res = await response.json()
      console.log("These are notifications",res)
    if(res)return res;
    return defaultRes;
    }
    catch(err){
      console.log(err)
        return {error:"Some Error Occured"};
    }
}
