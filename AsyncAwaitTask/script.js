// var restUri = 'https://restcountries.eu/rest/v2/all';
// var fixerUri = 'http://data.fixer.io/api/latest?access_key=2597f9c97cad09a82ec940ef628aa97c';
var restUri = 'https://random-word-api.herokuapp.com/word?number=1';
var fixerUri = ['https://api.giphy.com/v1/gifs/search?api_key=TdHY3tewKCWG3ilDCGbSWpDVg4ArrLn1&q=','&limit=25&offset=0&rating=g&lang=en'];
async function foo(){
    try{
        let restResp = await fetch(restUri);
        let restData = await restResp.json();
        let code = restData[0];
        let fixerResp = await fetch(fixerUri[0]+code+fixerUri[1]);
        let fixerData = await fixerResp.json();
        let fixerLink = fixerData.data[0].images.original.url;
        console.log(fixerLink);
        // var link = document.querySelector('#link');
        // link.setAttribute('href',fixerLink);

    }catch(error){
        console.log(error);
    }
}

foo()
