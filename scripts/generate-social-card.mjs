import sharp from "sharp";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
	<rect width="1200" height="630" fill="#0f172a" />
	<rect x="0" y="0" width="12" height="630" fill="#e4a3b2" />

	<g transform="translate(88 78) scale(1.15)">
		<rect width="64" height="64" rx="14" fill="#1e293b" />
		<rect x="11" y="18" width="17" height="5" rx="2.5" fill="#e4a3b2" />
		<rect x="17" y="23" width="5" height="24" rx="2.5" fill="#e4a3b2" />
		<path d="M51 22.5a12.5 12.5 0 1 0 0 19" fill="none" stroke="#f8fafc" stroke-linecap="round" stroke-width="5" />
	</g>

	<text x="88" y="252" fill="#f8fafc" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="84" font-weight="700">Tommy Cheung</text>
	<text x="90" y="322" fill="#e4a3b2" font-family="Menlo, Monaco, monospace" font-size="34" font-weight="600">AI ENGINEER</text>
	<text x="90" y="412" fill="#cbd5e1" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="30">Practical LLM, ML, and MLOps systems.</text>
	<text x="90" y="456" fill="#cbd5e1" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="30">From data pipelines to the interface.</text>

	<line x1="88" y1="520" x2="1112" y2="520" stroke="#1e293b" stroke-width="2" />
	<text x="88" y="568" fill="#94a3b8" font-family="Menlo, Monaco, monospace" font-size="24">monitus.org</text>
	<text x="1112" y="568" fill="#94a3b8" font-family="Menlo, Monaco, monospace" font-size="24" text-anchor="end">Open to AI/ML roles</text>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile("public/social-card.png");
console.log("Wrote public/social-card.png");
