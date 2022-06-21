import( /* webpackChunkName: 'sum' */'./sum').then(module => {
    // module 导出的对象名称
    console.log(module.default(1,3,4,5));
})
//  /* webpackChunkName: 'sum' */ 魔法注释，定义chunkname