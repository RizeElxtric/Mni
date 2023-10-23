// vape-devices.js
const vapeDevices = [
    { name: 'Geekvape T200', price: '$15', image: '../images/vape-device1.jpg' },
    { name: 'Xlim Pro', price: '$20', image: '../images/vape-device2.jpg' },
    { name: 'Gotek S', price: '$25', image: '../images/vape-device3.jpg' },
    // Add more devices as needed
];

const devicesSection = document.getElementById('vape-devices');

vapeDevices.forEach(device => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <img src="${device.image}" alt="${device.name}">
        <h2>${device.name}</h2>
        <p>${device.price}</p>
    `;

    devicesSection.appendChild(card);
});
