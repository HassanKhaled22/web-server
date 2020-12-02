const axios=require('axios');
const geocode=((address,callback)=>{
    let url =`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiaGFzc2Fua2hhbGVkIiwiYSI6ImNrZ2wwb2xxdjA2bXkycm8xdG84eWkzZmUifQ.PROIW11TskK9nENIaqTqfw&limit=1`
    axios(url)
    .then(r=>{
        if(r.data.features.length===0){
            callback(' cant find the locatoin')
        }else callback(
            {
                latitude:r.data.features[0].center[1],
                longitude:r.data.features[0].center[0] ,
                location:r.data.features[0].place_name 

            } )

    })
    .catch((e)=>{
        callback('unable to conect the server')
    })
})



module.exports={
    geocode
}