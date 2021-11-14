
import {Component,Fragment} from 'react';
import Search from './Search';
import Detail from './Detail';
import List from './List';
import context from './context.js';
import youtube from './api';


class App extends Component
{
    state={videos:[],selecteditem:null};
   async componentDidMount()
    {
        const response=await youtube.get('/search',
        {
            params:{
                q:"runaway"
            }
        });

        this.setState({ videos:response.data.items,selecteditem:response.data.items[0]})
    }
    data=(videos)=>
    {
        
        

        this.setState({videos:videos,selecteditem:videos[0]});
        


    };
    selecteditem=(video)=>
    {
        this.setState({selecteditem:video});

    };
    render()
    {
        return (
          <Fragment>
              <context.Provider value={{data:this.data,selecteditem:this.selecteditem}}>
            <Search/>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-7 mb-4 mb-md-0"><Detail selecteditem={this.state.selecteditem}/></div>
                    <div className="col-md-5"> 
                    <List videos={this.state.videos}/>
                     </div>
            
           </div></div></context.Provider>
            </Fragment>
        )

    }
}
export default App;