function boxenable1()
{
    document.getElementById ('s1').style.display ='block';
        document.getElementById ('s2').style.display ='none';
        document.getElementById ('s3').style.display ='none';
        document.getElementById ('s4').style.display ='none';
        document.getElementById ('s5').style.display ='none';
        document.getElementById ('s6').style.display ='none';
        document.getElementById ('s7').style.display ='none';
        document.getElementById ('s8').style.display ='none';
        document.getElementById ('s2').value=0;
        document.getElementById ('s3').value=0;
        document.getElementById ('s4').value=0;
        document.getElementById ('s5').value=0;
        document.getElementById ('s6').value=0;
        document.getElementById ('s7').value=0;
        document.getElementById ('s8').value=0;
        let totnum = 1;
    }

    function boxenable2()
{
    document.getElementById ('s1').style.display ='block';
        document.getElementById ('s2').style.display ='block';
        document.getElementById ('s3').style.display ='none';
        document.getElementById ('s4').style.display ='none';
        document.getElementById('s3').value=0;
        document.getElementById('s4').value=0;
        document.getElementById ('s5').style.display ='none';
        document.getElementById ('s6').style.display ='none';
        document.getElementById ('s7').style.display ='none';
        document.getElementById ('s8').style.display ='none';
        document.getElementById ('s5').value=0;
        document.getElementById ('s6').value=0;
        document.getElementById ('s7').value=0;
        document.getElementById ('s8').value=0;
        let totnum=2;
    }

    function boxenable3()
    {
        document.getElementById ('s1').style.display ='block';
            document.getElementById ('s2').style.display ='block';
            document.getElementById ('s3').style.display ='block';
            document.getElementById ('s4').style.display ='none';
            document.getElementById ('s5').style.display ='none';
            document.getElementById ('s6').style.display ='none';
            document.getElementById ('s7').style.display ='none';
            document.getElementById ('s8').style.display ='none';
            document.getElementById ('s4').value=0;
            document.getElementById ('s5').value=0;
            document.getElementById ('s6').value=0;
            document.getElementById ('s7').value=0;
            document.getElementById ('s8').value=0;
            let totnum = 3;
        }
    
        function boxenable4()
    {
        document.getElementById ('s1').style.display ='block';
            document.getElementById ('s2').style.display ='block';
            document.getElementById ('s3').style.display ='block';
            document.getElementById ('s4').style.display ='block';
            document.getElementById ('s5').style.display ='none';
            document.getElementById ('s6').style.display ='none';
            document.getElementById ('s7').style.display ='none';
            document.getElementById ('s8').style.display ='none';
            document.getElementById ('s5').value=0;
            document.getElementById ('s6').value=0;
            document.getElementById ('s7').value=0;
            document.getElementById ('s8').value=0;
            let totnum = 4;
        }
        function boxenable5()
        {
            document.getElementById ('s1').style.display ='block';
                document.getElementById ('s2').style.display ='block';
                document.getElementById ('s3').style.display ='block';
                document.getElementById ('s4').style.display ='block';
                document.getElementById ('s5').style.display ='block';
                document.getElementById ('s6').style.display ='none';
                document.getElementById ('s7').style.display ='none';
                document.getElementById ('s8').style.display ='none';
                document.getElementById ('s6').value=0;
                document.getElementById ('s7').value=0;
                document.getElementById ('s8').value=0;
                let totnum = 5;
            }

            function boxenable6()
    {
        document.getElementById ('s1').style.display ='block';
            document.getElementById ('s2').style.display ='block';
            document.getElementById ('s3').style.display ='block';
            document.getElementById ('s4').style.display ='block';
            document.getElementById ('s5').style.display ='block';
            document.getElementById ('s6').style.display ='block';
            document.getElementById ('s7').style.display ='none';
            document.getElementById ('s8').style.display ='none';
            document.getElementById ('s7').value=0;
            document.getElementById ('s8').value=0;
            let totnum = 6;
        }
        function boxenable7()
    {
        document.getElementById ('s1').style.display ='block';
            document.getElementById ('s2').style.display ='block';
            document.getElementById ('s3').style.display ='block';
            document.getElementById ('s4').style.display ='block';
            document.getElementById ('s5').style.display ='block';
            document.getElementById ('s6').style.display ='block';
            document.getElementById ('s7').style.display ='block';
            document.getElementById ('s8').style.display ='none';
            document.getElementById ('s8').value=0;
            let totnum = 7;
        }
    
    
        
        function boxenable8()
        {
            document.getElementById ('s1').style.display ='block';
                document.getElementById ('s2').style.display ='block';
                document.getElementById ('s3').style.display ='block';
                document.getElementById ('s4').style.display ='block';
                document.getElementById ('s5').style.display ='block';
                document.getElementById ('s6').style.display ='block';
                document.getElementById ('s7').style.display ='block';
                document.getElementById ('s8').style.display ='block';
                let totnum = 8;
            }
        
function cgpa()
{
   var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var s3 = document.getElementById("s3").value;
    var s4 = document.getElementById("s4").value;
    var s5 = document.getElementById ('s5').value;
    var s6=  document.getElementById ('s6').value;
    var s7=  document.getElementById ('s7').value;
    var s8=  document.getElementById ('s8').value;
   
    let sum = parseFloat(s1)+parseFloat(s2)+parseFloat(s3)+parseFloat(s4)+parseFloat(s5)+parseFloat(s6)+parseFloat(s7)+parseFloat(s8);
     
     if(document.getElementById("s8").value!=0){
         result = sum / 8 ;
     }
     else if(document.getElementById("s7").value!=0)
     {
         result = sum / 7 ;
     }
     else if(document.getElementById("s6").value!=0)
     {
         result = sum / 6 ;
     }
     else if(document.getElementById("s5").value!=0)
     {
         result = sum / 5 ;
     }
     else if(document.getElementById("s4").value!=0)
     {
         result = sum / 4 ;
     }
     else if(document.getElementById("s3").value!=0)
     {
         result = sum / 3 ;
     }
     else if(document.getElementById("s2").value!=0)
     {
         result = sum / 2 ;
     }
     else if(document.getElementById("s2").value!=0)
     {
         result = sum / 2 ;
     }

     else
     {
         result = sum / 1 ;
     }
     
    if(!isNaN(result))
    {
        document.getElementById("answer").value="your CGPA is " + result.toFixed(2);
    }
}
        
function getbox()
{
//Intialise textbox value in varible m
var m=document.getElementById ('meter').value;
var a=123;
//To check meter number entered is correct or not
if(m==a)
{
document.getElementById ('opt').style.display = 'block';//If meeter number is correct options will appear.
document.getElementById('go').style.display = 'block';
}
else
{
document.getElementById ("choose").innerHTML = "Invalid number";
}
}

function funno()
{
    var p=document.getElementById ('category').value;

    if(p==1)
    {
        document.getElementById ('current').style.display ='block';
        document.getElementById('last').style.display = 'block';
    }
    if(p==2)
    {
        document.getElementById('current').style.display = 'block';
        document.getElementById('last').style.display = 'block';
    }

} 




function finalsub()
{
    var p=document.getElementById ('category').value;
    if(p==1)
    {
          netvalue2();
    }

    if(p==2)
    {
        netvalue3();
    }
    
}

function netvalue2()
{
var u = document.getElementById ('units').value;
var s = 35;
var bill = 0.0;
if(u>0 && u<=100)
{
document.frs.bmi.value = "No charge";
}
else
if(u>100 && u<150)
{
bill = (u*2.15)+s;
document.frs.bmi.value = bill;
}
else
if(u>=150 && u<300)
{
bill = (u*3)+s;
document.frs.bmi.value = bill;
}
else
if(u>=300 && u<500)
{
bill = (u*3.5)+s;
document.frs.bmi.value = bill;
}
else
if(u>=500 && u<1000)
{
bill = (u*6)+s;
document.frs.bmi.value = bill;
}
else
{
    document.frs.bmi.value = bill;
}
}
function netvalue3()
{
var u = document.getElementById ('units').value;
var s = 65;
var bill = 0.0;
if(u>0 && u<50)
{
bill = (u*3)+s;
document.frs.bmi.value = bill;
}
else
if(u>=50 && u<150)
{
bill = (u*4.5)+s;
document.frs.bmi.value = bill;
}
else
if(u>=150 && u<300)
{
bill = (u*5.5)+s;
document.frs.bmi.value = bill;
}
else
if(u>=300 && u<500)
{
bill = (u*6.8)+s;
document.frs.bmi.value = bill;
}
else
if(u>=500 && u<1000)
{
bill = (u*9)+s;
document.frs.bmi.value = bill;
}
else
{
    document.frs.bmi.value = "Invalid ";
}
}


function cuboidsa()
{
    var l = document.frm1.length.value
    var b = document.frm1.width.value
    var h = document.frm1.height.value

    var answer = 2 * (parseFloat(l*b)+parseFloat(b*h)+parseFloat(h*l));
    document.frm1.res.value = answer.toFixed(2) + " cm sq units";
}

function cuboidvolume()
{
    var l = document.frm1.length.value
    var b = document.frm1.width.value
    var h = document.frm1.height.value

    var answer = l*b*h;
    document.frm1.res.value = answer.toFixed(2) + " cm cube units";
}

function cylindersa()
{
    var r = document.frm2.radius.value
    var h1 = document.frm2.height.value

    var answer1 = 2*3.14*r*(parseFloat(r)+parseFloat(h1));
    document.frm2.res.value = answer1.toFixed(2) + " cm sq units";
}

function cylindervol()
{
    var r = document.frm2.radius.value
    var h1 = document.frm2.height.value

    var answer1 = 3.14*r*r*h1;
    document.frm2.res.value = answer1.toFixed(2) + " cm cube units";
}

function spheresa()
{
    var r =document.frm3.radius.value

    var answer2 = 4*3.14*r*r;
    document.frm3.res.value = answer2.toFixed(2) + " cm sq units";
}

function spherevol()
{
    var r =document.frm3.radius.value

    var answer2 = 1.33*3.14*r*r*r;
    document.frm3.res.value = answer2.toFixed(2) + " cm cube units";
}

function conesa()
{
    var r = document.frm4.radius.value
    var h1 = document.frm4.height.value
    var rsq = r*r;
    var hsq = h1*h1;
    var tot = (parseFloat(rsq)+parseFloat(hsq));
    var l = Math.sqrt(tot);
    var answer1 = 3.14*r*(parseFloat(r)+parseFloat(l));
    document.frm4.res.value = answer1.toFixed(2) + " cm sq units";
}

function conevol()
{
    var r = document.frm4.radius.value
    var h1 = document.frm4.height.value

    var answer1 = (3.14*r*r*h1)/3 ;
    document.frm4.res.value = answer1.toFixed(2) + " cm cube units";
}

function gpm()
{
    var f=document.getElementById ('mark1').value;
    var g=document.getElementById('mark2').value;
    var h=document.getElementById('mark3').value;
    var i=document.getElementById ('mark4').value;
    var j=document.getElementById('mark5').value;
    var k=document.getElementById('mark6').value;

    var f1 = document.getElementById('cred1').value;
    var g1=document.getElementById('cred2').value;
    var h1=document.getElementById('cred3').value;
    var i1=document.getElementById ('cred4').value;
    var j1=document.getElementById('cred5').value;
    var k1=document.getElementById('cred6').value;

   var sum1 = f*f1 ;
    
    
    var sum2 = g*g1 ;
    
    
    var sum3 = h*h1 ;
    
   
    var sum4 = i*i1 ;
    
    
    var sum5 = j*j1 ;
    
    
    var sum6 = k*k1 ;
    
    var allcred = parseFloat(f1) + parseFloat(g1) + parseFloat(h1) + parseFloat(i1) + parseFloat(j1) + parseFloat(k1) ;

    var allsum = sum1 + sum2 + sum3 + sum4 + sum5 + sum6;

    var allavg = (allsum/allcred).toFixed(2);

    document.gp.summ.value = allavg ;

}