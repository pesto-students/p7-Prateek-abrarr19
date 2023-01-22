function Diff(a, n1, b1)
{
   for (let i=0;i<n1;i++)
      for(j=1;j<n1;j++)
         { 
            if(i!=j && (a[j]-a[i]==b1))
               {
                console.log("the difference is found  and the pair is " + a[i] +" " +a[j]);
                  return true;
               }
            

    
          }  

          console.log("no pair found");
          return false;
}

var arr=[5, 10, 3, 2, 50, 80];
var n1=arr.length;
var b1=78;
Diff(arr,n1,b1);
