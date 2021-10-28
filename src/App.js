
import React ,{ Component } from 'react';
import './style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:null
    }

  }
  componentDidMount(){
    fetch('https://api.opensea.io/api/v1/assets?format=json&limit=50&offset=0&order_direction=desc').then((res)=>{
      res.json().then((result)=>{
        this.setState({data:result.assets})
      })
    })
  }
  render(){
   
      return (
        <>
          {
            this.state.data?
            this.state.data.map((item)=>
               <><div className="card sm y-3" key={item.id}>
                <div>
                  <img className="card-img-top" src={item.image_url} alt="" />
                  <div className="card-body">
                    <label htmlFor="">Name</label><h5 className="card-title" style={{ color: "red", }}>{item.name}</h5>
                    <p className="card-text" style={{ color: "blue", }}>{item.description}</p>
                  </div>
                </div>
              </div><br /></>
            )
            :
            <div>isloading .......</div>
          }
        </>
      );
    }
}

export default App;
