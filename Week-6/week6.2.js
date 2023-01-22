function spiral (a)
 {    
    var rows =a.length;
    var cols=a[0].length;
     
     var top=0,left=0, right=cols-1, bottom=rows-1;
     var dir=1;

     while (top<=bottom && left<=right)
     { 
        if(dir==1){

        
        for (let i=left;i<=right;++i)
            console.log(a[top][i]+"");
        
        ++top;
        dir=2;
        }

        else if(dir==2)
        {
            for(i=top;i<=bottom;++i)
              console.log(a[i][right]);
 
        
        --right;
        dir=3
        }

        else if(dir==3)

        {   for(i=right;i>=left;--i)
              console.log(a[bottom][i]+"");
           
              
          --bottom;
          dir=4;


        }
        else if(dir==4)
        {

            for(i=bottom;i>=top;--i)
              console.log(a[i][left]+"");
        
        ++left;
        dir=1;      
        }

        else
          return false;
              

        
     }


}

var a1=[[1,2,3],[4,5,6]];
var a2=[[ 1, 2, 3 ], [ 4, 5, 6 ],[ 7, 8, 9]];


res=spiral(a1);
console.log("second array ");
res2=spiral(a2);