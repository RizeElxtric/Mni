// vaping-juices.js
const vapingJuices = [
    { name: 'Jewel Mint', price: '$10', image: '../images/juice1.jpg' },
    { name: 'Vaping Juice 2', price: '$15', image: '../images/juice2.jpg' },
    { name: 'The Smoke Club', price: '$15', image: '../images/juice3.jpg' },
    // Add more juices as needed
];

const juicesSection = document.getElementById('vaping-juices');

vapingJuices.forEach(juice => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <img src="${juice.image}" alt="${juice.name}">
        <h2>${juice.name}</h2>
        <p>${juice.price}</p>
    `;

    juicesSection.appendChild(card);
});
