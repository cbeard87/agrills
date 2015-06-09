Router.configure({
  controller: 'AppController',
  loadingTemplate: 'loading',
  layoutTemplate: 'appLayout',
  fastRender: true
});

Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});
