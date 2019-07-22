module.exports ={
    theme:{
        extend:{
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
                'lapie': [{'min': '1024px','max':'1366px'}],
                'xl': [{'min': '1500px'}],
              },
              fonts: {
                'display':['Rubik Mono One'] ,
                'body': ['Kanit'],
              },
              textSizes: {
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
              fontWeights: {
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
        }
    }
}