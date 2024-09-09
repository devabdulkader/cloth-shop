
import data from '@/public/data/articles.json'; // Importing the JSON file
export default async function getSingleBlog(Id: any) {
    try {
        const blog = data.find(blog => blog.id === parseInt(Id));
        if (!blog) {
            throw new Error(`Blog with id ${Id} not found`);
        }
        return blog;
    } catch (error) {
        console.log(error)
    }
}
