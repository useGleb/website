import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		extend: {
			backgroundImage: {
				primaryBackgroundGradient: 'linear-gradient(45deg,red,green)'
			},
			backgroundSize: {
				'4x': '400%'
			},
  		colors: {
  			background: 'var(--background)',
  			'background-light': 'var(--background-light)',
  			foreground: 'var(--foreground)',
  			'foreground-accent': 'var(--foreground-accent)',
  			typography: 'var(--typography)',
  			'typography-light': 'var(--typography-light)',
  			'foreground-accent-2': 'var(--foreground-accent-2)',
  		},
  		boxShadow: {
  			bubbleButtonBackgroundUnhovered: '0px 0px 45px 10px var(--background), 0px 8px 42px 0px var(--foreground)',
  			bubbleButtonBackgroundHovered: '0px 0px 45px 10px var(--foreground), 0px 8px 42px 0px var(--foreground)',
  			mainBodyShadow: '0px 0px 24px 6px rgba(0,0,0,1)'
  		},
  	}
  },
  plugins: [],
};
export default config;
