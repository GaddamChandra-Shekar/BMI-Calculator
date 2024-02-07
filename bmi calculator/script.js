let button = document.getElementById('btn');

button.addEventListener('click',()=>{
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    let result = document.getElementById('output');

    let height_status = false, weight_status = false;

    if(height === "" || isNaN(height) || height <= 0 ){
        document.getElementById('height-error').innerHTML = "Please provide valid height";
    }else {
        document.getElementById('height-error').innerHTML = "";
        height_status = true;
    }

    if(weight === "" || isNaN(weight) || weight <= 0 ) {
        document.getElementById('weight-error').innerHTML = "Please provide valid weight";
    }else {
        document.getElementById('weight-error').innerHTML = "";
        weight_status = true;
    }

    if(height_status && weight_status){
        const bmi = (weight/((height*height)/10000)).toFixed(2);

        if( bmi < 18.6) {
            result.innerHTML = "Under weight : " + bmi;
        }
        else if( bmi >=18.6 && bmi <26.6){
            result.innerHTML = "Normal weight : "+ bmi;
        }else {
            result.innerHTML = "Over Weight : "+ bmi;
        }
    }else {
        alert("Please Enter height and weight");
        result.innerHTML = "";
    }
})