//import { formatCurrency } from "../utils/money";
console.log('Test Suite: Format Currency');

console.log('convert cents to dollars');

if(formatCurrency(2095)==='20.95'){
    console.log('passed');
    
}else{
    console.log('failed');
    
}
console.log('works with zero');


if(formatCurrency(0)==='0.00'){
    console.log('passed');
    
}else{
    console.log('Failed');
    
}
console.log('rounds up to the nearest cant');

if(formatCurrency(2000.4)==='20.01'){
      console.log('passed');
    
}else{
    console.log('Failed');
    

}

export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}
