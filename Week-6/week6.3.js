function sort_bubble(a){

    var n=a.length;
    
    let i,j;

    for(i=0;i<n-1;i++){
      for(j=0;j<n-i-1;j++)
        {
        
            if(a[j]>a[j+1])
             {
                
                var temp =a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
             }

        
            
        }

        
    }
   
   return a;
}


var arr=[9,3,7];
console.log("normal array" + arr);
res=sort_bubble(arr);
console.log("sorted array " + res);



       

