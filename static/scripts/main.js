const mainChatBtn = document.getElementById("mainChatBtn");
mainChatBtn.addEventListener("click", async()=>{
    const mainChatInput = document.getElementById("mainChatInput");
    const previousMessageDiv = document.getElementById("previousMessages");
    const prevMessage = document.createElement("p");
    prevMessage.innerHTML=mainChatInput.value;
    mainChatInput.value="";
    previousMessageDiv.appendChild(prevMessage);
});