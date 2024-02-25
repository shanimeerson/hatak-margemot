
let info=[' ?אז מה זה ע מע"מ',
'ע מע"מ= עוזר מפקד עמדה',
'תפקידי חשוב ביותר במחלקת המרגמות',
'בזכותי המחלקה עובדת באופן מהיר ומקצועי',
' אז בואו נתחיל בלומדה']
let index=-1;

window.addEventListener("load", (event) => {
    index=-1;
    document.addEventListener('keydown',(event)=>{
        if(event.code=== 'Space'&&index===-1){
            index++;
        }else if(event.code=== 'Space'&&index<5){
            document.getElementById("text").style.display='block';
            document.getElementById("text").innerText=info[index];
            index++;
        }else{
            if(index===5){
                document.body.innerHTML+="<button id='btn'>יאללה</button>";
                document.getElementById("btn").addEventListener("click",()=>{
                    window.location.href='start.html';
                })
            }
        }
    });
})

