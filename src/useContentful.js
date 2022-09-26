import {createClient} from "contentful";

const useContentful = () => {
    const client = createClient(
        {
            space: process.env.REACT_APP_SPACE_ID,
            accessToken: process.env.REACT_APP_ACCESS_TOKEN,
            
        });


    const getPublications = async() => {
        try {
            const entries = await client.getEntries({
                content_type: "publications",
                select:"fields"
            });
            return entries;
        } catch (error) {
            console.log('error fetching publications: $error');
        }
        }; 
        return getPublications();
};

export default useContentful;