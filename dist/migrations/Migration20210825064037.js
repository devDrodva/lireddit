"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210825064037 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210825064037 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null);');
    }
}
exports.Migration20210825064037 = Migration20210825064037;
//# sourceMappingURL=Migration20210825064037.js.map