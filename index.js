function tab(selection) {
    if(selection == 'home') {
        try{
            try {
                document.getElementById('tabframe').src = '/home.html'
                document.getElementById('stall').style.backdropFilter = 'blur(20px)'
                document.getElementById('stall').style.webkitBackdropFilter = 'blur(20px)'
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
                document.getElementById('tabframe').src = '/projects.html'
                document.getElementById('stall').style.backdropFilter = 'blur(20px)'
                document.getElementById('stall').style.webkitBackdropFilter = 'blur(20px)'
            } catch {
                console.log('Error 22')
                return alert('Error 22')
            }
        } catch {
            console.log('Error 3')
            return alert('Error 3')
        }
    }
    if(selection == 'bio') {
        try{
            try {
                document.getElementById('tabframe').src = '/bio.html'
                document.getElementById('stall').style.backdropFilter = 'blur(20px)'
                document.getElementById('stall').style.webkitBackdropFilter = 'blur(20px)'
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
                document.getElementById('tabframe').src = '/contactframe.html'
                document.getElementById('stall').style.backdropFilter = 'blur(20px)'
                document.getElementById('stall').style.webkitBackdropFilter = 'blur(20px)'
            } catch {
                console.log('Error 24')
                return alert('Error 24')
            }
        } catch {
            console.log('Error 5')
            return alert('Error 5')
        }
    }
    document.getElementById('progress-bar').style.display = 'block';
}

function radio() {
    document.getElementById('radio').classList.toggle("radioon");document.getElementById('radioin').classList.toggle("activebutton")
}

function deblur() {
    document.getElementById('stall').style.backdropFilter = 'blur(0px)'
    document.getElementById('stall').style.webkitBackdropFilter = 'blur(0px)'
    document.getElementById('progress-bar').style.display = 'none';
}