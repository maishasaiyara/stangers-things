const COHORT_NAME = '2302-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const getPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts`);

        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error(error)
    }
}


//Line 1 set actual URL