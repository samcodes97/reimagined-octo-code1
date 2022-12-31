window.onload = () =>
    //the function called when Calculate button is clicked.
    {
        /*calling a function calculateTip
         which will calculate the tip for the bill.*/
        document.getElementById('calculate').onclick = calculateTip;
    }
 
function calculateTip() {
    /*assign values of ID : amount, person and service to
    variables for further calculations.*/
    let amount = document.getElementById('amount').value;
    let persons = document.getElementById('persons').value;
    let service = document.getElementById('services').value;
 
    console.log(service);
    /*if statement will work when user presses
          calculate without entering values. */
    //so will display an alert box and return.
    if (amount === '' && service === 'Select') {
        alert("Please enter valid values");
        return;
    }
 
    // //now we are checking number of persons
    if (persons === '1')
    // //if there is only one person then we need not to display each.
        document.getElementById('each').style.display = 'none';
    // else
    // //if there are more than one person we will display each. 
    //     document.getElementById('each').style.display = 'block';
 
    /*calculating the tip by multiplying total-bill and type of
     service; then dividing it by number of persons.*/
    //fixing the total amount upto 2 digits of decimal
    let total = (amount * service) / persons;
    total = total.toFixed(2);
 
    //finally displaying the tip value
    document.getElementById('tipp').style.display = 'block';
    document.getElementById('total').innerHTML = total;
    let each= total/persons;
    each = each.toFixed(2);
    document.getElementById('each').innerHTML = each;
}