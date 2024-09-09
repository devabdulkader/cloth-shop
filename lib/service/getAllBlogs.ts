
import data from '@/public/data/articles.json'
export async function getAllBlogs() {
    try {
        const res = await data;
       
        return res;
    } catch (error) {
        console.log("Articles data fetch fail")
    }
}
