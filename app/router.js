module.exports = app => {
    const {router, controller} = app;

    router.get('/hello', controller.home.index);

    router.get('/news', controller.new.list);

    router.get('/news/v2', controller.new.listV2);

};