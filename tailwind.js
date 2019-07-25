module.exports ={
    theme:{
       
            colors: {
                pinkDarkest: '#ED0677',
                pinkDark: '#E06C9F',
                pink: '#E574BC',
                pinkLight: '#F9B4ED',
                pinkLighest:'#EFBCD5',
                black:'#232735',
                greyDark: '#A1A4B1',
                grey:'#D3D4D8',
                greyLight: '#F0F1F3',
                greyLightest: '#',
                white: '#FFFFFF',
                greenDarkest: '#498467',
                greenDark: '#61B066',
                green: '#52B788',
                greenLight: '#00A265',
                greenLightest: '#BBE1C3',
                blueDarkest: '#010059',
                blueDark: '#249DC9',
                blue: '#7FDBE8',
                blueLight: '#A8E8EA',
                blueLightest: '#E0FFF7',
                redDarkest: '#92140C',
                redDark: '#D80032',
                red: '#EF233C',
                redLight: '#EC5766',
                redLightest: '#EF7674',
                orangeDarkest: '#F25C54',
                orangeDark:'#F27059',
                orange: '#F4845F',
                orangeLight: '#F79D65',
                orangeLightest: '#F7B267',
            },
            screens: {
                's': '320px',
                's-max': [{'max':'320px'}],
                'sl': '375px',
                'sm': '575px',
                'sm-600': '600px',
                'sm-land':[{'min':'667px'}],
                'md': '768px',
                'lg': '992px',
                'x': '1024px',
                'lapie': [{'min':'1280px','max':'1366px'}],
                'xl': [{'min': '1500px'}],
              },
              fontFamily: {
                'display':['Rubik Mono One'] ,
                'body': ['Kanit'],
              },
              fontSize: {
                'xs': '.75rem',     // 12px
                'sm': '.875rem',    // 14px
                'base': '1rem',     // 16px
                'lg': '1.125rem',   // 18px
                'xl': '1.25rem',    // 20px
                '2xl': '1.5rem',    // 24px
                '3xl': '1.875rem',  // 30px
                '4xl': '2.25rem',   // 36px
                '5xl': '3rem', 
                '7xl': '5rem'     // 48px
              },
              fontWeight: {
                'hairline': 100,
                'thin': 200,
                'light': 300,
                'normal': 400,
                'medium': 500,
                'semibold': 600,
                'bold': 700,
                'extrabold': 800,
                'black': 900,
              },
              leading: {
                'none': 1,
                'tight': 1.25,
                'normal': 1.5,
                'loose': 2,
              },
              textColors: theme => theme('colors'),
              backgroundColors: theme => theme('colors'),
              backgroundSize: {
                'auto': 'auto',
                'cover': 'cover',
                'contain': 'contain',
              },
              borderWidths: {
                default: '1px',
                '0': '0',
                '2': '2px',
                '4': '4px',
                '8': '8px',
              },
              borderColors: global.Object.assign({ default: theme => theme(colors['grey-light']) }, theme => theme('colors')),
              borderRadius: {
                'none': '0',
                'px': '5px',
                'sm': '.125rem',
                "default": '.25rem',
                'lg': '25px',
                'full': '9999px',
                'header-border': '0px 0px 220px 220px',
                'header-border-sm': '0px 0px 120px 120px'
              },
              width: {
                'auto': 'auto',
                'px': '1px',
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem',
                '12': '3rem',
                '16': '4rem',
                '24': '6rem',
                '32': '8rem',
                '48': '12rem',
                '64': '16rem',
                '1/2': '50%',
                '1/3': '33.33333%',
                '2/3': '66.66667%',
                '1/4': '25%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.66667%',
                '5/6': '83.33333%',
                'full': '100%',
                'screen': '100vw',
                '300': '300px',
                '350': '350px',
                '400': '400px',
                '500': '500px',
                'img': '600px',
                '700': '700px',
                '750': '750px',
                '800': '800px'
              },
              height: {
                'auto': 'auto',
                'px': '1px',
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem',
                '12': '3rem',
                '16': '4rem',
                '24': '6rem',
                '32': '8rem',
                '48': '12rem',
                '64': '16rem',
                '86': '20rem',
                'full': '100%',
                'screen': '100vh',
                'img': '500px',
                '90': '90px',
                '150': '150px',
                '200': '200px',
                '250': '250px',
                '350': '350px',
                '400': '400px',
                '450': '450px',
                '490': '490px',
                '500': '500px',
                '550': '550px',
                '600': '600px',
                '750': '750px',
                '800': '800px'
              },
              padding: {
                'px': '1px',
                '0': '0',
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem',
                '12': '3rem',
                '16': '4rem',
                '20': '5rem',
                '24': '6rem',
                '32': '8rem',
                '38': '16rem'
              },
              margin: {
                'auto': 'auto',
                'px': '1px',
                '0': '0',
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem',
                '12': '3rem',
                '16': '4rem',
                '20': '5rem',
                '24': '6rem',
                '32': '8rem',
              },
              shadows: {
                default: '0px 4px 4px  rgba(0,0,0,0.25)',
                'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
                'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
                'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
                'outline': '0 0 0 3px rgba(52,144,220,0.5)',
                'lg-card': '15px -10px 4px rgba(0,0,0,0.25)',
                'none': 'none',
              },
              cursor: {
                auto: 'auto',
                default: 'default',
                pointer: 'pointer',
                wait: 'wait',
                text: 'text',
                move: 'move',
                'not-allowed': 'not-allowed',
              },
        
    },
    variants: {
        accessibility: ['responsive', 'focus'],
        alignContent: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColor: ['responsive', 'hover', 'focus'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: ['responsive'],
        borderColor: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive'],
        boxShadow: ['responsive', 'hover', 'focus'],
        cursor: ['responsive'],
        display: ['responsive'],
        fill: ['responsive'],
        flex: ['responsive'],
        flexDirection: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        flexWrap: ['responsive'],
        float: ['responsive'],
        fontFamily: ['responsive'],
        fontSize: ['responsive'],
        fontSmoothing: ['responsive'],
        fontStyle: ['responsive'],
        fontWeight: ['responsive', 'hover', 'focus'],
        height: ['responsive'],
        inset: ['responsive'],
        justifyContent: ['responsive'],
        letterSpacing: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: ['responsive'],
        listStyleType: ['responsive'],
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        objectFit: ['responsive'],
        objectPosition: ['responsive'],
        opacity: ['responsive'],
        order: ['responsive'],
        outline: ['responsive', 'focus'],
        overflow: ['responsive'],
        padding: ['responsive'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        resize: ['responsive'],
        stroke: ['responsive'],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColor: ['responsive', 'hover', 'focus'],
        textDecoration: ['responsive', 'hover', 'focus'],
        textTransform: ['responsive'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive'],
        whitespace: ['responsive'],
        width: ['responsive'],
        wordBreak: ['responsive'],
        zIndex: ['responsive'],
      },
      plugins:[
        
        function({addComponents}){
          const border = {
            ".border-top": {
              borderTop: "#ED0677 8px solid"
            }
          };
          const borderBottom = {
              ".border-bottom":{
                  borderBottom: '#ED0677 8px solid'
              }
          };

          addComponents(borderBottom);
          addComponents(border);
        }
	],
}