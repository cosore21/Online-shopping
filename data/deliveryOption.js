import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
export const deliveryOptions=[{
    id:'1',
    deliveryDays:7,
    priceCents:0,

},{
    id:'2',
    deliveryDays:3,
    priceCents:499
},{
    id:'3',
    deliveryDays:1,
    priceCents:999
}];
function isWeekend(date){
    const dayOfWeek=date.format('dddd');
    return dayOfWeek==='Saturday'||dayOfWeek==='Sunday';
}

export function getDeliveryOption(deliveryOptionId){

     const deliveryOption =
      deliveryOptions.find(
        (option) => option.id === deliveryOptionId,
      ) || deliveryOptions[0];
      return deliveryOption||deliveryOptions[0]
}   
export function calculatedeliveryDate(deliveryOption){
    
    // const today = dayjs();
    //     const deliveryDate=today.add(deliveryOption.deliveryDays,'days')

    let remainingDays=deliveryOption.deliveryDays;
    let deliveryDate=dayjs();
    while(remainingDays>0){
        deliveryDate=deliveryDate.add(1,'day');
        if(!isWeekend(deliveryDate)){
            remainingDays--;
        }
    }
        const dateString=deliveryDate.format("dddd, MMMM D");
        return dateString;

}