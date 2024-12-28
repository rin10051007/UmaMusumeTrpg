DROP TABLE IF EXISTS public."Users", public."Threads", public."Res";
-- ユーザーテーブルの作成
create table public."Users" ("ID" serial not null, "LoginId" varchar (64) UNIQUE not null, "Name" varchar (64) not null, "SysPermission" smallint default 0 not null, "UmaMusumeTrpgPermission" smallint default 0 not null, "Email" character varying (128) not null, "CreationThreadCount" integer default 0 not null, "TotalResCount" integer default 0 not null, "Password" character varying (256) not null, "Token" character varying (32) not null, "CreateTime" timestamp with time zone default CURRENT_TIMESTAMP not null, "UpdateTime" timestamp with time zone default CURRENT_TIMESTAMP not null, "DeleteTime" timestamp with time zone default null, "IsDeleted" boolean default false not null);
-- 主キーの作成
alter table public."Users" add constraint "UsersID" primary key ("ID");
-- コメントの作成
comment on table public."Users" is '管理者、利用者DB';
comment on column public."Users"."ID" is 'ID';
comment on column public."Users"."LoginId" is 'LoginId';
comment on column public."Users"."Name" is '名前';
comment on column public."Users"."SysPermission" is '管理者権限
None = 0
NoQualification = 1,
SysAdmin = 2';
comment on column public."Users"."UmaMusumeTrpgPermission" is 'ウマ娘TRPG権限
None = 0
NoQualification = 1,
Player = 2,
GmPlayer = 3';
comment on column public."Users"."Email" is 'メールアドレス';
comment on column public."Users"."CreationThreadCount" is '作成スレッド数';
comment on column public."Users"."TotalResCount" is '総レス数';
comment on column public."Users"."Password" is 'パスワード';
comment on column public."Users"."Token" is 'トークン';
comment on column public."Users"."CreateTime" is '作成日時';
comment on column public."Users"."UpdateTime" is '更新日時';
comment on column public."Users"."DeleteTime" is '削除日時';
comment on column public."Users"."IsDeleted" is '削除フラグ';
--管理者追加PW:AdminPassword
INSERT INTO public."Users" ("ID", "LoginId", "Name", "SysPermission", "UmaMusumeTrpgPermission", "Email", "CreationThreadCount", "TotalResCount", "Password", "Token", "CreateTime", "UpdateTime", "DeleteTime", "IsDeleted") VALUES (1, 'admin', '管理者', 2, 3, 'admin@example.com', 0, 0, 'AQAAAAIAAYagAAAAEEZnddUTENT1PhKH/ujDMswyw2z55jymkx2WEiwpyQJFG7uemFADoKhSgNx6/6qWYA==', '9b00e4c1562f43739152a0cfce084955', '2024-12-04 10:06:49.489808 +00:00', '2024-12-04 10:06:49.489808 +00:00', null, false);
-- スレッドテーブルの作成
create table public."Threads" ("ID" serial not null, "CreateUserId" integer not null, "ResCount" integer default 0 not null, "Token" character varying (32) not null, "CreateTime" timestamp with time zone default CURRENT_TIMESTAMP not null, "UpdateTime" timestamp with time zone default CURRENT_TIMESTAMP not null, "DeleteTime" timestamp with time zone default null, "IsDeleted" boolean default false not null, FOREIGN KEY ("CreateUserId") references public."Users" ("ID"));
-- 主キーの作成
alter table public."Threads" add constraint "ThreadsID" primary key ("ID");
-- コメントの作成
comment on table public."Threads" is 'スレッドDB';
comment on column public."Threads"."ID" is 'ID';
comment on column public."Threads"."CreateUserId" is '作成者ID';
comment on column public."Threads"."ResCount" is 'レス数';
comment on column public."Threads"."Token" is 'トークン';
comment on column public."Threads"."CreateTime" is '作成日';
comment on column public."Threads"."UpdateTime" is '更新日';
comment on column public."Threads"."DeleteTime" is '削除日';
comment on column public."Threads"."IsDeleted" is '削除フラグ';
--レステーブルの作成
create table public."Res" ("ID" serial not null, "ThreadId" integer not null, "CreateUserId" integer not null, "CreateTime" timestamp with time zone default CURRENT_TIMESTAMP not null, "ThreadResNo" integer not null, "Text" text not null, FOREIGN KEY ("CreateUserId") references public."Users" ("ID"), FOREIGN KEY ("ThreadId") references public."Threads" ("ID"));
-- 主キーの作成
alter table public."Res" add constraint "ResID" primary key ("ID");
-- コメントの作成
comment on table public."Res" is 'レスDB';
comment on column public."Res"."ID" is 'ID';
comment on column public."Res"."ThreadId" is 'スレッドID';
comment on column public."Res"."CreateUserId" is '作成者ID';
comment on column public."Res"."CreateTime" is '作成日';
comment on column public."Res"."ThreadResNo" is 'レスNo';
comment on column public."Res"."Text" is 'レス内容';

