const axios=require('axios');

const forcast=((lan,lat,callback)=>{
    const url =`https://api.darksky.net/forecast/07da0f00b0d89b8d657952dd99bebc24/${lan},${lat}?units=si`
  axios.get(url)
  .then(r=>{
      if (r.data.error){
          callback(r.data.error)
      }else{
        callback( r.data.daily.data[0].summary + 'its currently   '  +   r.data.currently.temperature  +  '  it is   ' +   r.data.currently.precipProbability +'  % to rain') 
      }
      
  })
   .catch(r =>{
       callback('unable to conect the weather app')
   })

})

module.exports={
    forcast

}
