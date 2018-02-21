#!/usr/bin/env node
const argv = require('yargs').argv
const DeltaE = require('delta-e')
const d3Color = require('d3-color')

const color = argv.color
console.log("Given color: " + color);
const colors = require('./colors.json')

function hexToLAB(hexString) {
	const { l, a, b} = d3Color.lab(d3Color.color(hexString))
	return {L:l, A:a, B:b };
}

function colorSimilarity(fromLAB, toLAB) {
	return DeltaE.getDeltaE00(fromLAB, toLAB)
}

function colorsSimilarity(colorLAB) {
	return (colors) => {
		const similarities = []; 
		for (const [name, hexValue] of Object.entries(colors)) {
			const similarity = colorSimilarity(hexToLAB(hexValue), colorLAB)
			similarities.push({
				similarity,
				name,
				hexValue
			});
		}
		return similarities;
	}
}

function colorSimilarityComparison(color1, color2) {
	return color1.similarity - color2.similarity
}

function sortBy(similarityFunction) {
	return (colors) => { 
		return colors.sort(similarityFunction)
	}
}

function formatColorsForDisplay(colors) {
	colors.forEach((color) => {
		console.log(`${color.name} (${color.hexValue}) - ${color.similarity}`)
	})
	return colors
}

formatColorsForDisplay(sortBy(colorSimilarityComparison)(colorsSimilarity(hexToLAB(color))(colors)))
