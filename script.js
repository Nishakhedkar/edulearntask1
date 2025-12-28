function showPage(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function submitForm(e){
  e.preventDefault();
  alert("Message sent successfully!");
}

document.addEventListener("DOMContentLoaded",()=>{

  document.body.insertAdjacentHTML("beforeend",`
    <div id="chatbot">
      <div id="chatHeader">EduLearn Bot 💬</div>
      <div id="chatBody"></div>
      <div id="chatFooter">
        <input id="chatInput" placeholder="Type your message...">
        <button id="sendBtn">Send</button>
      </div>
    </div>
    <div id="chatIcon">💬</div>
  `);

  const icon = document.getElementById("chatIcon");
  const bot = document.getElementById("chatbot");
  const body = document.getElementById("chatBody");
  const input = document.getElementById("chatInput");
  const sendBtn = document.getElementById("sendBtn");

  icon.onclick = () =>{
    bot.style.display = bot.style.display==="flex" ? "none":"flex";
  };

  function add(sender,msg){
    const d=document.createElement("div");
    d.className=sender==="You"?"userMsg":"botMsg";
    d.innerHTML=`<b>${sender}:</b> ${msg}`;
    body.appendChild(d);
    body.scrollTop=body.scrollHeight;
  }

  add("Bot","Hi! Ask about Courses, Admission or Contact.");

  function reply(msg){
    add("You",msg);
    if(msg.includes("course")) add("Bot","Java, Python & Web Development available.");
    else if(msg.includes("admission")) add("Bot","Admissions are open!");
    else if(msg.includes("contact")) add("Bot","Call +91 98765 43210");
    else add("Bot","Please ask about courses, admission or contact.");
  }

  sendBtn.onclick=()=>{
    if(input.value.trim()){
      reply(input.value.toLowerCase());
      input.value="";
    }
  };

  input.addEventListener("keypress",e=>{
    if(e.key==="Enter") sendBtn.click();
  });
});
