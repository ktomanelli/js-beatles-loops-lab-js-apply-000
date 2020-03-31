// add solution here


function theBeatlesPlay(musicians,instruments){
  var arr=[];
  for(let i=0;i<arr.length+1;i+=1){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts){
  let i=0;
  while(i<facts.length){
    facts[i] += '!!!';
    i++;
  }
  return facts;
}