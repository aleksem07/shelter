
const getRandomNumber=(min,max)=>{if(min<0||max<0){return-1;}
if(max<=min){[min,max]=[max,min];}
return Math.floor(Math.random()*(max-min+1))+min;};const getRandomNumberArray=(array)=>{return array[getRandomNumber(0,array.length-1)];};const makeUniqueRandomIntegerGenerator=(min,max)=>{const previousValues=[];return()=>{let currentValue=getRandomNumber(min,max);if(previousValues.length>=max-min+1){throw new Error('Перебраны все числа из диапазона от '+min+' до '+max);}
while(previousValues.includes(currentValue)){currentValue=getRandomNumber(min,max);}
previousValues.push(currentValue);return currentValue;};};const shuffle=(array)=>{let m=array.length,t,i;while(m){i=Math.floor(Math.random()*m--);t=array[m];array[m]=array[i];array[i]=t;}
return array;};export{getRandomNumber,getRandomNumberArray,makeUniqueRandomIntegerGenerator,shuffle};