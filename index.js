function scuberGreetingForFeet(feetnumber){
   if (feetnumber <= 400) {
     return 'This one is on me!';
   } else if (feetnumber > 2000 && feetnumber < 2500) {
      return 'I will gladly take your thirty bucks.'
   } else if (feetnumber > 2500) {
     return 'No can do.'
   }

}


function ternaryCheckCity(specifyCity){
  return (specifyCity === 'NYC') ? 'Ok, sounds good.' : 'No go.'   
  
}

function switchOnCharmFromTip(generosity){
  if (generosity === "generous" )
  if (generosity === "not as generous" )
  if (generosity === "thanks for everything" )
  return "Thank you so much."

  switch(generosity) {
    case "generous":
    return "Thank you so much."
    break;
    case "not as generous":
      return "Thank you."
      break;
    case "thanks for everything":
      return "Bye."

  }
}