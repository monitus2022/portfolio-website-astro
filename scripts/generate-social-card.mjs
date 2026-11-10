import sharp from "sharp";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
	<rect width="1200" height="630" fill="#0f172a" />
	<rect x="0" y="0" width="12" height="630" fill="#fb7185" />

	<g transform="translate(88 78) scale(1.15)">
		<rect width="64" height="64" rx="14" fill="#1e293b" />
		<path d="M38 6 17 36h12l-4 22 22-31H35l3-21Z" fill="#fb7185" />
	</g>

	<text x="88" y="252" fill="#f8fafc" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="84" font-weight="700">Tommy Cheung</text>
	<text x="90" y="322" fill="#fb7185" font-family="Menlo, Monaco, monospace" font-size="34" font-weight="600">AI ENGINEER</text>
	<text x="90" y="412" fill="#cbd5e1" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="30">Practical LLM, ML, and MLOps systems.</text>
	<text x="90" y="456" fill="#cbd5e1" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="30">From data pipelines to the interface.</text>

	<line x1="88" y1="520" x2="1112" y2="520" stroke="#1e293b" stroke-width="2" />
	<text x="88" y="568" fill="#94a3b8" font-family="Menlo, Monaco, monospace" font-size="24">monitus.org</text>
	<text x="1112" y="568" fill="#94a3b8" font-family="Menlo, Monaco, monospace" font-size="24" text-anchor="end">Open to AI/ML roles</text>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile("public/social-card.png");
console.log("Wrote public/social-card.png");
