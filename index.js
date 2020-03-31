// add solution here


function theBeatlesPlay(musicians,instruments){
  const array=['johnLennon'];
  for(let i=0;i<array.length;i+=1){
    array[0] = 'hello';
    //array.push(`${musicians[i]} plays ${instruments[i]}`);
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