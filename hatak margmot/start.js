let baseCounter = 0;
var bahad1 = 'בית הספר לקצינים של צה"ל על שם חיים לסקוב (בה"ד 1) הוא בסיס ההדרכה המרכזי להכשרת קצינים בצה"ל, בו מוכשרים כל קציני וקצינות צה"ל למעט טייסים וחובלים. הבסיס נמצא בקרבת מצפה רמון ומפקדו הוא קצין בדרגת אלוף משנה. ייעוד הבה"ד הוא להוות בסיס הדרכה להכשרת היסוד של הקצונה הזוטרה בצה"ל, לחיילות במערך המתמרן, במערך הקרבי והסיוע המנהלתי ובסיס הדרכה להכשרת מפקדי מחלקות לחיל הרגלים';
var maklef = 'מחנה מַקלֵף (לשעבר מחנה גנים; מכונה שלישות רמת גן), הוא מחנה צבאי בעיר רמת גן בין הרחובות בן-גוריון וקריניצי. המחנה מאכלס את מפקדת חיל משאבי האנוש, ממר"ם, מצפ"ן, שחר, בית הספר למקצועות המחשב, ממת"ם וחלק מיחידות אכ"א. במתחם, שכן מפקדת המטכ"ל מאז מאי 1949 לאחר שהתפנה ממקומו הקודם בגן אברהם הסמוך, ועד לפברואר 1955 אז פינה את מחנה מקלף ושוכן במחנה הקריה בתל אביב';
var ovda = 'הבסיס נקרא על שם מבצע "עובדה" - לכיבוש דרום הנגב ואילת במלחמת העצמאות שבמסגרתו שוחרר הנגב מידי המצרים והירדנים. בסיס עובדה הוקם בשנת 1982 על ידי האמריקאים במסגרת התחייבותם לישראל על פי הסכם השלום עם מצרים, במסגרתו פונה בסיס חיל האוויר, עציון, שמוקם בסיני. לכן, בסיס עובדה מהווה "גלגול שני" לבסיס עציון וזכה באותם הימים לכינויו - כנף 10.';
var tzalim = 'המרכז הלאומי לאימונים ביבשה - מחנה שומרון ונודעגם בכינויו בסיס צאלים, הוא בסיס צבאי ישראליהממוקם ליד קיבוץ צאלים בנגב, ומשמש כבסיסהאימונים הראשי והגדול ביותר של יחידות זרוע היבשהבצה"ל.';
var tzanchanim = 'הבא"ח קרוי על שמו של הרמטכ"ל ה-11 רב אלוף רפאל (רפול) איתן. שם החטיבה "צנחנים" ניתן לה על פי ייעודה, חטיבה מוצנחת. הבא"ח במקומו הנוכחי נבנה בשנת 2001 בהובלת האמריקאים,ולכן הרחוב הראשי בבא"ח נקרא main street. עד 2001 ההכשרה לצנחנים הייתה מתבצעת בשלושה בסיסים שונים בשומרון ובבקעת הירדן. ב2003 אוחדו שלושת בסיסי ההכשרות של הצנחנים לבא"ח הקיים והחלה להתבצע שם ההכשרה.';
var pikudTzafoon = 'פיקוד הצפון (בר"ת: פָּצָ"ן) הוא פיקוד מרחבי בצבא ההגנה לישראל. הפיקוד, אשר מפקדתו הראשית נמצאת בצפת, הוא האחראי על כל היחידות הממוקמות בין החרמון לנתניה. משימתו של פיקוד הצפון היא הגנה על גבולותיה הצפוניים של ישראל עם סוריה ולבנון. מפקד הפיקוד הנוכחי הוא אלוף אמיר ברעם.צאליםהמרכז הלאומי לאימונים ביבשה - מחנה שומרון ונודע גם בכינויו בסיס צאלים, הוא בסיס צבאי ישראלי הממוקם ליד קיבוץ צאלים בנגב, ומשמש כבסיס האימונים הראשי והגדול ביותר של יחידות זרוע היבשה בצה"ל. הבסיס נקרא על שם רא"ל דן שומרון. הבסיס ושטחי האש שלו מכסים שטחים נרחבים בנגב המאפשרים עריכת אימונים בסדרי גודל רחב, מאימוני גדוד ועד אוגדה.';
let basesVisitedArr = ["bahad1", "maklef", "ovda", "tzalim", "tzanchanim", "pikudTzafoon"];

let InfoArr= ['לפני תחילת הירי על הע מע"מ לקחת את המיקוומים האגורים של שאר הקנים ולאשר אותם מול מפקד העמדה' ,'לאחר אישור מיקומי הקנים, הע מע"מ מעביר את הפקודה שקיבל ממפקד העמדה לשאר הקנים. חובה לבצע  נוהל "הקורא"','הקנה פותח משימה וקורא לע מע"מ לאישור נתונים- אזימוט וטווח יש לשים לב שמקבל יחידת מידה אל/מע','לאחר אישור הנתונים, מחכים לקבלת "מוקי" מהקנה המטווח','ע מע"מ מבקש ממפקד העמדה אישור לירי','אחרי קבלת אישור, תזמון הקנה המטווח'];
let index=0;
let InfoArr2= ['מפקד העמדה מעביר לע מע"מ תיקון','הע מע"מ מעביר את התיקון למש"קים בשאר הקנים','','לאחר שהמש"ק מזין את התיקון במערכת, ע מע"מ יוודא אותו בשנית ע"י נוהל הקורא'];
let index2=0;


window.addEventListener("load", (event) => {
    index=0;
    index2=0;
    if (sessionStorage.getItem("visitCounter") === null) {
        document.getElementById("layer").style.animation = "higherOpacity 3s linear";
        document.getElementById("infront").style.animation = "moveText 3s linear";
        document.getElementById("title").style.animation = "changeFontSize 3s linear";
        setTimeout(showPage, 3000);
    } else {
        showPage();
    }
})

const showPage = () => {
    document.getElementById("infront").style = "top: 4vh; right: 2vw;";
    document.getElementById("title").style = "font-size: 4vh;";
    document.getElementById("afterAnimations").style.visibility = "visible";
    for (let i = 0; i < document.getElementsByClassName("subject").length; i++) {
        document.getElementsByClassName("subject")[i].addEventListener("click", showInfo);
    //     document.getElementsByClassName("subject")[i].addEventListener("mouseover", () => {
    //         // document.getElementsByClassName("subject")[i].setAttribute("style", `assets/media/part1/backBtn/tzalim.gif`);
    //         document.getElementsByClassName("subject")[i].style.animation = "bigSmall 3s linear infinte";

    //     });
    //     document.getElementsByClassName("subject")[i].addEventListener("mouseout", () => {
    //         document.getElementsByClassName("subject")[i].style.animation = "bigSmall 3s linear infinte";
    //     });
    }
}

const showInfo = (event) => {
    let subjNum = event.currentTarget.id;
    document.getElementById("afterAnimations").style.display = "none";
    // document.getElementById("symbol").setAttribute("src", `assets/media/part1/symbols/${baseName}.png`);
    document.getElementById("baseName").innerText = getName(event);
    // document.getElementById("backBtn").setAttribute("src", `assets/media/part1/backBtn/${baseName}.png`);
    // document.getElementById("backBtn").addEventListener("mouseover", () => {
    //     document.getElementById("backBtn").setAttribute("src", `assets/media/part1/backBtn/${baseName}.gif`);
    // })
    // document.getElementById("backBtn").addEventListener("mouseout", () => {
    //     document.getElementById("backBtn").setAttribute("src", `assets/media/part1/backBtn/${baseName}.png`);
    // })
    // document.getElementById("text").innerText = window[`${baseName}`];
    document.getElementById("backBtnSection").addEventListener("click", () => {
        document.getElementById("showInfo").style.visibility = "hidden";
        document.getElementById("subj1H").style.visibility= "hidden";
        document.getElementById("subj2H").style.visibility= "hidden";
        document.getElementById("subj3H").style.visibility= "hidden";
        document.getElementById("subj4H").style.visibility = "hidden";
        document.getElementById("subj5H").style.visibility= "hidden";
        document.getElementById("subj6H").style.visibility= "hidden";
        document.getElementById("subj7H").style.visibility= "hidden";
        document.getElementById("subj8H").style.visibility= "hidden";
        document.getElementById("after").style.visibility= "hidden";


        document.getElementById("afterAnimations").style.display = "block";
    })

    document.getElementById(event.currentTarget.id).classList.add("pink");
    let counter=0;
    for (let i = 0; i < document.getElementsByClassName("subject").length; i++) {
        if(document.getElementsByClassName("subject")[i].classList.contains("pink")){
            counter++;
            if(counter===8){
                document.getElementById("backBtnSection").addEventListener("click", () => {
                    document.body.innerHTML+='<button id="examBtn" style="position: absolute;top: 93vh;width: 20vh;height: 6vh;left: 1vw;border: 1px solid #cca683;z-index: 2;border-radius: 30px;font-size: 2.5vh;background-color: #cca683;color: white;font-weight: 600;">לבדיקות הבנה</button>';
                    document.getElementById("examBtn").addEventListener("click",()=>{
                        window.location.href="end.html";
                    })
                })
            }
        }
    }
    if (sessionStorage.getItem("visitCounter") === String(1)) {
        baseCounter = 6;
    }
    if (baseCounter === 6) {
        const node = document.createElement("button");
        node.innerText = "לעמוד הבא";
        node.setAttribute("id", "nextPage");
        node.setAttribute("class", "nextPage");
        document.getElementById("afterAnimations").appendChild(node);
        document.getElementById("nextPage").addEventListener("click", instructionsPage);
    }
    console.log("baseCounter"+baseCounter);
    document.getElementById("showInfo").style.visibility = "visible";

}

const info =()=>{
    index+=1;
    if(index!=6){
        document.getElementById("InfoPlacement").innerText=InfoArr[index];
        document.getElementById("num").innerText=index+1;
    }
    if(index==5){
        document.getElementById("next").style.display="none";
    }if(index==0){
        document.getElementById("next").style.display="block";
    }
}


const info2 =()=>{
    if(index2==0){
        document.getElementById("next2").style.display="block";
        console.log("index2==0")

    }
    index2+=1;
    console.log(index2);
    if(index2!=4){
        document.getElementById("InfoPlacement2").innerText=InfoArr2[index2];
        document.getElementById("num2").innerText=index2+1;
        console.log("index2!=4")
    }if(index2==3){
        document.getElementById("next2").style.display="none";
        document.getElementById("subj8H").innerHTML='<div id="num2"></div><div id="InfoPlacement2"></div><div class="arrow" style="top: 50vh; right: 78vw;" id="next2"><</div>';
        console.log("index2==3")
    }if(index2==2){
        document.getElementById("subj8H").innerHTML+='<img src="assets/media/part1/solider.png" id="solider2"><img src="assets/media/part1/speechBubble.png" id="speechBubble2" style="top:48vh;"><div class="txt6" style="top: 52vh;position: absolute;width: 16vw;z-index: 2;left: 32vw;" id="txt6"> שבע כאן קודקוד קבל תיקון לנפיץ 100 יותר. אזימוט שלי במעלות 080 בנפיץ לפי פקודה </div>'
        console.log("index2==2");
        
        document.getElementById("next2").addEventListener("click", ()=>{
            document.getElementById("InfoPlacement2").innerText=InfoArr2[3];
            document.getElementById("num2").innerText=4;
            document.getElementById("next2").style.display="none";
            document.getElementById("solider2").style.display="none";
            document.getElementById("speechBubble2").style.display="none";
            document.getElementById("txt6").style.display="none";
        } ); 
    }
}

const getName = (event) => {
    switch (event.currentTarget.id) {
        case ("subj1"): {// "ירי פצצה ראשונה- טיווח"
            document.getElementById("subj1H").style.visibility= "visible";
            return "ירי פצצה ראשונה- טיווח";
            break;
        } case ("subj2"): {//סדפ
            document.getElementById("subj2H").style.visibility= "visible";
            index=0;
            document.getElementById("next").style.display="block";

            document.getElementById("InfoPlacement").innerText=InfoArr[index];
            document.getElementById("num").innerText=index+1;
            // document.getElementById("prev").addEventListener("click", ()=>{
            //     if(index!=0){
            //         document.getElementById("InfoPlacement").innerText=InfoArr[index-1];
            //         document.getElementById("num").innerText=index;
            //         console.log("prev")

            //     }
            // });
            document.getElementById("next").addEventListener("click", info ); 
            return 'סד"פ לפני כל ירי';
            break;
        }case ("subj3"): {//תפקידים
            document.getElementById("subj3H").style.visibility= "visible";
            return "תפקידים";
            break;
        } case ("subj4"): {//איך נראית פקודה
            document.getElementById("subj4H").style.visibility= "visible";
            for (let i = 0; i < document.getElementsByClassName("hidden").length; i++) {
                document.getElementsByClassName("hidden")[i].style.visibility='hidden';
            }
            for (let i = 0; i < document.getElementsByClassName("commands").length; i++) {
                document.getElementsByClassName("commands")[i].addEventListener("mouseover", () => {
                    document.getElementsByClassName("hidden")[i].style.visibility='visible';
                })
                document.getElementsByClassName("commands")[i].addEventListener("mouseout", () => {
                    document.getElementsByClassName("hidden")[i].style.visibility='hidden';
                })
            }
            return "?איך נראית פקודה";
            break;
        }case ("subj5"): {//ירי תכלית
            document.getElementById("subj5H").style.visibility= "visible";
            document.getElementById("next3").addEventListener("click",()=>{
                document.getElementById("before").style.visibility="hidden";
                document.getElementById("after").style.visibility="visible";
                document.getElementById("next3").style.visibility="hidden";
            })
            return "ירי תכלית";
            break;
        } case ("subj6"): {//ירי אש מבוקרת
            document.getElementById("subj6H").style.visibility= "visible";

            return 'ירי אש מבוקרת';
            break;
        } case ("subj7"): {//ירי פצצת ביקורת
            document.getElementById("subj7H").style.visibility= "visible";

            return "ירי פצצת ביקורת";
            break;
        } case ("subj8"): {//קבלת תיקון
            document.getElementById("subj8H").style.visibility= "visible";
            index2=0;
            document.getElementById("next2").style.display="block";
            document.getElementById("InfoPlacement2").innerText=InfoArr2[index2];
            document.getElementById("num2").innerText=index2+1;
            
            document.getElementById("next2").addEventListener("click", info2 ); 
            return "קבלת תיקון";
            break;
        } default: {
            return "שגיאה" ;
            break;
        }
    }
}

const instructionsPage = () => {
    document.getElementById("instructionsPage").appendChild(document.getElementById("nextPage"));
    document.getElementById("nextPage").innerText = "יאללה למשחק!";
    document.getElementById("instructionsPage").innerHTML += "<button id='learnMoreBtn' class='nextPage'>בא לי ללמוד עוד קצת</button>";
    document.getElementById("afterAnimations").style.visibility = "hidden";
    document.getElementsByClassName("nextPage")[0].style.bottom = "9vh";
    document.getElementsByClassName("nextPage")[1].style.bottom = "9vh";
    document.getElementById("instructionsPage").style.visibility = "visible";
    document.getElementById("nextPage").addEventListener("click", () => {
        window.location.href = "index1.html";
    });
    document.getElementById("learnMoreBtn").addEventListener("click", returnHome);
}

const returnHome = () => {
    document.getElementById("instructionsPage").style.visibility = "hidden";

    const node = document.createElement("button");
    node.innerText = "לעמוד הבא";
    node.setAttribute("id", "nextPage");
    node.setAttribute("class", "nextPage");
    document.getElementById("afterAnimations").appendChild(node);
    document.getElementById("nextPage").addEventListener("click", instructionsPage);
    showPage();
}