"use server"

const defaultRes = { status: false, message: "Some Error Occured, Null value in result" };

export async function register(data) {

    try {
        const payload = {
            name: data.get('name'),
            username: data.get('username'),
            phonenumber: data.get('phonenumber'),
            email: data.get('email'),
            city: data.get('city')

        }
        // console.log(payload)
    // const response = await fetch('https://wellnessz-backend.vercel.app/api/v1/club/createclubuser', {
        const response = await fetch('https://api.wellnessz.in/api/interested-register', {
        method: 'POST',        
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
          },
          body: JSON.stringify(payload),
      });    
      const res = await response.json()
      console.log(res)
      if(res)return res;
    return defaultRes;
    }
    catch (err) {
        return err;
    }

}

export async function login(data) {
    try {
        const payload = {
            email: data.get('email'),
            password: data.get('password')
        }
        // const response = await fetch('http://51.21.57.22/api/login', {
        const response = await fetch('https://api.wellnessz.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            },
            body: JSON.stringify(payload),
            cache: 'no-store'
        },);
        const res = await response.json()
        console.log(res)
        if (res) return res;
        return defaultRes;


    } catch (error) {
        return error;
    }
}