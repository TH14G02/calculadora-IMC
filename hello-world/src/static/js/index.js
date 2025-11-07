document.getElementById('calc-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const a =  parseInt(document.getElementById('a').value);
            const b = parseInt(document.getElementById('b').value);
            window.location.href = `/${a}/${b}`;
        });