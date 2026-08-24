function beforeSubmit(){
    let outputdate = document.querySelector('.outputdate');
    let inputdate = document.querySelector('.inputdate');

    let formatedDate = new Date(inputdate.value).toLocaleDateString("en-US");
    outputdate.value = formatedDate;
}