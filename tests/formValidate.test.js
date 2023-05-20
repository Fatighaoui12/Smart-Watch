const { JSDOM } = require('jsdom');
const fs = require('fs');

// Configuration de l'environnement JS DOM
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

// Chemin vers le fichier contenant le formulaire
const formFilePath = './views/form.html';

// Charger le contenu du fichier
const formCode = fs.readFileSync(formFilePath, 'utf-8');

// Fonctions utilitaires pour la vérification des formats
const isValidPhoneNumber = (phoneNumber) => {
  // Vérification du format du numéro de téléphone
  return /^\+\d{12,15}$/.test(phoneNumber); // Format attendu: +XXXXXXXXXXXXXXX (de 12 à 15 chiffres)
};

// Test du formulaire
describe('Formulaire', () => {
  beforeEach(() => {
    // Réinitialisez l'état du formulaire avant chaque test
    document.body.innerHTML = '';
  });

  test('Soumission du formulaire', () => {
    // Injectez le code du formulaire dans le DOM
    document.body.innerHTML = formCode;

    // Sélectionnez les champs du formulaire en utilisant les identifiants (id)
    const colorSelect = document.querySelector('#color');
    const colorDuoSelect = document.querySelector('#colorDuo');
    const firstNameInput = document.querySelector('#first_name');
    const cityInput = document.querySelector('#city');
    const phoneInput = document.querySelector('#phone');
    const addressTextarea = document.querySelector('#address');
    const submitButton = document.querySelector('.nuxa-btn-submit');

    // Simulez une saisie utilisateur dans les champs du formulaire
    colorSelect.value = '40939713134644'; // Sélectionnez une valeur pour le champ de sélection de couleur
    firstNameInput.value = 'Shar Doe'; // Définissez le prénom avec "Shar Doe"
    cityInput.value = 'Shar City'; // Définissez la ville avec "Shar City"
    phoneInput.value = '+1234567890123'; // Format attendu: +XXXXXXXXXXXXXXX
    addressTextarea.value = 'Shar Street, 123'; // Définissez l'adresse avec "Shar Street, 123"

    // Soumettez le formulaire en créant et en dispatchant un événement de soumission de formulaire
    const submitEvent = new window.Event('submit', { bubbles: true });
    const form = submitButton.closest('form');
    form.dispatchEvent(submitEvent);

    // Effectuez vos assertions ici pour vérifier le comportement attendu après la soumission du formulaire
    expect(colorSelect.value).toBe('40939713134644'); // Vérifiez si la valeur du champ de sélection de couleur est celle attendue
    expect(firstNameInput.value).toMatch(/^Shar/i); // Vérifiez si le champ du prénom commence par "Shar" (insensible à la casse)
    expect(cityInput.value).toMatch(/^Shar/i); // Vérifiez si la valeur du champ de la ville commence par "Shar" (insensible à la casse)
    expect(phoneInput.value).toMatch(/^\+\d{12,15}$/); // Vérifiez si le format du numéro de téléphone est valide
    expect(addressTextarea.value).toMatch(/^Shar/i); // Vérifiez si la valeur du champ de l'adresse commence par "Shar" (insensible à la casse)

    // Vérification du format du numéro de téléphone
    expect(isValidPhoneNumber(phoneInput.value)).toBe(true);
  })
});
