import { MikroORM } from "@mikro-orm/core";
import { Post } from "src/entities/Post";
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(microConfig) 

    const post = orm.em.create(Post, {title: 'my first post'})
    await orm.em.persistAndFlush(post)
}

main()
