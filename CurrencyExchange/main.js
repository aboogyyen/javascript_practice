//第一步選取要美元換台幣還是台幣換美元
 let optionSelect = document.getElementById('option-select');
//  console.log(optionSelect.value);
//第二步選到換算按鈕，監聽事件
 let submitBtn = document. getElementById('submit-btn');
 submitBtn.addEventListener('click', function(){
   let option = optionSelect.value;
   let currency = document.getElementById('currency').value;
   let result = document.getElementById('result');

   console.log(option);
   console.log(currency);

//第三步：防呆機制
  if (currency === NaN || currency === '') {
    result.innerHTML = '請輸入正確數字！';
    //innerHTML也可以用textContent
  } else if (option === 'nt2us') {
  //第四步：換算
    //parseFloat強制轉數字型態
    let outcome = parseFloat(currency) / 30;
    //toFixed小數點取到第二位
    result.innerHTML = 'US' + outcome.toFixed(2) ;
  }else if (option === 'us2nt') {
    let outcome = parseFloat(currency) * 30;
    result.innerHTML = 'TWD' + outcome.toFixed(2) ;
  }

 })
