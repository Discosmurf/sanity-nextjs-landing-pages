export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cfe9f3e6c224fe471135c5c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-r9sh5i2d',
                  apiId: '43bde839-4f3e-434f-99a3-e69e320ef7f0'
                },
                {
                  buildHookId: '5cfe9f3e6effec6c66d292cd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ocwi8jd3',
                  apiId: '2f0daf66-fc89-423e-a4b8-24b803494c51'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Discosmurf/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ocwi8jd3.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
