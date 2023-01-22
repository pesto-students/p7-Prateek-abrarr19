let a1=[-2, 1, -3, 4, -1, 2, 1, -5];
let a2=[1, 2, 3, 4, -1]; 

//we will apply kadanes algorithm. 

function maxSum(a){
    var size=a.length;
max_integ=Math.pow(2,53); //this is max value of an integer
max_sofar= -max_integ-1; //this is min value of integer
var max_sum_end=0;

 for (var i=0;i<size;i++)
    {
      max_sum_end=max_sum_end+a[i];
      if (max_sofar<max_sum_end)
          max_sofar=max_sum_end;
          
      if(max_sum_end<0)
         max_sum_end=0;    
     }

   return max_sofar;
}

res1=maxSum(a1);
res2=maxSum(a2)
console.log(res1);
console.log(res2);
