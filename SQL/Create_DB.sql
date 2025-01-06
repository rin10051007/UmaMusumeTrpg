DROP TABLE IF EXISTS public."Users"
, public."Threads"
, public."Responses"; 

-- ユーザーテーブルの作成
create table public."Users" ( 
    "Id" serial not null
    , "LoginId" varchar (64) UNIQUE not null
    , "Name" varchar (64) not null
    , "SysPermission" integer default 0 not null
    , "UmaMusumeTrpgPermission" integer default 0 not null
    , "Email" character varying (128) not null
    , "CreationThreadCount" integer default 0 not null
    , "TotalResCount" integer default 0 not null
    , "Password" character varying (256) not null
    , "Token" character varying (32) not null
    , "CreatingTime" timestamp with time zone default CURRENT_TIMESTAMP not null
    , "UpdatingTime" timestamp with time zone default CURRENT_TIMESTAMP not null
    , "DeletingTime" timestamp with time zone default null
    , "IsDeleted" boolean default false not null
); 

-- 主キーの作成
alter table public."Users" add constraint "UsersIdD" primary key ("Id"); 

-- コメントの作成
comment 
    on table public."Users" is '管理者、利用者DB'; 

comment 
    on column public."Users"."Id" is 'ID'; 

comment 
    on column public."Users"."LoginId" is 'LoginId'; 

comment 
    on column public."Users"."Name" is '名前'; 

comment 
    on column public."Users"."SysPermission" is '管理者権限
None = 0
NoQualification = 1,
SysAdmin = 2'
; 

comment 
    on column public."Users"."UmaMusumeTrpgPermission" is 'ウマ娘TRPG権限
None = 0
NoQualification = 1,
Player = 2,
GmPlayer = 3'
; 

comment 
    on column public."Users"."Email" is 'メールアドレス'; 

comment 
    on column public."Users"."CreationThreadCount" is '作成スレッド数'; 

comment 
    on column public."Users"."TotalResCount" is '総レス数'; 

comment 
    on column public."Users"."Password" is 'パスワード'; 

comment 
    on column public."Users"."Token" is 'トークン'; 

comment 
    on column public."Users"."CreatingTime" is '作成日時'; 

comment 
    on column public."Users"."UpdatingTime" is '更新日時'; 

comment 
    on column public."Users"."DeletingTime" is '削除日時'; 

comment 
    on column public."Users"."IsDeleted" is '削除フラグ'; 

--管理者追加PW:AdminPassword
INSERT 
INTO public."Users" ( 
    "Id"
    , "LoginId"
    , "Name"
    , "SysPermission"
    , "UmaMusumeTrpgPermission"
    , "Email"
    , "CreationThreadCount"
    , "TotalResCount"
    , "Password"
    , "Token"
    , "CreatingTime"
    , "UpdatingTime"
) 
VALUES ( 
    1
    , 'admin'
    , '管理者'
    , 2
    , 3
    , 'admin@example.com'
    , 2
    , 2
    , 'AQAAAAIAAYagAAAAEMS+8rURN7KGPYVFzayf9z9PWEpc7jttjpLN+ZBRSVAM+85wxygfA37a3ZDNMvJ0jw=='
    , '9b00e4c1562f43739152a0cfce084955'
    , '2024-12-04 10:06:49.489808+09:00'
    , '2024-12-04 10:06:49.489808+09:00'
) 
, ( 
    2
    , 'user001'
    , 'ユーザー001'
    , 1
    , 2
    , 'hoge@hoge.hoge'
    , 0
    , 1                                         --PW:user001
    , 'AQAAAAIAAYagAAAAECHvdmfF+HqyT1FE2a20xo89z2mItWL5bLWsdUSj3VjuWfL3HJpUytqNtnSQvo8Clg=='
    , '56cddebd2dcd4cd28da1ce0e2560a5b7'
    , '2024-12-29 12:06:49.489808+09:00'
    , '2024-12-29 12:06:49.489808+09:00'
) 
, ( 
    3
    , 'user002'
    , 'ユーザー002'
    , 1
    , 3
    , 'hoge@hoge.hoge'
    , 0
    , 0                                         --PW:user002
    , 'AQAAAAIAAYagAAAAEH4xrCUM4nZqtktDK8A56qUs1XcMxQuk2yTlODgH4haGnq3PaTRhCzgL76zIxDQEEg=='
    , '56cddebd2dcd4cd28da1ce0e2560a5b7'
    , '2024-12-29 12:06:49.489808+09:00'
    , '2024-12-29 12:06:49.489808+09:00'
) 
, ( 
    4
    , 'user003'
    , 'ユーザー003'
    , 2
    , 1
    , 'hoge@hoge.hoge'
    , 0
    , 0                                         --PW:user003
    , 'AQAAAAIAAYagAAAAEHiqX0pMVgQGxo7WCs2tpJmNbzBgO6+faGoZRTNG6mWYxGkJxEEcOf8teLZ1ecKe5w=='
    , '56cddebd2dcd4cd28da1ce0e2560a5b7'
    , '2024-12-29 12:06:49.489808+09:00'
    , '2024-12-29 12:06:49.489808+09:00'
); 

-- スレッドテーブルの作成
create table public."Threads" ( 
    "Id" serial not null
    , "CreatingUserId" integer not null
    , "Title" character varying (64) not null
    , "ResCount" integer default 0 not null
    , "Token" character varying (32) not null
    , "CreatingTime" timestamp with time zone default CURRENT_TIMESTAMP not null
    , "UpdatingTime" timestamp with time zone default CURRENT_TIMESTAMP not null
    , "DeletingTime" timestamp with time zone default null
    , "IsDeleted" boolean default false not null
    , FOREIGN KEY ("CreatingUserId") references public."Users" ("Id")
); 

-- 主キーの作成
alter table public."Threads" add constraint "ThreadsId" primary key ("Id"); 

-- コメントの作成
comment 
    on table public."Threads" is 'スレッドDB'; 

comment 
    on column public."Threads"."Id" is 'ID'; 

comment 
    on column public."Threads"."CreatingUserId" is '作成者ID'; 

comment 
    on column public."Threads"."Title" is 'スレッドタイトル'; 

comment 
    on column public."Threads"."ResCount" is 'レス数'; 

comment 
    on column public."Threads"."Token" is 'トークン'; 

comment 
    on column public."Threads"."CreatingTime" is '作成日'; 

comment 
    on column public."Threads"."UpdatingTime" is '更新日'; 

comment 
    on column public."Threads"."DeletingTime" is '削除日'; 

comment 
    on column public."Threads"."IsDeleted" is '削除フラグ'; 

INSERT 
INTO public."Threads" ( 
    "Id"
    , "CreatingUserId"
    , "Title"
    , "ResCount"
    , "Token"
    , "CreatingTime"
    , "UpdatingTime"
) 
VALUES ( 
    1
    , 1
    , 'スレッド1'
    , 1
    , 'fdsmlvfjsdnfvsozmcj'
    , '2024-12-30 12:06:49.489808+09:00'
    , '2024-12-30 12:06:49.489808+09:00'
) 
, ( 
    2
    , 1
    , 'スレッド2'
    , 2
    , 'dfsvzfrgbsargbsdgbsgb'
    , '2024-12-31 12:06:49.489808+09:00'
    , '2024-12-31 12:06:49.489808+09:00'
); 

--レステーブルの作成
create table public."Responses" ( 
    "Id" serial not null
    , "ThreadId" integer not null
    , "CreatingUserId" integer not null
    , "ThreadResNo" integer not null
    , "Content" character varying (512) not null
    , "Token" character varying (32) not null
    , "CreatingTime" timestamp with time zone default CURRENT_TIMESTAMP not null
    , FOREIGN KEY ("CreatingUserId") references public."Users" ("Id")
    , FOREIGN KEY ("ThreadId") references public."Threads" ("Id")
); 

-- 主キーの作成
alter table public."Responses" add constraint "ResponsesId" primary key ("Id"); 

-- コメントの作成
comment 
    on table public."Responses" is 'レスDB'; 

comment 
    on column public."Responses"."Id" is 'ID'; 

comment 
    on column public."Responses"."ThreadId" is 'スレッドID'; 

comment 
    on column public."Responses"."CreatingUserId" is '作成者ID'; 

comment 
    on column public."Responses"."ThreadResNo" is 'レスNo'; 

comment 
    on column public."Responses"."Content" is 'レス内容'; 

comment 
    on column public."Threads"."Token" is 'トークン'; 

comment 
    on column public."Responses"."CreatingTime" is '作成日'; 

INSERT 
INTO public."Responses" ( 
    "Id"
    , "ThreadId"
    , "CreatingUserId"
    , "ThreadResNo"
    , "Content"
    , "Token"
    , "CreatingTime"
) 
VALUES ( 
    1
    , 1
    , 1
    , 1
    , 'スレ内容001'
    , 'abergeasn,kiu'
    , '2024-12-30 12:06:49.489808+09:00'
) 
, ( 
    2
    , 2
    , 1
    , 1
    , 'スレ内容002<br>改行タグテスト\r\n改行コードテスト'
    , 'oiplasfgbhnjmk,.oit,of'
    , '2024-12-31 12:06:49.489808+09:00'
) 
, ( 
    3
    , 2
    , 2
    , 2
    , 'スレ内容003'
    , 's,ilues;lf,vcjaew;:pf'
    , '2024-12-31 13:06:49.489808+09:00'
);
