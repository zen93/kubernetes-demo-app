function checkAnswers() {
    let s1, s2, s3, s4, s5, correctCount = 0;
    s1 = document.getElementById('s1');
    s2 = document.getElementById('s2');
    s3 = document.getElementById('s3');
    s4 = document.getElementById('s4');
    s5 = document.getElementById('s5');
    if(s1.value == 21) {
        s1.className = 'form-control is-valid'
        correctCount++;
    }
    else {
        s1.className = 'form-control is-invalid';
    }
    if(s2.value == 144) {
        s2.className = 'form-control is-valid'
        correctCount++;
    }
    else {
        s2.className = 'form-control is-invalid';
    }
    if(s3.value == 3) {
        s3.className = 'form-control is-valid'
        correctCount++;
    }
    else {
        s3.className = 'form-control is-invalid';
    }
    if(s4.value == 5702887) {
        s4.className = 'form-control is-valid'
        correctCount++;
    }
    else {
        s4.className = 'form-control is-invalid';
    }
    if(s5.value == 218922995834555200000) {
        s5.className = 'form-control is-valid'
        correctCount++;
    }
    else {
        s5.className = 'form-control is-invalid';
    }
    if(correctCount == 5) {
        // alert("Congratulations! You've unlocked the secret to longevity!");
        var url = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
        url += '/supersecreturl452';
        location.replace(url);
    }
}

function getFibonacci() {
    let radios = document.getElementsByName('fibonacciOptions');
    let recursive = true;
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          // do whatever you want with the checked radio
          if (radios[i].value.localeCompare('iterative') == 0) {
              recursive = false;
          }
          // only one radio can be logically checked, don't check the rest
          break;
        }
    }
    if(recursive) {
        let nFibonacci = document.getElementById('nFibonacci');
        var url = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
        let rURL = url + '/fibonacci/recursive?n=' + (document.getElementById('n').value ? document.getElementById('n').value : '0');
        nFibonacci.innerHTML = '<em>Loading...</em>';
        fetch(rURL)
        .then(function(res) {
            if(res.status != 200) {
                nFibonacci.innerHTML = 'Something broke. Status: ' + res.status;
                return;
            }
            res.text().then(function(sum) {
                nFibonacci.innerHTML = sum;
            });
        })
        .catch(function(err) {
            nFibonacci.innerHTML = 'Fetch failed. ' + err;
        });
    }
    else {
        let nFibonacci = document.getElementById('nFibonacci');
        var url = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
        let iURL = url + '/fibonacci/iterative?n=' + (document.getElementById('n').value ? document.getElementById('n').value : '0');
        nFibonacci.innerHTML = '<em>Loading...</em>';
        fetch(iURL)
        .then(function(res) {
            if(res.status != 200) {
                nFibonacci.innerHTML = 'Something broke. Status: ' + res.status;
                return;
            }
            res.text().then(function(sum) {
                nFibonacci.innerHTML = sum;
            });
        })
        .catch(function(err) {
            nFibonacci.innerHTML = 'Fetch failed. ' + err;
        });
    }
}