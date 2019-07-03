const ghpages = require('gh-pages')

ghpages.publish(
    'public', {
        branch: 'master',
        repo: 'git@github.com:aranhaagency/aranhaagency.github.io.git',
    },
    () => {
        console.log('Deploy Complete!')
    }
)