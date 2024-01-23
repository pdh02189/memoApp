var count = 0;
var form = document.querySelector("#memoForm");

    console.log(form, typeof form);
    form.onsubmit = function(e){
        e.preventDefault(); //submit이라는 e(이벤트) 발생하면, 이벤트 전파를 막는 명령! 새로고침 안되게
        var userInput = document.querySelector("#memo");
        // document.write(`입력하신 메모는 ${userInput.value}입니다`);

        if(userInput.value == "") {
            alert("메모 내용을 입력하세요");
        } else {
            var list = document.querySelector(".memo_list");
            // console.log(list);
    
            var li = document.createElement("li");
            li.textContent = userInput.value;
    
            list.appendChild(li);
    
            var countSpan = document.querySelector(".count");
            count++;
            countSpan.innerText = count;

            userInput.value = "";
            userInput.focus();
        }
        
    }

    



//비주얼존 텍스트 효과
consoleText(['Memo App'], 'text',['white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}