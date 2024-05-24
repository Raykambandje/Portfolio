document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerform');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nom = document.getElementById('nom').value;
        const email = document.getElementById('email').value;
        const telephone = document.getElementById('telephone').value;
        const message = document.getElementById('message').value;
        
        if (nom && email && telephone && message) {
            alert('Formulaire envoyé avec succès !');
            form.submit();
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });
});

