let clearbit = require('clearbit')(process.env.api_key);

let NameToDomain = clearbit.NameToDomain;

let companyNames = ['HOP TV','Babait','shula spiegel ltd','BLOCKTV','motionhive.tv','Kamanda Productions Ltd','IETV -Israel Education TV','Mizmor Video Productions- MVP','CNN','MSNBC','HLN','8705 Media','B.vision media GmbH','Amanpour & Company on PBS','Maryland Public Television','Daily Mail TV','Fast Lane Entertainment','WPIX-TV','NBC','CNBC','Freelance','CNBC.com','VICE Media, Inc.','Gizmodo Media Group','TechCrunch','NBC News','HarperCollins Publishers','VICE Media','Nurture Digital','Perform Media Deutschland GmbH','Krishi Tahalka News  Paper','Wyrd Ways Rock Show','Expressen','Times Network','Bournemouth Daily Echo','dock10','NHK, Japan Broadcasting Corporation','PUNCH NIGERIA LIMITED','Mark Burnett Productions','Chobewala','Dainik navajyoti and Rajasthan patrika','Racing Post','BBC','Scottish Daily Record and Sunday Mail Ltd','The Associated Press','News UK','africa independent television','Xataka','Vietnam Television International (VTV4)','Fairfax Media','Presse Non Stop','Avid Offline','Glitz','ZDF','El Periódico de Catalunya','WEHT 25 ABC/ WTVW 7 CW','HFMWeek','BBC Radio','Gado Agency ltd','ATV','Radio Free Europe/Radio Liberty','All India Radio','Intercom','New Zealand Herald','Standart Daily','JydskeVestkysten','The Seattle Times','ORF','Bloomberg','Kfm Radio','Aljazeera Daily','theatre and film Arts Studio','Terra Value S/B','European Union of Science Journalists', 'Associations EUSJA','RT','Dainik Bhaskar','TV of Montenegro ( RTCG )','BBC News','news in eye','Editions 1633 . FHM . PLAYBOY','Reformed21 Channel','WTXF Fox29','Channel 5','Keyframe Digital','Valley International','Q13 FOX NEWS','Somethin Else','ESPN','ESPN','Haaretz','HubSpot','Onomagic','Walla!','Toby Kaufmann','Visa','CLiKD','Portion','Cannapress','Tribl','The Fresh Toast','YourStory Media','WalkMe','ELLE Decor','The Wall Street Journal','The Washington Post','HuffPost','The Huffington Post Canada','McClatchy','The Huffington Post'];
let newArr = [];

for (let i = 0; i < companyNames.length; i++) { 
  NameToDomain.find({name: companyNames[i]})
  .then(function (result) {
  	let nameAndDomain = `${companyNames[i]}: ${result.domain}`
    console.log(nameAndDomain);
    newArr.push(nameAndDomain);
  })
  .catch(NameToDomain.NotFoundError, function (err) {
    // Domain could not be found
  })
  .catch(function (err) {
    //
  });
}


console.log(newArr.toString())