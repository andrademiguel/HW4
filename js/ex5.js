var str = window.prompt("Enter your word:");

function vowel_count(str)
{
  var vowel_list = 'aeiouyAEIOUY';
  var vcount = 0;
  
  for(var x = 0; x < str.length ; x++)
  {
    if (vowel_list.indexOf(str[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount; 
    
}
console.log(str, "contains",(vowel_count(str)),("vowels"));