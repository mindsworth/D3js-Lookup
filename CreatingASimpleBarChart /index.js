// Javascript
d3.select();
d3.selectAll();

d3.select('body').style('background-color', '#0E2CA5');

const dataSet = [80, 100, 56, 120, 180, 30, 40, 120, 160];

const svgWidth = 500,
	svgHeight = 300,
	barPadding = 5,
	barWidth = svgWidth / dataSet.length;

const svg = d3
	.select('.bar-chart')
	.attr('width', svgWidth)
	.attr('height', svgHeight);

const barChart = svg
	.selectAll('rect')
	.data(dataSet)
	.enter()
	.append('rect')
	.attr('y', data => svgHeight - data)
	.attr('height', data => data)
	.attr('width', data => barWidth - barPadding)
	.attr('transform', (data, i) => {
		const translate = [barWidth * i, 0];
		return 'translate(' + translate + ')';
	});

svg.selectAll('rect').style('fill', '#fff');
