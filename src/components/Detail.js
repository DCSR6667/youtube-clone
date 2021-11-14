import './style.module.css';
const Detail=({selecteditem})=>
{
    if(!selecteditem)
    {
        return <h5>loading...</h5>
    }
    
    return (
         <div className="row">
        
            <div className="col-12 mb-2">
            <iframe width="100%" height="460px" src={"https://www.youtube.com/embed/"+selecteditem.id.videoId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-12 border-bottom pt-3">
            <h5>{selecteditem.snippet.title}</h5>
                <p>{selecteditem.snippet.description}</p>
            </div>
        </div>

    );

};
export default Detail;