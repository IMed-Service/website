import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const honeyTheme: CustomThemeConfig = {
    name: 'honey-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "16px",
		"--theme-rounded-container": "4px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-tertiary-800)",
		"--on-secondary": "var(--color-tertiary-700)",
		"--on-tertiary": "var(--color-primary-200)",
		"--on-success": "var(--color-tertiary-800)",
		"--on-warning": "var(--color-tertiary-700)",
		"--on-error": "var(--color-tertiary-800)",
		"--on-surface": "var(--color-tertiary-800)",
		// =~= Theme Colors  =~=
		// primary | #da7b08 
		"--color-primary-50": "249 235 218", // #f9ebda
		"--color-primary-100": "248 229 206", // #f8e5ce
		"--color-primary-200": "246 222 193", // #f6dec1
		"--color-primary-300": "240 202 156", // #f0ca9c
		"--color-primary-400": "229 163 82", // #e5a352
		"--color-primary-500": "218 123 8", // #da7b08
		"--color-primary-600": "196 111 7", // #c46f07
		"--color-primary-700": "164 92 6", // #a45c06
		"--color-primary-800": "131 74 5", // #834a05
		"--color-primary-900": "107 60 4", // #6b3c04
		// secondary | #8ba6bc 
		"--color-secondary-50": "238 242 245", // #eef2f5
		"--color-secondary-100": "232 237 242", // #e8edf2
		"--color-secondary-200": "226 233 238", // #e2e9ee
		"--color-secondary-300": "209 219 228", // #d1dbe4
		"--color-secondary-400": "174 193 208", // #aec1d0
		"--color-secondary-500": "139 166 188", // #8ba6bc
		"--color-secondary-600": "125 149 169", // #7d95a9
		"--color-secondary-700": "104 125 141", // #687d8d
		"--color-secondary-800": "83 100 113", // #536471
		"--color-secondary-900": "68 81 92", // #44515c
		// tertiary | #404664 
		"--color-tertiary-50": "226 227 232", // #e2e3e8
		"--color-tertiary-100": "217 218 224", // #d9dae0
		"--color-tertiary-200": "207 209 216", // #cfd1d8
		"--color-tertiary-300": "179 181 193", // #b3b5c1
		"--color-tertiary-400": "121 126 147", // #797e93
		"--color-tertiary-500": "64 70 100", // #404664
		"--color-tertiary-600": "58 63 90", // #3a3f5a
		"--color-tertiary-700": "48 53 75", // #30354b
		"--color-tertiary-800": "38 42 60", // #262a3c
		"--color-tertiary-900": "31 34 49", // #1f2231
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #ff3333 
		"--color-error-50": "255 224 224", // #ffe0e0
		"--color-error-100": "255 214 214", // #ffd6d6
		"--color-error-200": "255 204 204", // #ffcccc
		"--color-error-300": "255 173 173", // #ffadad
		"--color-error-400": "255 112 112", // #ff7070
		"--color-error-500": "255 51 51", // #ff3333
		"--color-error-600": "230 46 46", // #e62e2e
		"--color-error-700": "191 38 38", // #bf2626
		"--color-error-800": "153 31 31", // #991f1f
		"--color-error-900": "125 25 25", // #7d1919
		// surface | #d1b694 
		"--color-surface-50": "248 244 239", // #f8f4ef
		"--color-surface-100": "246 240 234", // #f6f0ea
		"--color-surface-200": "244 237 228", // #f4ede4
		"--color-surface-300": "237 226 212", // #ede2d4
		"--color-surface-400": "223 204 180", // #dfccb4
		"--color-surface-500": "209 182 148", // #d1b694
		"--color-surface-600": "188 164 133", // #bca485
		"--color-surface-700": "157 137 111", // #9d896f
		"--color-surface-800": "125 109 89", // #7d6d59
		"--color-surface-900": "102 89 73", // #665949
		
	}
}
