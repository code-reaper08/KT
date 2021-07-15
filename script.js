const para1 = document.getElementById('para1');


async function getdata() {
    const response = await fetch("https://gist.githubusercontent.com/code-reaper08/bb92db261148dfed81ba4d07c964a004/raw/af26f7e35dddaa56987118963b44362eb1e90074/TA.json");
    const data = await response.json();
    console.log(data)
}
getdata();