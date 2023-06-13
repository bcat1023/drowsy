document.getElementById('bt').addEventListener("click", function () {
    document.getElementById('ptitle').style.filter = 'blur(20px)'
    document.getElementById('psubtitle').style.filter = 'blur(20px)'
    document.getElementById('pmoto').style.filter = 'blur(20px)'
    document.getElementById('mbpDisplay').style.filter = 'blur(20px)'
    document.getElementById('open').style.filter = 'blur(20px)'

    setTimeout(() => {
        document.getElementById('mbpDisplay').src = '/assets/images/MBP BTOS.png'
        document.getElementById('bt').className = "activeButton";
        document.getElementById('tn').className = "passiveButton";
        document.getElementById('open').href = 'https://blacktop.thedrowsy.com'
        document.getElementById('ptitle').innerText = document.getElementById('bt').innerText;
        document.getElementById('psubtitle').innerText = 'BlackTop OS is a WebTop OS that runs in your browser thats focused on the internet';
        document.getElementById('pmoto').innerText = 'Gets better each update';
    }, 200);

    setTimeout(() => {
        document.getElementById('ptitle').style.filter = 'blur(0px)'
        document.getElementById('psubtitle').style.filter = 'blur(0px)'
        document.getElementById('pmoto').style.filter = 'blur(0px)'
        document.getElementById('mbpDisplay').style.filter = 'blur(0px)'
        document.getElementById('open').style.filter = 'blur(0px)'
    }, 300);
})

document.getElementById('tn').addEventListener("click", function () {
    document.getElementById('ptitle').style.filter = 'blur(20px)'
    document.getElementById('psubtitle').style.filter = 'blur(20px)'
    document.getElementById('pmoto').style.filter = 'blur(20px)'
    document.getElementById('mbpDisplay').style.filter = 'blur(20px)'
    document.getElementById('open').style.filter = 'blur(20px)'

    setTimeout(() => {
        document.getElementById('mbpDisplay').src = '/assets/images/MBP TN.png'
        document.getElementById('tn').className = "activeButton";
        document.getElementById('bt').className = "passiveButton";
        document.getElementById('open').href = 'https://games.thedrowsy.com'
        document.getElementById('ptitle').innerText = document.getElementById('tn').innerText;
        document.getElementById('psubtitle').innerText = 'Titan Network, Perfect for all your needs';
        document.getElementById('pmoto').innerText = 'Finished all your work and bored in class/work? Play a game on Titan to pass the time';
    }, 200);

    setTimeout(() => {
        document.getElementById('ptitle').style.filter = 'blur(0px)'
        document.getElementById('psubtitle').style.filter = 'blur(0px)'
        document.getElementById('pmoto').style.filter = 'blur(0px)'
        document.getElementById('mbpDisplay').style.filter = 'blur(0px)'
        document.getElementById('open').style.filter = 'blur(0px)'
    }, 300);
})
