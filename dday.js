const firstDay = new Date(prompt("우리가 사귄날을 적어줘!","0000-00-00"));
firstDay.setDate(firstDay.getDate()-1);
const now = new Date();
const passDay = now.getTime() - firstDay.getTime();//날짜간 차이
const passDayToInt = Math.round(passDay / (1000 * 60 * 60 * 24));
document.querySelector("#accent").innerHTML = passDayToInt + "일";
function calcDay(days) {
    const dayToXnum = firstDay.getTime() + days * (1000 * 60 * 60 * 24);
    const dayToX = new Date(dayToXnum);
    const yearX = dayToX.getFullYear();
    const monthX = dayToX.getMonth() + 1;//0은 1월 이므로 보정치 추가
    const dateX = dayToX.getDate();
    document.querySelector("#date"+days).innerHTML = yearX + "년 " + (monthX) + "월 " + dateX + "일";
}
calcDay(100);
calcDay(200);
calcDay(365);
calcDay(720);


