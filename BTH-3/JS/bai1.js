function giaiBac2() {
    // Lay id cua tung tk ra
    let a = document.getElementById("aID");
    let b = document.getElementById("aID");
    let c = document.getElementById("aID");

    // Ktra xem moi input cua a, b,c co dang de trong hay ko?
    if(a !== null && b !== null && c !== null) {
        a = parseFloat(a.value);
        b = parseFloat(b.value);
        c = parseFloat(c.value);
    }

    let k1;
    let k2;

    
    // Bien ho 
    // ax2 + bx + c = 0
    let k = "Ket qua";
    let d = document.getElementById("kqqq");
    
    if(a === 0) {
        k = -c / b; 
    } else {
        let delta = b*b - a*a*c;
        if(delta < 0) {
            d.innerHTML = `
                <h2>PT vo nghiem!</h2>
            `
        } else if (delta === 0) {
            k = -b / 2*a;
            d.innerHTML = `
                <h2>PT co nghiem kep: ${k}</h2> 
            `
        } else {
            k1 = (-b + Math.sqrt(delta)) / 2*a;
            k2 = (-b - Math.sqrt(delta)) / 2*a;
            d.innerHTML = `
                <h2>PT co 2 nghiem phan biet: x1 = ${k1}; x2 = ${k2}</h2> 
            `
        }
    }
    
}

function doiTienTe() {
    
}