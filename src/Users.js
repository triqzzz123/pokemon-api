const urls=[
  'https://pokeapi.co/api/v2/pokemon/ditto/' 
]



       const getData= async function () {
          const [response] = await Promise.all(urls.map(async function (ur){
           const fet=await fetch(ur);
           return fet.json();
          }
            ));
        console.log(response)    ;
          
        
    } 

export default getData;