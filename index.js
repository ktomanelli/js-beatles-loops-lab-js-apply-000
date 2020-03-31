// add solution here


function theBeatlesPlay(musicians,instruments){
  const array=[];
  for(let i=0;i<musicians.length;i+=1){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts){
  let i=0;
  while(i<facts.length){
    facts[i] += '!!!';
    i++;
  }
  return facts;
}