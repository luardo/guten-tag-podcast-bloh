export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fe739a069f90df89d7cd5f7',
                  title: 'Sanity Studio',
                  name: 'guten-tag-podcast-bloh-studio',
                  apiId: '513636e1-0443-457c-bd11-0b737050e91c'
                },
                {
                  buildHookId: '5fe739a0b6d01b155c6fa7dd',
                  title: 'Blog Website',
                  name: 'guten-tag-podcast-bloh',
                  apiId: '37e65463-9789-4be8-be06-a304b7c45995'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/luardo/guten-tag-podcast-bloh',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://guten-tag-podcast-bloh.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
