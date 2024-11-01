// localStorage.clear()

let resultContainer = document.querySelector('.resultContainer')
let correction = JSON.parse(localStorage.getItem("correction")) || ""
let numberOfQuestion = localStorage.getItem("questionNumber") || 0

if (correction) {
    resultContainer.innerHTML = `   
    <div class="flex justify-between pb-6">
          <span class="bg-[#32415F] px-[15px] py-[6px] rounded-2xl text-[#6CEE97]">Scor: ${numberOfQuestion - correction.length }/${+numberOfQuestion  }</span>
            <!-- <span class="bg-[#32415F] px-[15px] py-[6px] rounded-2xl text-[#6CEE97]">Time Average: 7s</span> -->
      </div>
    <hr class="mb-4 " style="border-color: #5d5d5d; ">
    <span class="bg-[#32415F] px-[15px] py-[6px] rounded-2xl text-[#FF4B4B]">wrong Answers: ${correction.length }</span>
    `
}else{
    resultContainer.innerHTML = `   
    <div class="flex justify-between pb-6">
          <span class="bg-[#32415F] px-[15px] py-[6px] rounded-2xl text-[#6CEE97]">Scor 10/10</span>
          <span class="bg-[#32415F] px-[15px] py-[6px] rounded-2xl text-[#6CEE97]">Time Average: 7s</span>
      </div>
            <hr class="mb-4 " style="border-color: #5d5d5d; ">
    
            <span class="bg-[#32415F] px-[15px] py-[6px] rounded-2xl text-[#FF4B4B]">wrong Answers: 0 </span>

    `

}
    function showResult() {
        for (let i = 0; i < correction.length ; i++) {
            
            resultContainer.innerHTML += `
        
                <div class="flex flex-col h-[150px] justify-between mt-4">
                    <h2 class="text-[1.1em]">${correction[i].ques}</h2>
              <h3 class="border-[2px] rounded-md px-[10px] py-[12px] bg-[#FF7575]">Your Answer is: ${correction[i].wrong || "skiped"} </h3>
              <h3 class="border-[2px] rounded-md px-[10px] py-[12px] bg-[#B0FF94]">Corect answer is: ${correction[i].corect}</h3>
              <hr style="border-color: #5d5d5d; ">
            </div>
            `
        }
    }

    resultContainer.innerHTML += `
        <button onclick="tryAgain()"  class="px-[20px] next py-1 bg-[#2eff62] rounded-[18px] text-white">Try again</button>
`

function tryAgain(){
    location.href = "start.html"
}
if (correction) {
    showResult()
}