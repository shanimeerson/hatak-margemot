
let info=['מה הדבר הראשון שעושים כאשר מגיעים לעמדה',
'מאשרים מיקום אגור של הקנים',
'איזה עיקרון חשוב בהעברת נתונים',
"ע' שנייה",
'איזה נתונים עליך לאשר עם מפקד העמדה לפני הירי',
'אזימוט וטווח',
'מה הכי חשוב בתפקיד',
]
let index=-1;

window.addEventListener("load", (event) => {
    index=-1;
    document.addEventListener('keydown',(event)=>{
        if(event.code=== 'Space'&&index===-1){
            index++;
            document.getElementById("text").style.display='block';
            document.getElementById("text").innerText=info[index];
            index++;
        }else if(event.code=== 'Space'&&index<7&&index>0){
            if(index%2===0){
                document.getElementById("text").style.color='#a28e65';
            }else{
                document.getElementById("text").style.color='green';
            }
            document.getElementById("text").style.display='block';
            document.getElementById("text").innerText=info[index];
            index++;
        }else{
            if(index===7){
                document.body.innerHTML='<div style="color: white;font-size: 20vh;z-index: 2; position: absolute;top: 37%;left: 38%;font-weight: 700;">!רבאק</div><div id="layer"></div>';
            }
        }


        
    });
})

