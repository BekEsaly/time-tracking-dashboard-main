const switchBtn=document.querySelectorAll('[aria-label="for switch"]');
const currentTime=document.querySelectorAll('.item-content h2 span');
const previousTime=document.querySelectorAll('#previous');

fetchData();
  let dailyCurrent=[];
  let dailyPrevious=[];
   
  let weeklyCurrent=[];
  let weeklyPrevious=[];
     
  let monthlyCurrent=[];
  let monthlyPrevious=[];
  
   async function fetchData() {
      const res = await fetch('data.json');
      const data = await res.json();
      /*console.log(data);*/
      length = data.length;
      /*console.log(length);*/
    
     
   for (i = 0; i < data.length; i++) {
      
        dailyCurrent.push(data[i].timeframes.daily.current);
        dailyPrevious.push(data[i].timeframes.daily.previous);
       
       
         weeklyCurrent.push(data[i].timeframes.weekly.current);
         weeklyPrevious.push(data[i].timeframes.weekly.previous);
         
         monthlyCurrent.push(data[i].timeframes.monthly.current);
         monthlyPrevious.push(data[i].timeframes.monthly.previous);
   }
    /*console.log(dailyPrevious); */
}
switchBtn.forEach((btn,current)=>{
    btn.addEventListener('click', ()=>{
        
       if (current==0){
        for (i = 0; i < currentTime.length; i++) {
         currentTime[i].innerHTML=dailyCurrent[i];
         previousTime[i].innerHTML=dailyPrevious[i];
        }  
       }
       
        if (current==1){
        for (i = 0; i < currentTime.length; i++) {
         currentTime[i].innerHTML=weeklyCurrent[i];
         previousTime[i].innerHTML=weeklyPrevious[i];
        }  
       }
       
        if (current==2){
        for (i = 0; i < currentTime.length; i++) {
         currentTime[i].innerHTML=monthlyCurrent[i];
         previousTime[i].innerHTML=monthlyPrevious[i];
        }  
       }
    })
})
