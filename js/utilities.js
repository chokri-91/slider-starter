'use strict';

/**
 * Génère un entier aléatoire entre 2 bornes
 * @param min - Borne minimale
 * @param max - Borne maximale
 * @returns {number} - L'entier aléatoire
 */
function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
