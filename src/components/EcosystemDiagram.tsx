import { asset } from "../lib/assets";

export function EcosystemDiagram() {
  return (
    <svg className="ecosystem-diagram" viewBox="0 0 440 440" role="img" aria-labelledby="ecosystem-diagram-title">
      <title id="ecosystem-diagram-title">Corporate Lion connects businesses, landowners and developers</title>
      <g className="ecosystem-diagram__segment ecosystem-diagram__segment--business" tabIndex={0} role="img" aria-label="Businesses">
        <path className="ecosystem-diagram__arrow" d="M194 44 L216 10 Q220 4 224 10 L246 44 Q220 39 194 44" />
        <path fill="#B87333" d="M80 121 A170 170 0 0 1 374 146 L341 190 L294 184 L220 220 L156 177 L137 130 Z" />
        <image href={asset("business.svg")} x="201" y="80" width="38" height="38" />
      </g>
      <g className="ecosystem-diagram__segment ecosystem-diagram__segment--developers" tabIndex={0} role="img" aria-label="Developers">
        <path className="ecosystem-diagram__arrow" d="M392 268 L414 302 Q418 309 410 310 L373 318 Q385 294 392 268" />
        <path fill="#d8ad85" d="M378 153 A170 170 0 0 1 215 390 L190 339 L219 295 L220 220 L294 191 L340 198 Q344 199 347 195 Z" />
        <image href={asset("developers.svg")} x="299" y="269" width="44" height="40" />
      </g>
      <g className="ecosystem-diagram__segment ecosystem-diagram__segment--landowners" tabIndex={0} role="img" aria-label="Landowners">
        <path className="ecosystem-diagram__arrow" d="M48 268 L26 302 Q22 309 30 310 L67 318 Q55 294 48 268" />
        <path fill="#f5e3d3" d="M207 390 A170 170 0 0 1 76 128 L132 138 L151 184 L220 220 L212 296 L183 336 Q180 340 183 345 Z" />
        <image href={asset("landowners.svg")} x="88" y="237" width="36" height="36" />
      </g>
      <circle cx="220" cy="220" r="81" fill="#fffaf2" stroke="#fffaf2" strokeWidth="7" />
      <circle cx="220" cy="220" r="75" fill="none" stroke="#fcebdc" strokeWidth="6" />
      <path d="M157 179 A75 75 0 0 1 286 184" fill="none" stroke="#B87333" strokeWidth="6" />
      <path d="M289 190 A75 75 0 0 1 221 295" fill="none" stroke="#d8ad85" strokeWidth="6" />
      <image className="ecosystem-diagram__logo" href={asset("newlogo-e1769688001953-Photoroom 1.svg")} x="169" y="196" width="102" height="48" />
    </svg>
  );
}
