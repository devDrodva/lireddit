"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const Post_1 = require("src/entities/Post");
const constants_1 = require("./constants");
const main = async () => {
    const orm = await core_1.MikroORM.init({
        entities: [Post_1.Post],
        dbName: 'lireddit',
        user: 'postgres',
        password: 'DMLB0620',
        type: 'postgresql',
        debug: !constants_1.__prod__,
    });
    const post = orm.em.create(Post_1.Post, { title: 'my first post' });
    await orm.em.persistAndFlush(post);
};
main();
//# sourceMappingURL=index.js.map