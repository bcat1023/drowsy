function tab(selection) {
    document.getElementById('progress-bar').style.display = 'block';
    if(selection == 'home') {
        try{
            try {
                document.getElementById('stall').style.backdropFilter = 'blur(20px)'
                document.getElementById('stall').style.webkitBackdropFilter = 'blur(20px)'
                document.getElementById('tabframe').src = '/home.html'
            } catch {
                console.log('Error 21')
                return alert('Error 21')
            }
        } catch {
            console.log('Error 2')
            return alert('Error 2')
        }
    }
    if(selection == 'projects') {
        try{
            try {
                document.getElementById('stall').style.backdropFilter = 'blur(20px)'
                document.getElementById('stall').style.webkitBackdropFilter = 'blur(20px)'
                document.getElementById('tabframe').src = '/projects.html'
            } catch {
                console.log('Error 22')
                return alert('Error 22')
            }
        } catch {
            console.log('Error 3')
            return alert('Error 3')
        }
    }
    if(selection == 'research') {
        try{
            try {
                document.getElementById('stall').style.backdropFilter = 'blur(20px)'
                document.getElementById('stall').style.webkitBackdropFilter = 'blur(20px)'
                document.getElementById('tabframe').src = '/research.html'
            } catch {
                console.log('Error 22')
                return alert('Error 22')
            }
        } catch {
            console.log('Failed to load tab: rs')
            return alert('Failed to load tab: rs')
        }
    }
    if(selection == 'bio') {
        try{
            try {
                document.getElementById('stall').style.backdropFilter = 'blur(20px)'
                document.getElementById('stall').style.webkitBackdropFilter = 'blur(20px)'
                document.getElementById('tabframe').src = '/bio.html'
            } catch {
                console.log('Error 23')
                return alert('Error 23')
            }
        } catch {
            console.log('Error 4')
            return alert('Error 4')
        }
    }
    if(selection == 'contact') {
        try{
            try {
                document.getElementById('stall').style.backdropFilter = 'blur(20px)'
                document.getElementById('stall').style.webkitBackdropFilter = 'blur(20px)'
                document.getElementById('tabframe').src = '/contactframe.html'
            } catch {
                console.log('Error 24')
                return alert('Error 24')
            }
        } catch {
            console.log('Error 5')
            return alert('Error 5')
        }
    }
    if(selection == 'tn') {
        try{
            try {
                document.getElementById('stall').style.backdropFilter = 'blur(20px)'
                document.getElementById('stall').style.webkitBackdropFilter = 'blur(20px)'
                document.getElementById('tabframe').src = '/tt.html'
            } catch {
                console.log(console.error())
                return alert('Failed to open TN tab')
            }
        } catch {
            console.log('Error 5')
            return alert('Error 5')
        }
    }
}

function radio() {
    document.getElementById('radio').classList.toggle("radioon");document.getElementById('radioin').classList.toggle("activebutton")
}

function deblur() {
    document.getElementById('stall').style.backdropFilter = 'blur(0px)'
    document.getElementById('stall').style.webkitBackdropFilter = 'blur(0px)'
    document.getElementById('progress-bar').style.display = 'none';
}



var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('frontPageText');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};