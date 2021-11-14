import axios from 'axios';
const KEY='AIzaSyCkaE0mU0SzfT_6XUljbVQWb4kfjNmOeSc';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:6,
        key:KEY
    }

});


