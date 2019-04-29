
/*
* GAME FUNCTIONS JAVASCRIPT
*/

var numberOfRolls;
var rollableDice; // dice in the rollboard
var nonrollableDice; // dice in the keepboard

var result;
var animal;
var animals;

var chickensvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 98"><defs><style>.cls-1{fill:#221e1b;}.cls-2{fill:#ede20a;}</style></defs><title>chicken</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M1,99V1H101V99ZM53.23,67.53c1.24,3.68,1.83,6.87,3.38,9.5,1.09,1.84,3.66,4.3,5.25,4.09,4.49-.6,9.84-1.25,13-4,7.74-6.83,13-15.66,14.12-26.29a9,9,0,0,0-1.92-6c-2.17-2.65-5.31-4.49-7.5-7.12-2.52-3-7.32-4.86-4.72-10.89,1.59-3.66-4.21-8.37-8.76-8.27-1.26,0-3.12-.28-3.7-1.12-2.15-3.12-5.17-2.79-8.07-2.37-5.73.83-12.54-1.17-16.16,5.73-.16.29-.93.26-1.41.39-3.6,1-5.66,3.3-5.87,7.06A10,10,0,0,0,31.46,31c.82-.42,2.18-.68,2.37-1.3,1.42-4.61,4-4.11,7.27-1.21.55-2,.56-3.73,1.43-4.68,1.19-1.29,4-3.13,4.45-2.74,2.93,2.39,4.76.33,6.89-1,1.78-1.13,3.87-2.27,4.76.7,1.13,3.74,3.38,4.07,6.7,3.4,1.06-.21,2.41,1.06,3.63,1.65-.67.94-1.32,1.91-2,2.83s-2.17,1.91-2,2.67c.16,1,1.46,1.91,2.43,2.65,1.16.87,2.77,1.26,3.69,2.3,4.3,4.84,8.43,9.83,12.65,14.8-1.45,12.79-7.64,22.26-22,25.14-1.23-2.57-2.63-5.3-3.85-8.11-2.54-5.83-5.22-6.25-9.71-1.89-3,2.92-5.64,6.83-11.72,6.75,1.15-3.08,2.09-5.44,2.9-7.84,2.23-6.56,1.84-7.13-4.94-7.51-4.42-.24-8.84-.43-14.47-.7,1.48-1.76,2.09-2.89,3-3.53a95.71,95.71,0,0,1,8.22-5.14c3.89-2.13,5.18-4.91,2.8-8.92l-3-5c-.83,2-2.17,3.73-1.76,4.6,1.38,2.92.43,4-2.05,5.8A100.3,100.3,0,0,0,15.35,55.1c-3.67,3.6-3.48,5.2,1.24,6.41A56.66,56.66,0,0,0,29.88,62.8c4.06,0,5,1.67,3.95,5.28-.87,3-1.67,6-2.24,9a3.33,3.33,0,0,0,.89,2.82,3.44,3.44,0,0,0,3,0,48.79,48.79,0,0,0,6.19-3.85C45.35,73.45,49,70.7,53.23,67.53ZM50.17,36.61c-6.88.8-9.05,3.1-8.32,9.2.48,4,4.83,7.49,8.58,6.89,4.72-.74,7.48-4.92,6.78-9.6-2,.17-5.06,1.14-5.65.33C50.4,41.81,50.6,39.22,50.17,36.61Z" transform="translate(-1 -1)"/><path class="cls-2" d="M53.23,67.53C49,70.7,45.35,73.45,41.66,76.09a48.79,48.79,0,0,1-6.19,3.85,3.44,3.44,0,0,1-3,0,3.33,3.33,0,0,1-.89-2.82c.57-3,1.37-6,2.24-9,1-3.61.11-5.24-3.95-5.28a56.66,56.66,0,0,1-13.29-1.29c-4.72-1.21-4.91-2.81-1.24-6.41A100.3,100.3,0,0,1,27.08,44.71c2.48-1.76,3.43-2.88,2.05-5.8-.41-.87.93-2.56,1.76-4.6l3,5c2.38,4,1.09,6.79-2.8,8.92a95.71,95.71,0,0,0-8.22,5.14c-.94.64-1.55,1.77-3,3.53,5.63.27,10.05.46,14.47.7,6.78.38,7.17.95,4.94,7.51-.81,2.4-1.75,4.76-2.9,7.84,6.08.08,8.71-3.83,11.72-6.75,4.49-4.36,7.17-3.94,9.71,1.89,1.22,2.81,2.62,5.54,3.85,8.11,14.41-2.88,20.6-12.35,22-25.14-4.22-5-8.35-10-12.65-14.8-.92-1-2.53-1.43-3.69-2.3-1-.74-2.27-1.65-2.43-2.65-.12-.76,1.34-1.74,2-2.67s1.35-1.89,2-2.83c-1.22-.59-2.57-1.86-3.63-1.65-3.32.67-5.57.34-6.7-3.4-.89-3-3-1.83-4.76-.7-2.13,1.34-4,3.4-6.89,1-.47-.39-3.26,1.45-4.45,2.74-.87.95-.88,2.7-1.43,4.68-3.25-2.9-5.85-3.4-7.27,1.21-.19.62-1.55.88-2.37,1.3a10,10,0,0,1-.61-2.73c.21-3.76,2.27-6.08,5.87-7.06.48-.13,1.25-.1,1.41-.39,3.62-6.9,10.43-4.9,16.16-5.73,2.9-.42,5.92-.75,8.07,2.37.58.84,2.44,1.15,3.7,1.12,4.55-.1,10.35,4.61,8.76,8.27-2.6,6,2.2,7.84,4.72,10.89,2.19,2.63,5.33,4.47,7.5,7.12a9,9,0,0,1,1.92,6c-1.08,10.63-6.38,19.46-14.12,26.29-3.14,2.76-8.49,3.41-13,4-1.59.21-4.16-2.25-5.25-4.09C55.06,74.4,54.47,71.21,53.23,67.53Z" transform="translate(-1 -1)"/><path class="cls-2" d="M50.17,36.61c.43,2.61.23,5.2,1.39,6.82.59.81,3.65-.16,5.65-.33.7,4.68-2.06,8.86-6.78,9.6-3.75.6-8.1-2.9-8.58-6.89C41.12,39.71,43.29,37.41,50.17,36.61Z" transform="translate(-1 -1)"/></g></g></svg>';

var cowsvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 99"><defs><style>.cls-3{fill:#fff;}</style></defs><title>cow</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M1,100V1H97v99ZM23.62,57c1,2.07,1.4,4.3,2.73,5.59,3.43,3.29,4,7.23,4.16,11.66.17,6.21,3.82,10.36,9.47,12.15,4,1.27,8.44,1.23,12.66,2,2.32.4,5,.62,6.81,1.9,10.12,7.07,18.18,4,20.64-8.23a12.11,12.11,0,0,1,5.85-8.69C92.08,69.54,93.23,63,89.16,57c-1.46-2.16-3.27-4.07-4.89-6.06,5.67-5.49,5.86-6.7,1.1-12.61-1.74-2.16-4.3-3.64-6.16-5.73-1.13-1.29-2.43-3.21-2.28-4.71.78-7.83-3.08-13-9.62-15.83a15.83,15.83,0,0,0-10.71-.28c-1.7.6-2.07,5-3.07,7.75-1.72-.16-4.38.14-6.56-.75-4.88-2-11.4,1.16-15.09-5.07-.69-1.17-4.05-1.36-6-1.06-9.63,1.45-15.78,12.32-11.93,21.23,1.21,2.78.75,4.19-1.16,6.44-2.17,2.57-5.34,7.17-4.4,8.89,1.81,3.34,6,5.54,9.59,7.68C19.26,57.64,21.48,57,23.62,57Z" transform="translate(-1 -1)"/><path class="cls-3" d="M23.62,57c-2.14,0-4.36.67-5.68-.13-3.55-2.14-7.78-4.34-9.59-7.68-.94-1.72,2.23-6.32,4.4-8.89,1.91-2.25,2.37-3.66,1.16-6.44-3.85-8.91,2.3-19.78,11.93-21.23,2-.3,5.35-.11,6,1.06,3.69,6.23,10.21,3.07,15.09,5.07,2.18.89,4.84.59,6.56.75,1-2.78,1.37-7.15,3.07-7.75A15.83,15.83,0,0,1,67.31,12c6.54,2.83,10.4,8,9.62,15.83-.15,1.5,1.15,3.42,2.28,4.71,1.86,2.09,4.42,3.57,6.16,5.73,4.76,5.91,4.57,7.12-1.1,12.61,1.62,2,3.43,3.9,4.89,6.06,4.07,6,2.92,12.59-3.22,16.36A12.11,12.11,0,0,0,80.09,82c-2.46,12.26-10.52,15.3-20.64,8.23-1.83-1.28-4.49-1.5-6.81-1.9-4.22-.73-8.64-.69-12.66-2-5.65-1.79-9.3-5.94-9.47-12.15-.13-4.43-.73-8.37-4.16-11.66C25,61.27,24.59,59,23.62,57ZM37,30.16c-3.85-.42-7.4.24-9.3-1.23-4.74-3.68-.34-7.52,1.56-11.68-4.89-.19-7.65,2.14-10,5.25-4.86,6.38.32,11.06,3.09,16.17-2.37,1.76-4.82,3-6.48,5-1.26,1.48-1.5,3.83-2.2,5.79a73.63,73.63,0,0,0,8.1,2.31c.82.14,1.84-1.33,2.88-1.8a26.07,26.07,0,0,1,3.53-1.07c.8,4.19.4,8.55,2.37,11,3.41,4.28,5.43,8.51,5,11.76-.47-2.46,2.74-3.13,6-3.38,4.64-.35,9.3-.42,13.95-.6,3.63-.14,5.39,1.69,6,5.22,1,5.54-2.42,7.77-6.32,9,3.16,2,6.33,4.2,9.65,6.14,4.27,2.49,8.32.94,9.91-3.73.59-1.72.51-3.74,1.35-5.3,1.6-3,3.1-6.35,5.61-8.34,6.1-4.85,6.78-8,1.42-13.78-2.65-2.88-5.63-5.44-9-8.64a21.89,21.89,0,0,0,3.1-.73c2-.86,4-1.82,6-2.74-1-1.8-1.66-4.09-3.17-5.3C77,37.08,73.52,35.23,70,33c2.33-5,4.1-10.32-1.33-14.68-2.55-2.05-5.3-4.43-9.32-2.62,5.73,7.48,5.77,8.54.82,12.43-4-1.1-7.63-4.36-12.26-2.39-4.35-4.76-8.6,1.8-13.94-1.39Z" transform="translate(-1 -1)"/><path d="M37,30.16l-3.09-5.83c5.34,3.19,9.59-3.37,13.94,1.39,4.63-2,8.23,1.29,12.26,2.39,4.95-3.89,4.91-4.95-.82-12.43,4-1.81,6.77.57,9.32,2.62C74.06,22.66,72.29,28,70,33c3.56,2.25,7.06,4.1,10.09,6.54,1.51,1.21,2.14,3.5,3.17,5.3-2,.92-4,1.88-6,2.74a21.89,21.89,0,0,1-3.1.73c3.35,3.2,6.33,5.76,9,8.64,5.36,5.81,4.68,8.93-1.42,13.78-2.51,2-4,5.39-5.61,8.34-.84,1.56-.76,3.58-1.35,5.3-1.59,4.67-5.64,6.22-9.91,3.73-3.32-1.94-6.49-4.12-9.65-6.14,3.9-1.28,7.27-3.51,6.32-9-.6-3.53-2.36-5.36-6-5.22-4.65.18-9.31.25-13.95.6-3.28.25-6.49.92-6,3.38.46-3.25-1.56-7.48-5-11.76-2-2.46-1.57-6.82-2.37-11A26.07,26.07,0,0,0,24.64,50c-1,.47-2.06,1.94-2.88,1.8a73.63,73.63,0,0,1-8.1-2.31c.7-2,.94-4.31,2.2-5.79,1.66-1.95,4.11-3.22,6.48-5-2.77-5.11-7.95-9.79-3.09-16.17,2.38-3.11,5.14-5.44,10-5.25-1.9,4.16-6.3,8-1.56,11.68C29.62,30.4,33.17,29.74,37,30.16ZM66.77,54c.76-6.9-5.79-2.47-7.72-5.16-1.34,1.67-3.69,3.28-3.79,5-.19,3.56,2.19,5.9,6,5.76C64.75,59.52,66.66,57.47,66.77,54Zm-23-.6c-2.63-1.82-3.94-3.13-5.51-3.69-1.14-.4-3.52-.22-3.8.4-1,2.15-2.25,4.92-1.62,6.89,1,3,3.91,4.41,7.26,2.93C43.8,58.34,44.52,55.5,43.79,53.43Z" transform="translate(-1 -1)"/><path class="cls-3" d="M66.77,54c-.11,3.44-2,5.49-5.51,5.62-3.81.14-6.19-2.2-6-5.76.1-1.74,2.45-3.35,3.79-5C61,51.56,67.53,47.13,66.77,54Z" transform="translate(-1 -1)"/><path class="cls-3" d="M43.79,53.43c.73,2.07,0,4.91-3.67,6.53-3.35,1.48-6.3.09-7.26-2.93-.63-2,.64-4.74,1.62-6.89.28-.62,2.66-.8,3.8-.4C39.85,50.3,41.16,51.61,43.79,53.43Z" transform="translate(-1 -1)"/></g></g></svg>';


var deathraysvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 99"><defs><style>.cls-5{fill:#1f1e1c;}.cls-4{fill:#07b83f;}</style></defs><title>deathray</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-5" d="M1,100V1H96v99ZM38.05,13.92c-2.11.26-4.67-.16-6.26.9-5.5,3.64-10.76,7.66-15.9,11.79a54.39,54.39,0,0,0-7.84,7.63c-6.11,7.34-5,14.2,3,19.32a44.7,44.7,0,0,0,9,4.59c3.51,1.21,7.57,1,10.85,2.6,5.76,2.75,11.6,2.28,17.57,2.11,1.43,0,2.89.83,4.33,1.28l-.12,1.51c-1.43.64-2.81,1.66-4.29,1.85-4.73.62-9.56.62-14.23,1.51-2.11.4-5.73,2.7-5.57,3.52,1.12,5.67-3.75,7.61-6.16,10.93-2.09,2.86-3.15,5.64-1.11,8.67s4.87,3.46,8.39,2.71c3.8-.81,7.68-3.81,11.71-.25.44.4,2.15.06,2.72-.5,2.74-2.7,5.88-5.25,7.75-8.5,2.37-4.12,5.22-6.37,9.94-5.81,5.76.68,9.6-2.51,12.34-6.75s2-8.91-1.13-13c-1-1.32-1.93-2.69-2.87-4,4-8.71,4-8.65,10.68-14.34a41.68,41.68,0,0,0,6.24-6.43c7.11-9.47,4.09-20.74-7.39-23-11.93-2.3-24.36-2-36.57-2.83a4,4,0,0,0-2.8.87A21.41,21.41,0,0,0,37.92,14Z" transform="translate(-1 -1)"/><path class="cls-4" d="M37.92,14a21.41,21.41,0,0,1,2.5-3.72,4,4,0,0,1,2.8-.87c12.21.78,24.64.53,36.57,2.83,11.48,2.22,14.5,13.49,7.39,23a41.68,41.68,0,0,1-6.24,6.43C74.31,47.35,74.26,47.29,70.26,56c.94,1.31,1.87,2.68,2.87,4,3.14,4.12,3.92,8.72,1.13,13s-6.58,7.43-12.34,6.75c-4.72-.56-7.57,1.69-9.94,5.81-1.87,3.25-5,5.8-7.75,8.5-.57.56-2.28.9-2.72.5-4-3.56-7.91-.56-11.71.25-3.52.75-6.42.2-8.39-2.71s-1-5.81,1.11-8.67c2.41-3.32,7.28-5.26,6.16-10.93-.16-.82,3.46-3.12,5.57-3.52,4.67-.89,9.5-.89,14.23-1.51,1.48-.19,2.86-1.21,4.29-1.85l.12-1.51c-1.44-.45-2.9-1.32-4.33-1.28-6,.17-11.81.64-17.57-2.11-3.28-1.57-7.34-1.39-10.85-2.6a44.7,44.7,0,0,1-9-4.59c-8-5.12-9.16-12-3-19.32a54.39,54.39,0,0,1,7.84-7.63c5.14-4.13,10.4-8.15,15.9-11.79,1.59-1.06,4.15-.64,6.26-.9a32.65,32.65,0,0,1-3.43,4C27.2,24.35,19.79,30.75,12.19,36.91c-3.3,2.69-5,6.05-3.58,9.8A10.46,10.46,0,0,0,18,53.83c5,.38,10.24.17,14.7,1.94C39,58.27,44.92,59.6,51.6,58.24c1.5-.31,4.22.68,4.85,1.87.95,1.82,1.38,4.71.58,6.49-1.72,3.86-11.92,7.27-16.48,6.66a12.64,12.64,0,0,0-5.49,1.35c.83,4.45-1.92,7-4.54,9.78-.53.56-.08,2.06-.08,4.45,2.87-1.57,4.92-3.57,6.93-3.54,2.16,0,4.29,2,6.55,3.16a1.77,1.77,0,0,0,.64-.37,5.34,5.34,0,0,0,1.21-1.57C49,78.14,54.41,73.57,64,74.1c2.2.12,5.66-2.8,6.52-5.08.68-1.79-1.55-4.87-2.88-7.15-.6-1-2.36-1.27-3.25-2.2-2-2.08-3-4.26-.45-6.89,5.94-6.08,11.74-12.3,17.56-18.5a24.42,24.42,0,0,0,2-2.89c4.1-6,2.85-11.92-4.19-13.66-8.7-2.16-17.85-2.57-26.8-3.73l-.24,1.49c2.14.81,4.36,1.44,6.4,2.45,6.36,3.13,7.23,7.52,1.3,11.12s-12.55,5.85-19.15,7.76c-4.35,1.26-10.27,2-12.55-3s2-9.13,5.69-12.18c3.21-2.64,7.1-4.46,11.38-7ZM28.58,87.65c-.58-.25-1-.62-1.31-.53s-.63.61-.93.94c.34.25.74.75,1,.68S28.05,88.15,28.58,87.65Z" transform="translate(-1 -1)"/><path class="cls-5" d="M37.92,14l7.37.51C41,17.13,37.12,19,33.91,21.59c-3.71,3.05-8,7.1-5.69,12.18s8.2,4.31,12.55,3c6.6-1.91,13.32-4.22,19.15-7.76s5.06-8-1.3-11.12c-2-1-4.26-1.64-6.4-2.45L52.46,14c8.95,1.16,18.1,1.57,26.8,3.73,7,1.74,8.29,7.68,4.19,13.66a24.42,24.42,0,0,1-2,2.89c-5.82,6.2-11.62,12.42-17.56,18.5-2.57,2.63-1.55,4.81.45,6.89.89.93,2.65,1.19,3.25,2.2C69,64.15,71.19,67.23,70.51,69c-.86,2.28-4.32,5.2-6.52,5.08-9.58-.53-15,4-18.22,12.42a5.34,5.34,0,0,1-1.21,1.57,1.77,1.77,0,0,1-.64.37c-2.26-1.18-4.39-3.13-6.55-3.16-2,0-4.06,2-6.93,3.54,0-2.39-.45-3.89.08-4.45,2.62-2.78,5.37-5.33,4.54-9.78a12.64,12.64,0,0,1,5.49-1.35c4.56.61,14.76-2.8,16.48-6.66.8-1.78.37-4.67-.58-6.49-.63-1.19-3.35-2.18-4.85-1.87-6.68,1.36-12.64,0-18.93-2.47C28.21,54,22.92,54.21,18,53.83a10.46,10.46,0,0,1-9.36-7.12c-1.42-3.75.28-7.11,3.58-9.8,7.6-6.16,15-12.56,22.43-18.95a32.65,32.65,0,0,0,3.43-4ZM69.26,67.92c-2.39-2-3.73-4.09-5.06-4.08s-2.74,2-4.11,3.13c1.32,1.34,2.45,3.2,4,3.81C65,71.13,66.73,69.41,69.26,67.92Z" transform="translate(-1 -1)"/><path class="cls-5" d="M28.58,87.65c-.53.5-.83,1-1.23,1.09s-.67-.43-1-.68c.3-.33.56-.82.93-.94S28,87.4,28.58,87.65Z" transform="translate(-1 -1)"/><path class="cls-4" d="M69.26,67.92c-2.53,1.49-4.22,3.21-5.12,2.86-1.6-.61-2.73-2.47-4-3.81,1.37-1.13,2.73-3.12,4.11-3.13S66.87,65.87,69.26,67.92Z" transform="translate(-1 -1)"/></g></g></svg>';

var humansvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97 99"><defs><style>.cls-7{fill:#1e1e1f;}.cls-6{fill:#018fb7;}</style></defs><title>human</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-7" d="M1,100V1H98v99Zm49.42-6.18c6.52,0,9.65-.5,14.1-5.84,5.24-6.3,9.28-13.61,13.82-20.49,1-1.48,1.64-3.27,2.89-4.44,6.62-6.14,8-12.53,4.4-21a15.37,15.37,0,0,1-.84-5.3C84.29,24,76.3,15.58,63.73,14.63A7.06,7.06,0,0,1,60.87,14c-9.16-5.08-18.47-4.05-27.3.26-3.9,1.9-6.66,6-10.23,8.71-4.91,3.73-1.69,10.67-6.07,14.51-.12.1.23,1,.57,1.29,3.05,2.37,2.21,5.44,2,8.64a23.27,23.27,0,0,0,1.06,7.82c1.55,5.52,3.41,10.94,5.15,16.4.45,1.43.82,2.89,1.37,4.28C31.7,86.86,39.1,94.15,50.42,93.82Z" transform="translate(-1 -1)"/><path class="cls-6" d="M50.42,93.82c-11.32.33-18.72-7-23-17.95-.55-1.39-.92-2.85-1.37-4.28-1.74-5.46-3.6-10.88-5.15-16.4a23.27,23.27,0,0,1-1.06-7.82c.24-3.2,1.08-6.27-2-8.64-.34-.27-.69-1.19-.57-1.29,4.38-3.84,1.16-10.78,6.07-14.51,3.57-2.71,6.33-6.81,10.23-8.71C42.4,9.91,51.71,8.88,60.87,14a7.06,7.06,0,0,0,2.86.67C76.3,15.58,84.29,24,84.79,36.75a15.37,15.37,0,0,0,.84,5.3c3.56,8.47,2.22,14.86-4.4,21-1.25,1.17-1.91,3-2.89,4.44C73.8,74.37,69.76,81.68,64.52,88,60.07,93.32,56.94,93.8,50.42,93.82Zm-27-57.22c3.41,3.12,4.25,6.16,1.88,10.14-.89,1.49-.56,4.72.53,6.19,3.94,5.38,4.15,11.68,5.57,17.76A34,34,0,0,0,36.19,81c4.44,6.87,18.34,9.69,23.84,3.86s9-13.3,13.37-20c1.36-2.08,2.48-4.55,4.36-6,4.23-3.25,5.7-9.94,3.06-14.27A11.29,11.29,0,0,1,79.15,38C80,29.93,73,17.7,62.61,20.63c-1.08.3-2.76-.72-3.91-1.5-5.85-4-18.85-3.85-24.27.4-.5.39-1.33,1-1.26,1.41.62,3.77-2.6,4.06-4.68,5.4-.37.24-.53.79-.8,1.22l1.91,3.91Z" transform="translate(-1 -1)"/><path class="cls-7" d="M23.41,36.6l6.19-5.13-1.91-3.91c.27-.43.43-1,.8-1.22,2.08-1.34,5.3-1.63,4.68-5.4-.07-.4.76-1,1.26-1.41,5.42-4.25,18.42-4.39,24.27-.4,1.15.78,2.83,1.8,3.91,1.5C73,17.7,80,29.93,79.15,38a11.29,11.29,0,0,0,1.67,6.53c2.64,4.33,1.17,11-3.06,14.27-1.88,1.45-3,3.92-4.36,6C69,71.56,65.46,79.1,60,84.86s-19.4,3-23.84-3.86a34,34,0,0,1-4.8-10.31C30,64.61,29.76,58.31,25.82,52.93c-1.09-1.47-1.42-4.7-.53-6.19C27.66,42.76,26.82,39.72,23.41,36.6Zm15.3,38.75c4.46-.92,8.13-2.18,11.84-2.3S58,74,61.94,74.54c1.28-4.05,2.36-8.15-1.34-11.42-4.4-3.89-15.07-3.83-20.19.34C36.62,66.55,38.24,70.93,38.71,75.35ZM36.11,41.4c-1,5.57,1.45,9.54,6.08,10.2a7.66,7.66,0,0,0,8.57-6.51c.58-4.45-2.24-7.62-7-7.91C42.41,43.31,42.18,43.45,36.11,41.4ZM53.86,43c3.19,7.26,6.53,9.71,10.77,8.48,3.94-1.14,6.17-3.84,5.89-8.07-.27-4-3.43-6.47-8.52-6.66C63.32,42.86,59.32,43.7,53.86,43Z" transform="translate(-1 -1)"/><path class="cls-6" d="M38.71,75.35c-.47-4.42-2.09-8.8,1.7-11.89,5.12-4.17,15.79-4.23,20.19-.34,3.7,3.27,2.62,7.37,1.34,11.42-4-.57-7.69-1.6-11.39-1.49S43.17,74.43,38.71,75.35Z" transform="translate(-1 -1)"/><path class="cls-6" d="M36.11,41.4c6.07,2.05,6.3,1.91,7.63-4.22,4.78.29,7.6,3.46,7,7.91a7.66,7.66,0,0,1-8.57,6.51C37.56,50.94,35.08,47,36.11,41.4Z" transform="translate(-1 -1)"/><path class="cls-6" d="M53.86,43c5.46.71,9.46-.13,8.14-6.25,5.09.19,8.25,2.66,8.52,6.66.28,4.23-2,6.93-5.89,8.07C60.39,52.7,57.05,50.25,53.86,43Z" transform="translate(-1 -1)"/></g></g></svg>';

var tanksvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 98"><defs><style>.cls-9{fill:#221c1c;}.cls-8{fill:#f60102;}</style></defs><title>tank</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-9" d="M1,99V1H104V99ZM55.1,74.77c8.49,0,17,.16,25.47,0,5.64-.14,9.4-3.22,11.1-8.46,1.42-4.38-.5-8-3.44-10.77-4.89-4.67-7.78-10.18-8.14-16.87-.18-3.31-1.43-5-4.83-4.8-3.09.21-5.44-.29-6.18-4.06-.19-1-2.57-2-4-2.08a99.75,99.75,0,0,0-12-.06c-1.37.07-3.32.57-3.93,1.54-2,3.15-4.63,2.9-7.45,2.15-6.47-1.74-12.91-3.6-19.35-5.46-3.83-1.1-6.34-.6-7.12,4.08s1.35,6.51,5.57,6.65c3.62.12,7.32-.39,10.85.2,1.58.27,3.9,2.49,4,3.91.08,1.7-1.83,3.54-3,5.22a42.1,42.1,0,0,1-2.95,3.46c-1.1,1.25-2,3-3.37,3.67-5.65,2.92-8.84,7.81-7.76,12.49,1.34,5.82,5.72,9.13,12.59,9.23C39.11,74.86,47.1,74.78,55.1,74.77Z" transform="translate(-1 -1)"/><path class="cls-8" d="M55.1,74.78c-8,0-16,.08-24,0-6.87-.1-11.25-3.41-12.59-9.23C17.45,60.85,20.64,56,26.29,53c1.39-.72,2.27-2.42,3.37-3.67a42.1,42.1,0,0,0,2.95-3.46c1.19-1.68,3.1-3.52,3-5.22-.06-1.42-2.38-3.64-4-3.91-3.53-.59-7.23-.08-10.85-.2-4.22-.14-6.37-1.86-5.57-6.65s3.29-5.18,7.12-4.08c6.44,1.86,12.88,3.72,19.35,5.46,2.82.75,5.49,1,7.45-2.15.61-1,2.56-1.47,3.93-1.54a99.75,99.75,0,0,1,12,.06c1.43.11,3.81,1.13,4,2.08.74,3.77,3.09,4.27,6.18,4.06,3.4-.22,4.65,1.49,4.83,4.8.36,6.69,3.25,12.2,8.14,16.87,2.94,2.81,4.86,6.39,3.44,10.77-1.7,5.24-5.46,8.32-11.1,8.46C72.08,74.93,63.59,74.77,55.1,74.78Zm4.42-37.29c-5,1.94-6.45,4.77-3.13,8.94h5.88C65.56,42,63.5,39.46,59.52,37.49Z" transform="translate(-1 -1)"/><path class="cls-9" d="M59.52,37.49c4,2,6,4.47,2.75,8.94H56.39C53.07,42.26,54.51,39.43,59.52,37.49Z" transform="translate(-1 -1)"/></g></g></svg>';
var username = '';

// Changing what face is up on the dice
// The idea of how to change the face up side comes from
// https://code.sololearn.com/WRd9v9m6sMF9/#html
function changeTopFace(id, face, number) {
  var die = document.getElementById("die" + id);
  die.style.transform = "";

  // Making it random which face is up
  switch (face) {
    case 1:
    die.style.transform = "rotateY(360deg)";
    break;
    case 2:
    die.style.transform = "rotateY(-90deg)";
    break;
    case 3:
    die.style.transform = "rotateY(180deg)";
    break;
    case 4:
    die.style.transform = "rotateY(90deg)";
    break;
    case 5:
    die.style.transform = "rotateX(90deg)";
    break;
    default:
    die.style.transform = "rotateX(-90deg)";
    break;
  }

  if (number > 0) {
    number--;
    setTimeout(function () { changeTopFace(id, (Math.floor(Math.random() * 6) + 1), number) }, 800);
  } else {
    if (die.style.transform === "rotateY(-90deg)") {
      setTimeout(function () { move(id); }, 900);
    }
  }
}

/**
FUNCTION TO MOVE DICE UP OR DOWN
*/
// Checking if the dice needs to move up or down and then moving it accordingly
function move(id) {
  if(numberOfRolls == -1){
    alert("You cannot move anymore dice because you ended your turn.");
    return;
  } else if(numberOfRolls < 1) {
    alert("You must first roll atleast once");
    return;
  }

  var die = document.getElementById("die" + id);

  // First checking if the die belongs to rollableDice or to nonrollableDice (depending where on the board it is)
  if (rollableDice.indexOf(id) == -1) {
    // If the die belongs to nonrollableDice its important to check if its a tank
    if (die.style.transform === "rotateY(-90deg)") {
      return; // If it is a tank then stop the move function
    }

    nonrollableDice.splice(nonrollableDice.indexOf(id), 1);
    rollableDice.push(id);
  } else {
    if(rollableDice.length < 4) {
      alert("You need to have atleast 3 dice on the board to roll them.");
      return;
    }
    rollableDice.splice(rollableDice.indexOf(id), 1);
    nonrollableDice.push(id);
    if (die.style.transform === "rotateY(-90deg)") {
      die.style.cursor = "default"; // If it is a tank then stop the move function
    }
  }
  setTimeout(function(){updatePositions()}, 80);
}

/**
FUNCTION TO UPDATE THE POSITION OF DICE
*/
function updatePositions() {
  // Updating the positions of the dice on the rollboard
  for (var x = 0; x < rollableDice.length; x++) {
    var temporaryDie = document.getElementById("die" + rollableDice[x]);
    switch (rollableDice[x]) {
      case 1:
      temporaryDie.style.top = "2em";
      temporaryDie.style.left = "5%";
      break;
      case 2:
      temporaryDie.style.top = "1.2em";
      temporaryDie.style.left = "30%";
      break;
      case 3:
      temporaryDie.style.top = "3.3em";
      temporaryDie.style.left = "60%";
      break;
      case 4:
      temporaryDie.style.top = "2.3em";
      temporaryDie.style.left = "80%";
      break;
      case 5:
      temporaryDie.style.top = "7em";
      temporaryDie.style.left = "9%";
      break;
      case 6:
      temporaryDie.style.top = "7.4em";
      temporaryDie.style.left = "40%";
      break;
      case 7:
      temporaryDie.style.top = "6.9em";
      temporaryDie.style.left = "67%";
      break;
      case 8:
      temporaryDie.style.top = "7.8em";
      temporaryDie.style.left = "86%";
      break;
      case 9:
      temporaryDie.style.top = "13em";
      temporaryDie.style.left = "3%";
      break;
      case 10:
      temporaryDie.style.top = "12.4em";
      temporaryDie.style.left = "29%";
      break;
      case 11:
      temporaryDie.style.top = "12.9em";
      temporaryDie.style.left = "59%";
      break;
      case 12:
      temporaryDie.style.top = "13.2em";
      temporaryDie.style.left = "73%";
      break;
      case 13:
      temporaryDie.style.top = "16em";
      temporaryDie.style.left = "20%";
      break;
      default:
      temporaryDie.style.top = "99em";
      temporaryDie.style.left = "99em";
      break;
    }
  }

  // Updating the positions of the dice on the keep board
  for (var i = 0; i < nonrollableDice.length; i++) {
    var temporaryDie = document.getElementById("die" + nonrollableDice[i]);
    temporaryDie.style.top = "30em";
    temporaryDie.style.left = "" + (i * 3.6 + 0.5) + "em";
  }
}

/**
FUNCTION TO UPDATE THE USER'S SCORE
*/
function updateScore(end) {
    end == false;
  var numOfDeathrays = 0;
  var numOfTanks = 0;
  var numOfCows = 0;
  var numOfChickens = 0;
  var numOfHumans = 0;

  for (var x = 1; x < 14; x++) {
    var position = document.getElementById("die" + x).style.transform;
    switch (position) {
      case "rotateY(360deg)":
      numOfHumans++;
      break;
      case "rotateY(-90deg)":
      numOfTanks++;
      break;
      case "rotateY(180deg)":
      numOfChickens++;
      break;
      case "rotateY(90deg)":
      numOfCows++;
      break;
      default:
      numOfDeathrays++;
      break;
    }
  }
  // updating to the user - how many dice she/he has
  document.getElementById("diceScores").innerHTML =
  '<p class="urscore"> You <br>' +
  '<img class="scoreTextDiceFace" src="/ProjectHolsteadSamantha/assets/images/dice/deathray.svg" alt="Picture of a dice whos side up is a DeathRay">' + numOfDeathrays + '<br>' +
  '<img class="scoreTextDiceFace" src="/ProjectHolsteadSamantha/assets/images/dice/tank.svg" alt="Picture of a dice whos side up is a Tank">' + numOfTanks + '<br>' +
  '<img class="scoreTextDiceFace" src="/ProjectHolsteadSamantha/assets/images/dice/cow.svg" alt="Picture of a dice whos side up is a Cow">' + numOfCows + '<br>' +
  '<img class="scoreTextDiceFace" src="/ProjectHolsteadSamantha/assets/images/dice/chicken.svg" alt="Picture of a dice whos side up is a Chicken">' + numOfChickens + '<br>' +
  '<img class="scoreTextDiceFace" src="/ProjectHolsteadSamantha/assets/images/dice/human.svg" alt="Picture of a dice whos side up is a Human">' + numOfHumans + '<br>' +
  '</p>';

  if(!end){
    return;
  }
  var tankNrays = numOfDeathrays - numOfTanks;
  result;
  if(tankNrays < 0){
    result = tankNrays;
  } else {
    if(animal == "Chicken"){
      result = numOfChickens;
    } else if(animal == "Human"){
      result = numOfHumans;
    } else if(animal == "Cow"){
      result = numOfCows;
    }
  }

  document.getElementById("diceScores").innerHTML =
  '<p class="urscore"> You: ' + result +
  '<img class="scoreTextDiceFace" src="/ProjectHolsteadSamantha/assets/images/dice/deathray.svg" alt="Picture of a dice whos side up is a DeathRay">' + numOfDeathrays + '<br>' +
  '<img class="scoreTextDiceFace" src="/ProjectHolsteadSamantha/assets/images/dice/tank.svg" alt="Picture of a dice whos side up is a Tank">' + numOfTanks + '<br>' +
  '<img class="scoreTextDiceFace" src="/ProjectHolsteadSamantha/assets/images/dice/cow.svg" alt="Picture of a dice whos side up is a Cow">' + numOfCows + '<br>' +
  '<img class="scoreTextDiceFace" src="/ProjectHolsteadSamantha/assets/images/dice/chicken.svg" alt="Picture of a dice whos side up is a Chicken">' + numOfChickens + '<br>' +
  '<img class="scoreTextDiceFace" src="/ProjectHolsteadSamantha/assets/images/dice/human.svg" alt="Picture of a dice whos side up is a Human">' + numOfHumans + '<br>' +
  '</p>';
  // telling the user the number of points he/she recieved

  document.getElementById("keepQuestion").innerHTML = "You got " + result + " points";
}

/**
FUNCTION TO END USER'S TURN
*/
function endTurn() {
  if(numberOfRolls < 2) {
    alert("You have to roll at least twice to end a turn!");
    return;
  }

  var check = confirm("Are you sure you want to end your turn?");
  if (check != true) {
    return;
  }

  numberOfRolls = -1;
  updateScore(true);
  updateRecSB();
  sendScore();
}

/**
FUNCTION TO GET THE USER'S SCORE
*/
function getScore(){
  return result;
}

/**
FUNCTION TO CHANGE THE ANIMAL (THAT THE USER CHOOSES)
*/
function changeAnimal(newAnimal){
  animal = newAnimal;

  for(var x = 0; x < animals.length; x++){
    var elem = document.getElementById(animals[x]);
    elem.style.border = "";
  }
  var elem = document.getElementById(animal);
  elem.style.border = "2px solid rgba(109, 206, 53, 1)";

}

/**
FUNCTION TO ROLL THE DICE
*/
// Goes through all the dice and rolls the appropriate ones
function rollDice() {
  // if not your turn - wait for another user
  if(document.getElementById('allscores').textContent.search(username) != -1) {
    alert("You already played your turn, please wait until another player plays his turn.");
    return;
  }

  if(!document.getElementById('player3').textContent.includes('Player three has not played yet')) {
    alert("Three players already played, please start a new game.");
    return;
  }

  if(numberOfRolls == 1){
    if(animal === "undefined") {
      alert("Please select Chicken/Cow/Human.");
      return;
    }

    var check = confirm("Are you sure you want to chose " + animal);
    if (!check) {
      return;
    }
  } else if(numberOfRolls == -1){
    alert("You cannot roll anymore because you ended your turn.");
    return;
  } else {
    if(rollableDice.length < 5) {
      alert("You need to have atleast 5 dice on the board to roll them.");
      return;
    }
  }

  makeDiceNoise();
  numberOfRolls++;
  $("#rollbutton").attr("disabled", true);
  for (var x = 0; x < rollableDice.length; x++) {
    changeTopFace(rollableDice[x], (Math.floor(Math.random() * 6) + 1), 3);
  }
  if(numberOfRolls == 1) {
    setTimeout(function(){document.getElementById("keepQuestion").style.display = "block";}, 3200);
  } else {
    document.getElementById("keepQuestion").innerHTML = "You chose " + animal;
  }
  setTimeout(function () { updateScore(); $("#rollbutton").attr("disabled", false) }, 3200);
}

/**
FUNCTION TO INITIALIZE THE DICE
*/
function initDice() {
  document.getElementById("gameboard").innerHTML = '<div id="rollboard"> </div> <div id="keepboard"> </div>';
  numberOfRolls = 1;
  rollableDice = []; // dice in the rollboard
  nonrollableDice = []; // dice in the keepboard

  result = null;
  animal = "undefined";
  animals = [];
  animals.push("Cow");
  animals.push("Human");
  animals.push("Chicken");
  // starting positions
  for (var x = 1; x < 14; x++) {
    document.getElementById("gameboard").innerHTML += '<div id="die' + x + '"  onclick="move(' + x + ');" > ' +
    '<div class="diceFace human"> ' + humansvg + ' </div>' +
    '<div class="diceFace tank"> ' + tanksvg + ' </div>' +
    '<div class="diceFace chicken"> ' + chickensvg + ' </div>' +
    '<div class="diceFace cow"> ' + cowsvg + ' </div>' +
    '<div class="diceFace deathray"> ' + deathraysvg + ' </div>' +
    '<div class="diceFace deathray2"> ' + deathraysvg + '</div> </div> ';
    move(x);
  }
  numberOfRolls = 0;
}

// Initialize the new chat / scoreboard in a room
function initEverything(room_id, usernameUsers) {
  initDice();
  username = usernameUsers;
  initChat(room_id);
  initSB(room_id);
}

// Making a noise when the dice rolls
function makeDiceNoise() {
    var sound = document.getElementById("dice-roll");
    sound.play();
}
