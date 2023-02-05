--------------------------------------------------------------------------------
-- public."Users" のレイアウト変更
--   注意！！：テーブルに依存するオブジェクト（ビューなど）が削除される場合があります。それらのオブジェクトは復元されません。
--   2023/01/28 Rinn1
--------------------------------------------------------------------------------
DROP TABLE public."Users"
/

-- 新テーブルの作成
create table public."Users" (
  "ID" serial not null
  , "Name" varchar(64) not null
  , "SysPermission" smallint default 0 not null
  , "UmaMusumeTrpgPermission" smallint default 0 not null
  , "Email" character varying(128) not null
  , "Password" character varying(256) not null
  , "CreateTime" timestamp with time zone default CURRENT_TIMESTAMP not null
  , "UpdateTime" timestamp with time zone default CURRENT_TIMESTAMP not null
  , "DeleteTime" timestamp with time zone default null
  , "IsDelete" boolean default false not null
)
/


-- 主キーの作成
alter table public."Users"  add constraint "ID" primary key ("ID")
/


-- コメントの作成
comment on table public."Users" is '管理者、利用者DB'
/

comment on column public."Users"."ID" is 'ID'
/

comment on column public."Users"."Name" is '名前'
/

comment on column public."Users"."SysPermission" is '管理者権限
NoQualification = 0,
SysAdmin = 1'
/

comment on column public."Users"."UmaMusumeTrpgPermission" is 'ウマ娘TRPG権限
NoQualification = 0,
Player = 1,
GmPlayer = 2'
/

comment on column public."Users"."Email" is 'メールアドレス'
/

comment on column public."Users"."Password" is 'パスワード'
/

comment on column public."Users"."CreateTime" is '作成日時'
/

comment on column public."Users"."UpdateTime" is '更新日時'
/

comment on column public."Users"."DeleteTime" is '削除日時'
/

comment on column public."Users"."IsDelete" is '削除フラグ'
/

--管理者追加
INSERT 
INTO public."Users" ("Name","SysPermission","UmaMusumeTrpgPermission","Email","Password") 
VALUES ('管理者',1,1,'admin@hoge.com','adminPassword')
/
INSERT 
INTO public."Users" ("Name","UmaMusumeTrpgPermission","Email","Password") 
VALUES ('プレイヤー',1,'Player@hoge.com','Playerpassword')
/
