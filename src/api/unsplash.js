import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID hwpqcM39hmDGmjBZR-xOSX8toRl2CmSx7jE8ke5h_5E '
    }
});
