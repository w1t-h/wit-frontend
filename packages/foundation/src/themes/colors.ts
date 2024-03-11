export const colors = {
	black: '#1D1D1F',
	white: '#FFFFFF',

	red50: '#FFF5F5',
	red100: '#FED7D7',
	red200: '#FEB2B2',
	red300: '#FC8181',
	red400: '#F56565',
	red500: '#E53E3E',
	red600: '#C53030',
	red700: '#9B2C2C',
	red800: '#822727',
	red900: '#63171B',

	orange50: '#FFFAF0',
	orange100: '#FEEBC8',
	orange200: '#FBD38D',
	orange300: '#F6AD55',
	orange400: '#ED8936',
	orange500: '#DD6B20',
	orange600: '#C05621',
	orange700: '#9C4221',
	orange800: '#7B341E',
	orange900: '#652B19',

	yellow: '#FEE500',

	gray50: '#FAFAFB',
	gray100: '#F8F8F9',
	gray200: '#EEF0F2',
	gray300: '#DDDEE3',
	gray400: '#BBBCC2',
	gray500: '#9497A0',
	gray600: '#70737C',
	gray700: '#595B66',
	gray750: '#414550',
	gray800: '#373B44',
	gray850: '#2B2E36',
	gray900: '#21242C',

	teal50: '#E6FFFA',
	teal100: '#B2F5EA',
	teal200: '#81E6D9',
	teal300: '#4FD1C5',
	teal400: '#38B2AC',
	teal500: '#319795',
	teal600: '#2C7A7B',
	teal700: '#285E61',
	teal800: '#234E52',
	teal900: '#1D4044',

	blue50: '#ebf8ff',
	blue100: '#bee3f8',
	blue200: '#90cdf4',
	blue300: '#63b3ed',
	blue400: '#4299e1',
	blue500: '#3182ce',
	blue600: '#2b6cb0',
	blue700: '#2c5282',
	blue800: '#2a4365',
	blue900: '#1A365D',

	cyan50: '#EDFDFD',
	cyan100: '#C4F1F9',
	cyan200: '#9DECF9',
	cyan300: '#76E4F7',
	cyan400: '#0BC5EA',
	cyan500: '#00B5D8',
	cyan600: '#00A3C4',
	cyan700: '#0987A0',
	cyan800: '#086F83',
	cyan900: '#065666',

	purple50: '#FAF5FF',
	purple100: '#E9D8FD',
	purple200: '#D6BCFA',
	purple300: '#B794F4',
	purple400: '#9F7AEA',
	purple500: '#805AD5',
	purple600: '#6B46C1',
	purple700: '#553C9A',
	purple800: '#44337A',
	purple900: '#322659',

	pink50: '#FFF5F7',
	pink100: '#FED7E2',
	pink200: '#FBB6CE',
	pink300: '#F687B3',
	pink400: '#ED64A6',
	pink500: '#D53F8C',
	pink600: '#B83280',
	pink700: '#97266D',
	pink800: '#702459',
	pink900: '#521B41',
} as const;

export type Colors = typeof colors;
export type ColorKeys = keyof Colors;
