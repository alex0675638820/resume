// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ===============================================================

var header = {
      name: {
        firstname: 'Alex',
        lastname: 'Bard',
      },
      position: 'Junior Fullstack JS Developer',
      salary: '600$ в місяц',
      address: 'city Dnepr, st.Artema,40'
}
var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
 }

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume ! summary',
    },
    header,

    main: {
      summary: {
        title: 'Summary',
        text: `'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
                      work on a new project I learn the domain and try to understand the idea of the project. Good team
                      player, every colleague is a friend to me.'`,
      },
  
      eperience: {
        title: 'Other experience',
        text: `'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.'`,
      },
    },
    footer,
  })
})

// ================================================================
 
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume ! skills',
    },
    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 9,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: true,
        },
        {
          name: 'Git',
          point: 9,
        },
        {
          name: 'Terminal',
          point: 8,
        },
        {
          name: 'NPM',
          point: 8,
          isTop: false,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'travel',
          isMain: true,
        },
        {
          name: 'opera',
          isMain: false,
        },
        {
          name: 'sport',
          isMain: true,
        },
      ],
    },
     footer,
  })
  }) 
  // ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume ! education',
    },
    header,

    main: {
      educations: [
        {
          name: 'СШ№33',
          isEnd: true,
        },
        {
          name: 'ДММТ',
          isEnd: true,
        },
        {
          name: 'ГиПОпром',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'СШ№33',
          id: 1983,
        },
        {
          name: 'ДММТ',
          id: 1991,
        },
        {
          name: 'ГиПОпром',
          id: 2001,
        },
      ],
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume ! Work',
    },
    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://it-brains.com.ua/',
              about: 'Render view with the given options and optional callback',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              stackAmount: 3,
              awards: [
                {
                  name: 'respect'
                },
                {
                  name: 'pronto'
                },
              ],
              awardAmount: 2, 
            },
          ],
        },
      ],
    },
    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
