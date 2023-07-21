
    const input=document.getElementById('dd');
    const fah=document.getElementById('button');
    const cel=document.getElementById('button1');
    fah.addEventListener('click',()=>{
        //Temperature in degrees Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32.
        var Fahrenheit= (input.value*9/5) +32+"°F";
        document.getElementById('inner').innerHTML=Fahrenheit;        

     });
     cel.addEventListener('click',()=>{
        // °C = 5/9(°F – 32).
        var Celsius=((input.value)-32)*5/9+"°C";
        document.getElementById('inner').innerHTML=Celsius;

     });
