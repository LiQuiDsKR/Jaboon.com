function cal(){
    var curSlot = Number(document.getElementById("curSlot").value);
    var curRub = Number(document.getElementById("curRub").value);
    var finSlot = Number(document.getElementById("finSlot").value);
    var upCost = (curSlot - 32) * 1000;
    var honor = 0;
    var day = 0;
    var famous = 1;
    var guild = 1;
    var statue = 1;

    if (document.getElementById("famous").checked == true) {
        famous = 1.03; // 유명세 버프
    }
    else{
        famous = 1; // 유명세 X
    }

    if (document.getElementById("guild").value == "wood") {
        guild = 1.01;
    }
    else if (document.getElementById("guild").value == "bronze") {
        guild = 1.02;
    }
    else if (document.getElementById("guild").value == "silver") {
        guild = 1.03;
    }
    else if (document.getElementById("guild").value == "gold") {
        guild = 1.04;
    }
    else if (document.getElementById("guild").value == "platinum") {
        guild = 1.05;
    }
    else if (document.getElementById("guild").value == "master") {
        guild = 1.06;
    }

    if (document.getElementById("statue").value == "t1") {
        statue = 1.025;
    }
    else if (document.getElementById("statue").value == "t2") {
        statue = 1.05;
    }
    else if (document.getElementById("statue").value == "t3") {
        statue = 1.075;
    }
    else if (document.getElementById("statue").value == "t4") {
        statue = 1.10;
    }
    else if (document.getElementById("statue").value == "t5") {
        statue = 1.125;
    }
    else if (document.getElementById("statue").value == "t6") {
        statue = 1.15;
    }

    var slot = [];
    
    document.getElementById("log").value = "";

    while (curSlot > honor) {
        if (curRub >= 2500) {
            newPost = {h: 1, d:30};
            slot.push(newPost);
            curRub -= 2500; // 엽서 구매
            //log.value += "일반엽서 구매\n"
        }
        else {
            break;
        }
    }
    while(curSlot < finSlot) {
        while (curRub >= upCost) {
            curRub -= upCost; // 우체통 증축
            upCost += 10000;
            curSlot += 10;
            //log.value += "우체통 슬롯 구매\n"
        }
        while (curSlot > honor) {
            if (curRub >= 2500) {
                newPost = {h: 1, d:30};
                slot.push(newPost);
                curRub -= 2500; // 엽서 구매
                //log.value += "일반엽서 구매\n"
            }
            else {
                break;
            }
        }
        honor = 0;
        for (let i = 0; i < slot.length; i++) {
            honor += slot[i].h;
        }
        curRub += honor * 100 * famous * statue * guild;
        document.getElementById("log").value += "D+" + day + ", 명성 : " + honor + ", 우체통 : " + slot.length + "/" + curSlot + ", 보유루블 : " + curRub + "\n"
        for (let i = 0; i < slot.length; i++) {
            slot[i].d -= 1;
            if (slot[i].d == 0) {
                slot.pop(slot[i]); // 엽서 빠짐
                //log.value += "엽서 소멸\n"
            }
        }
        day += 1;
    }
    document.getElementById("day").value = day + "일";
}

function reset(){
    document.getElementById("famous").checked = true;
    document.getElementById("guild").value = "platinum";
    document.getElementById("statue").value = "t6";
    document.getElementById("curSlot").value = "";
    document.getElementById("curRub").value = "";
    document.getElementById("finSlot").value = "";
    document.getElementById("day").value = "";
    document.getElementById("log").value = "";
}