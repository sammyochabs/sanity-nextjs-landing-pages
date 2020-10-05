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
                  buildHookId: '5f7a7581bea80c009a50a2b5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wx722izy',
                  apiId: 'eb3e4f18-bc5d-4e48-ad0e-01f477438f45'
                },
                {
                  buildHookId: '5f7a7581722587010f0aa49a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fo6jfqo2',
                  apiId: '5fa79bfb-cb91-4ce2-ad8d-83609aa1d9ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sammyochabs/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fo6jfqo2.netlify.app', category: 'apps'}
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
