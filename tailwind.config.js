module.exports = {
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './app/views/**/*.haml',
    './app/helpers/**/*.rb',
    './app/css/**/*.css',
    './app/javascript/**/*',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '2-auto': 'repeat(2, auto)',
        '3-auto': 'repeat(2, auto)',
      },
    },
    borderRadius: {
      none: '0',
      '3': '3px',
      '5': '5px',
      '8': '8px',
      '12': '12px',
      '100': '100px',
      circle: '100%',
    },
    borderWidth: {
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    boxShadow: {
      none: 'none',
      buttonS: '0px 4px 8px rgba(79, 114, 205, 0.4)',
      xsZ1: '0px 2px 4px 0px rgba(79, 114, 205, 0.3)',
      sm: 'var(--box-shadow-sm)',
      smZ1: '0px 4px 16px 0px rgba(79, 114, 205, 0.3)',
      base: 'var(--box-shadow-base)',
      baseZ1: '0px 4px 24px 0px rgba(79, 114, 205, 0.3)',
      lg: 'var(--box-shadow-lg)',
      lgZ1: 'var(--box-shadow-lgZ1)',
      inputSelected: '0px 0px 2px 2px var(--inputBoxShadowColorFocus)',
      keystroke: '0px 1px 0px 1px rgba(203, 201, 217, 0.6)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      /* NEW */
      darkThemeBackgroundColor: 'var(--darkThemeBackgroundColor)',

      backgroundColorA: 'var(--backgroundColorA)',
      backgroundColorB: 'var(--backgroundColorB)',
      backgroundColorC: 'var(--backgroundColorC)',
      backgroundColorD: 'var(--backgroundColorD)',
      backgroundColorE: 'var(--backgroundColorE)',
      backgroundColorF: 'var(--backgroundColorF)',
      backgroundColorG: 'var(--backgroundColorG)',
      backgroundColorH: 'var(--backgroundColorH)',
      borderColor1: 'var(--borderColor1)',
      borderColor3: 'var(--borderColor3)',
      borderColor4: 'var(--borderColor4)',
      borderColor5: 'var(--borderColor5)',
      borderColor6: 'var(--borderColor6)',
      borderColor7: 'var(--borderColor7)',
      borderColor9: 'var(--borderColor9)',
      textColor1: 'var(--textColor1)',
      textColor2: 'var(--textColor2)',
      textColor3: 'var(--textColor3)',
      textColor5: 'var(--textColor5)',
      textColor6: 'var(--textColor6)',
      textColor7: 'var(--textColor7)',
      textColor8: 'var(--textColor8)',
      textColor9: 'var(--textColor9)',

      linkColor: 'var(--linkColor)',
      buttonBorderColor1: 'var(--buttonBorderColor1)',
      buttonBorderColor2: 'var(--buttonBorderColor2)',
      inputBackgroundColor: 'var(--inputBackgroundColor)',
      inputBorderColor: 'var(--inputBorderColor)',
      inputBorderColorFocus: 'var(--inputBorderColorFocus)',
      tabBackgroundColorSelected: 'var(--tabBackgroundColorSelected)',
      tabColorSelected: 'var(--tabColorSelected)',
      tabIconColorSelected: 'var(--tabIconColorSelected)',
      tabBorderColorSelected: 'var(--tabBorderColorSelected)',
      successColor: 'var(--successColor)',
      lockedColor: 'var(--lockedColor)',

      paginationCurrentBackgroundColor:
        'var(--paginationCurrentBackgroundColor)',
      paginationCurrentBorderColor: 'var(--paginationCurrentBorderColor)',

      easy: '#5FB268',
      easyLight: '#EFFFF1',

      medium: '#A5A256',
      mediumLight: '#F7F5E0',

      hard: '#CB8D6A',
      hardLight: '#F4EBE5',

      unnamed10: '#3D3B45',
      unnamed13: '#33363F',
      unnamed15: '#F0F3F9',
      unnamed16: '#8480A0',
      randomBlue: '#F9F8FF',
      lightGold: '#FFD38F',

      bgGray: '#FBFCFE',
      lightGray: '#EAECF3',
      borderLight: '#CBC9D9',

      lightBlue: '#2E57E8',
      darkBlue: '#6A93FF',
      veryLightBlue: '#E1EBFF',
      veryLightBlue2: '#E2EBFF',
      evenLighterBlue: '#ECF2FF',

      btnBorder: '#5C5589',
      primaryBtnBorder: '#130B43',
      purple: '#604FCD',
      purpleDarkened: '#3B2A93',
      anotherPurple: '#604FCD' /* Remove this */,
      lightPurple: '#B0A8E3',
      lightPurpleDarkened: '#f2f0fc',
      gotToLoveAPurple: '#271B72',
      biggerBolderAndMorePurpleThanEver: '#130B43',
      lightPurple: '#FAFAFF',
      purpleForever: '#5042AD',
      darkPlaceholder: '#9D94DA',

      gray: '#A9A6BD',
      darkGray: '#26282D',

      darkSuccessGreen: '#2E8C70',
      darkGreen: '#43B593',
      mediumGreen: '#B8EADB',
      lightGreen: '#ABDBCC',
      veryLightGreen: 'rgba(79,205,167,0.15)',
      veryLightGreen2: '#E7FDF6',
      limeGreen: '#1FA378',

      tooManyGreens: '#59D2AE',
      literallySoManyGreens: '#4FCDA7',
      soManyGreens: '#228466',
      bgGreen: 'rgba(89, 210, 174, 0.15)',
      everyoneLovesAGreen: '#349F7F',

      orange: '#F69605',
      lightOrange: '#FFF3E1',
      darkRed: '#D03B3B',
      red: '#EB5757',
      lightRed: '#FDEAEA',
      veryLightRed: '#FFEDED',
      bgRed: 'rgba(235, 87, 87, 0.15)',
      gold: '#E2CB2D',
      brown: '#47300C',
      lightBrown: '#955D09',

      warning: '#F69605',
      warningBtnBorder: '#704D19',

      alert: '#D85050',
      alertBtnBorder: '#873333',

      anotherGold: '#FAE54D',

      muddy: '#6E82AA',
      caution: '#955D09',
      color22: '#C8D5EF',

      commonBadge: 'rgb(var(--commonBadge-RGB))',
      commonBadgeFill: '#505359',
      rareBadge: '#DBF0FF',
      rareBadgeFill: '#00144B',
      ultimateBadge: '#F69605',
      ultimateBadgeFill: '#560000',
      legendaryBadge: '#EB5757',
      legendaryBadgeFill: '#4B0000',

      white: '#fff',
      black: '#000',
    },
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
      mono: ['Source Code Pro', 'monospace'],
    },
    fontSize: {
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '17': '17px',
      '18': '18px',
      '20': '20px',
      '21': '21px',
      '22': '22px',
      '23': '23px',
      '24': '24px',
      '25': '25px',
      '28': '28px',
      '31': '31px',
      '32': '32px',
      '34': '34px',
      '39': '39px',
      '40': '40px',
      '48': '48px',
      '54': '54px',
      '64': '64px',
      '100': '100%',
    },
    height: {
      arbitary: '1px',
      '48': '48px',
      '100': '100%',
    },
    lineHeight: {
      none: '1',
      tight: '125%',
      regular: '138%',
      paragraph: '150%',
      code: '160%',
      huge: '170%',

      100: '100%',
      120: '120%',
      130: '130%',
      140: '140%',
      150: '150%',
      160: '160%',
      170: '170%',
      180: '180%',
      190: '190%',
      200: '200%',
    },
    spacing: {
      auto: 'auto',
      '0': '0px',
      '2': '2px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '12': '12px',
      '16': '16px',
      '20': '20px',
      '24': '24px',
      '28': '28px',
      '32': '32px',
      '36': '36px',
      '40': '40px',
      '48': '48px',
      '52': '52px',
      '56': '56px',
      '60': '60px',
      '64': '64px',
      '72': '72px',
      '80': '80px',
      '84': '84px',
      '88': '88px',
      '96': '96px',
      '128': '128px',
      '140': '140px',
    },
    width: {
      // Sometimes, elements need to have *some* width set
      // to then respond to flex-grow. This is used for that.
      auto: 'auto',
      arbitary: '1px',
      '5-7': '41.6%',
      '1-3': '33.3%',
      '1-2': '50%',
      '100': '100%',
    },
    maxWidth: {
      '1-2': '50%',
    },
    zIndex: {
      '-1': '-1',
      '-2': '-2',
      '-3': '-3',
      '-4': '-4',
      '1': '1',
      shadow: '2',
      divider: '5',
      overlay: '10',
      menu: '40',
      dropdown: '50',
      tooltip: '80',
      modal: '100',
      redirect: '150',
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    container: false,
  },
}
