
import data from '@/public/data/articles.json'; // Importing the JSON file

export default async function getSingleBlog(pathName: any) {
    // Filter the blog post by id
    try {
        const blog = data.find(blog => blog.pathName ===pathName);
        // console.log(blog, "blog1111111")

        if (!blog) {
            throw new Error(`Blog with id ${pathName} not found`);
        }

        return blog;
    } catch (error) {
        console.log(error)
    }
}
