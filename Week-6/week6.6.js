function sumClos(a,n){
    
    
    let size=a.length;

    for (let i=0;i<size;i++){
       for(let j=1;j<size;j++){
          for(let k=2;k<size;k++)    //time complexity is O(N3) here 
             {

                if( ((a[i]+a[j]+a[k])==n-1) || ((a[i]+a[j]+a[k])==n+1))
                {
                   console.log("this is close to target " + n + " and the close number is " + (a[i]+a[j]+a[k]));
                   return true;
                 }
             } 
       }
   
    }



    }

 let arr=[-1,2, 1, -4];
 let n1=1;
 sumClos(arr,n1);