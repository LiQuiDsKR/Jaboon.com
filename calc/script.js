function cal(){
    var curSlot = Number(document.getElementById("curSlot").value);
    var curRub = Number(document.getElementById("curRub").value);
    var finSlot = Number(document.getElementById("finSlot").value);
    var upCost = 10000;
    var honor = 0;
    var day = 0;
    var guildBuilding = 1;

    if (document.getElementById("guildBuilding").checked == true) {
        guildBuilding = 1.15; // 길드버프 (풀강)
    }
    else{
        guildBuilding = 1; // 길드버프 X
    }

    var slot = [];

    while (curSlot > honor) {
        if (curRub >= 2500) {
            newPost = {h: 1, d:30};
            slot.push(newPost);
            curRub -= 2500; // 엽서 구매
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
        }
        while (curSlot > honor) {
            if (curRub >= 2500) {
                newPost = {h: 1, d:30};
                slot.push(newPost);
                curRub -= 2500; // 엽서 구매
            }
            else {
                break;
            }
        }
        honor = 0;
        for (let i = 0; i < slot.length; i++) {
            honor += slot[i].h;
        }
        curRub += honor * 100 * guildBuilding;
        for (let i = 0; i < slot.length; i++) {
            slot[i].d -= 1;
            if (slot[i].d == 0) {
                slot.pop(slot[i]); // 엽서 빠짐
            }
        }
        day += 1;
    }
    document.getElementById("day").value = day;
}

function reset(){
    document.getElementById("curSlot").value = "";
    document.getElementById("curRub").value = "";
    document.getElementById("finSlot").value = "";
    document.getElementById("day").value = "";
}