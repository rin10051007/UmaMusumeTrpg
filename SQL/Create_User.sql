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
  , "LoginId" varchar(64) UNIQUE not null
  , "Name" varchar(64) not null
  , "SysPermission" smallint default 0 not null
  , "UmaMusumeTrpgPermission" smallint default 0 not null
  , "Email" character varying(128) not null
  , "Password" character varying(256) not null
  , "Token" character varying(32) not null
  , "CreateTime" timestamp with time zone default CURRENT_TIMESTAMP not null
  , "UpdateTime" timestamp with time zone default CURRENT_TIMESTAMP not null
  , "DeleteTime" timestamp with time zone default null
  , "IsDeleted" boolean default false not null
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

comment on column public."Users"."LoginId" is 'LoginId'
/

comment on column public."Users"."Name" is '名前'
/

comment on column public."Users"."SysPermission" is '管理者権限
None = 0
NoQualification = 1,
SysAdmin = 2'
/

comment on column public."Users"."UmaMusumeTrpgPermission" is 'ウマ娘TRPG権限
None = 0
NoQualification = 1,
Player = 2,
GmPlayer = 3'
/

comment on column public."Users"."Email" is 'メールアドレス'
/

comment on column public."Users"."Password" is 'パスワード'
/

comment on column public."Users"."Token" is 'トークン'
/

comment on column public."Users"."CreateTime" is '作成日時'
/

comment on column public."Users"."UpdateTime" is '更新日時'
/

comment on column public."Users"."DeleteTime" is '削除日時'
/

comment on column public."Users"."IsDeleted" is '削除フラグ'
/

--管理者追加PW:AdminPassword
INSERT 
INTO public."Users" ("LoginId","Name","SysPermission","UmaMusumeTrpgPermission","Email","Password","Token") 
VALUES ('admin','管理者',2,3,'admin@hoge.com','AQAAAAIAAYagAAAAELzOnl9hNdGGgtnWvbtLcIktzNK8D9L25rASjMe5ZW75mC7iinughSc+bKRalEn8XA==','adminToken')
/
INSERT 
INTO public."Users" ("LoginId","Name","UmaMusumeTrpgPermission","Email","Password","Token") 
VALUES ('Player1','プレイヤー1',1,'Player1@hoge.com','Player1password','Player1Token')
/
INSERT 
INTO public."Users" ("LoginId","Name","UmaMusumeTrpgPermission","Email","Password","Token") 
VALUES ('Player2','プレイヤー2',1,'Player2@hoge.com','Player2password','Player2Token')
/
