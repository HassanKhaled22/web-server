const express=require('express');
const path=require('path')
const hbs=require('hbs');
const geocode=require('./utils/geocode');
const forcast=require('./utils/forcast');
const app=express();


//define paths to the express
const staticPage=path.join(__dirname,'../public');
const viewsPath=path.join(__dirname,'templates/views');
const PartialsPath=path.join(__dirname,'templates/partials')


app.use(express.static(staticPage));


//handel handelPares engine 
app.set('view engine','hbs');
app.set('views',viewsPath)
hbs.registerPartials(PartialsPath);


app.get('',(req,res)=>{
    res.render('index',{
        title:'weather App',
        name:'hassan khaled'
    });
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'help Page',
        message:'hi it is help page',
        name:'mohamed'
    });
})


app.get('/about',(req,res)=>{
    res.render('about',{
        title:'aboutPage',
        name:'omar'

    });
})

app.get('/weather',(req,res)=>{
if(!req.query.address){
    return  res.send(
        {
            error:'enter the city pls'
        }
    );
}

geocode.geocode(req.query.address,(r)=>{
    if(typeof r==='string'){return res.send ({
          errore:r
    })}
    forcast.forcast(r.longitude,r.latitude,(d)=>{
        res.send({
            location :r.location,
            forcatt:d

        }) 
    })

})
})





app.get('/help/*',(req,res)=>{
    res.render('404page' ,{
        title:'not found page',
        name:'hassan',
        errormessage:'artical not found'
    })
})


app.get('*',(req,res)=>{
    res.render('404page' ,{
        title:'not found page',
        name:'hassan',
        errormessage:'page not found'
    })
})


app.listen(3000,()=>{
    console.log('app is running on 3000')
})

