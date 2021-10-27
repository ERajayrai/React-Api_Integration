import React from 'react'

export const My = () => {
    const [state, setstate] = React.useState([])
    const getInfo= async()=>{
        try {
            let url=`https://api.opensea.io/api/v1/assets?format=json&limit=20&offset=0&order_direction=desc`;
            const res= await fetch(url)
          const  data= await  res.json();
          const {assets: [{id,num_sales,image_url,asset_contract: {name, nft_version, opensea_version}}]} = data;
            console.log(id,num_sales,name,image_url)
            const nwInfo={
                
                id,num_sales,name,image_url

            }
           
            setstate(nwInfo)
        } catch (error) {
            
        }
    }
    return (
     <>
        <div>
            <h1>please click on button</h1>
            <button onClick={getInfo}>click me</button>
            <div className="card" >
                <img className="card-img-top" src={state.image_url} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{state.name}</h5>
                    <p className="card-text">.</p>
                    <a href="#" className="btn btn-primary">Number of sale=:{state.num_sales}</a>
                </div>
            </div>
        </div>
     </>
    )
}
