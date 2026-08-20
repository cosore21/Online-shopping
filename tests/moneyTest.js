import { formatCurrency } from '../utils/money.js';


console.log('Test suite; Format Currency');

console.log('converts cents into dollars');

if(formatCurrency(2095)==='20.95'){
console.log('passed');

}else{
    console.log('failed');
    
}
console.log('works with zero');

if (formatCurrency(0)==0.00) {
  console.log('pass');
  
}else{
  console.log('fail');
  
}
console.log('rounds up to the nearest cents');

if (formatCurrency(2000.8)==='20.01') {
  console.log('passed');
  
}else{
    console.log('failed');
    
}