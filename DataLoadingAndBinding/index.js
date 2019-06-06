// Javascript
d3.select();
d3.selectAll();

d3.select('h1')
	.style('color', 'indigo')
	.attr('class', 'heading')
	.text('Updated Heading tag text');

const dataSet = [1, 2, 3, 4, 5];

let p = d3
	.select('body')
	.selectAll('p')
	.data(dataSet);
// .text('First Paragraph!!!');

// Entering/////
p.enter()
	.append('p')
	.text(data => data);

// Exiting /////
p.exit().remove();
