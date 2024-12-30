DROP TABLE IF EXISTS public."Users"
, public."Threads"
, public."Res"; 

-- ユーザーテーブルの作成
create table public."Users" ( 
    "Id" serial not null
    , "LoginId" varchar (64) UNIQUE not null
    , "Name" varchar (64) not null
    , "SysPermission" smallint default 0 not null
    , "UmaMusumeTrpgPermission" smallint default 0 not null
    , "Email" character varying (128) not null
    , "CreationThreadCount" integer default 0 not null
    , "TotalResCount" integer default 0 not null
    , "Password" character varying (256) not null
    , "Token" character varying (32) not null
    , "CreateTime" timestamp with time zone default CURRENT_TIMESTAMP not null
    , "UpdateTime" timestamp with time zone default CURRENT_TIMESTAMP not null
    , "DeleteTime" timestamp with time zone default null
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
    on column public."Users"."CreateTime" is '作成日時'; 

comment 
    on column public."Users"."UpdateTime" is '更新日時'; 

comment 
    on column public."Users"."DeleteTime" is '削除日時'; 

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
    , "CreateTime"
    , "UpdateTime"
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
    , 'AQAAAAIAAYagAAAAEEZnddUTENT1PhKH/ujDMswyw2z55jymkx2WEiwpyQJFG7uemFADoKhSgNx6/6qWYA=='
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
    , 1
    , 'AQAAAAIAAYagAAAAENdfLLPepNcxPmFD9ZguR0/aotuJg1EgyalsRr6vzHLyySjq9fvEOZnHE6ipA0oPKQ=='
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
    , 0
    , 'AQAAAAIAAYagAAAAEAWhZhq5kghOF6lhlx0jjlTFn2E54EXHJ5V2dz9xpSy2JVnIsMUVSH44MO2YaVSNBw=='
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
    , 0
    , 'AQAAAAIAAYagAAAAECJvJe7zhjvMuciZOp3khmzVOZTzWnl6o8/1uC/+LkcNSuGGfAz1mehC7kY1zYG3IQ=='
    , '56cddebd2dcd4cd28da1ce0e2560a5b7'
    , '2024-12-29 12:06:49.489808+09:00'
    , '2024-12-29 12:06:49.489808+09:00'
); 

-- スレッドテーブルの作成
create table public."Threads" ( 
    "Id" serial not null
    , "CreateUserId" integer not null
    , "Title" character varying (64) not null
    , "ResCount" integer default 0 not null
    , "Token" character varying (32) not null
    , "CreateTime" timestamp with time zone default CURRENT_TIMESTAMP not null
    , "UpdateTime" timestamp with time zone default CURRENT_TIMESTAMP not null
    , "DeleteTime" timestamp with time zone default null
    , "IsDeleted" boolean default false not null
    , FOREIGN KEY ("CreateUserId") references public."Users" ("Id")
); 

-- 主キーの作成
alter table public."Threads" add constraint "ThreadsId" primary key ("Id"); 

-- コメントの作成
comment 
    on table public."Threads" is 'スレッドDB'; 

comment 
    on column public."Threads"."Id" is 'ID'; 

comment 
    on column public."Threads"."CreateUserId" is '作成者ID'; 

comment 
    on column public."Threads"."Title" is 'スレッドタイトル'; 

comment 
    on column public."Threads"."ResCount" is 'レス数'; 

comment 
    on column public."Threads"."Token" is 'トークン'; 

comment 
    on column public."Threads"."CreateTime" is '作成日'; 

comment 
    on column public."Threads"."UpdateTime" is '更新日'; 

comment 
    on column public."Threads"."DeleteTime" is '削除日'; 

comment 
    on column public."Threads"."IsDeleted" is '削除フラグ'; 

INSERT 
INTO public."Threads" ( 
    "Id"
    , "CreateUserId"
    , "Title"
    , "ResCount"
    , "Token"
    , "CreateTime"
    , "UpdateTime"
) 
VALUES (
1,1,'スレッド1',1,'fdsmlvfjsdnfvsozmcj','2024-12-30 12:06:49.489808+09:00','2024-12-30 12:06:49.489808+09:00'
),(
2,1,'スレッド2',1,'dfsvzfrgbsargbsdgbsgb','2024-12-31 12:06:49.489808+09:00','2024-12-31 12:06:49.489808+09:00'
); 

--レステーブルの作成
create table public."Res" ( 
    "Id" serial not null
    , "ThreadId" integer not null
    , "CreateUserId" integer not null
    , "ThreadResNo" integer not null
    , "Content" character varying (512) not null
    , "CreateTime" timestamp with time zone default CURRENT_TIMESTAMP not null
    , FOREIGN KEY ("CreateUserId") references public."Users" ("Id")
    , FOREIGN KEY ("ThreadId") references public."Threads" ("Id")
); 

-- 主キーの作成
alter table public."Res" add constraint "ResId" primary key ("Id"); 

-- コメントの作成
comment 
    on table public."Res" is 'レスDB'; 

comment 
    on column public."Res"."Id" is 'ID'; 

comment 
    on column public."Res"."ThreadId" is 'スレッドID'; 

comment 
    on column public."Res"."CreateUserId" is '作成者ID'; 

comment 
    on column public."Res"."ThreadResNo" is 'レスNo'; 

comment 
    on column public."Res"."Content" is 'レス内容';

comment 
    on column public."Res"."CreateTime" is '作成日'; 
INSERT 
INTO public."Res" ( 
    "Id"
    , "ThreadId"
    , "CreateUserId"
    , "ThreadResNo"
    , "Content"
    , "CreateTime"
) 
VALUES (
1,1,1,1,'スレ内容001','2024-12-30 12:06:49.489808+09:00'
),(
2,2,1,1,'スレ内容002<br>改行タグテスト\r\n改行コードテスト','2024-12-31 12:06:49.489808+09:00'
),(
3,2,2,2,'スレ内容003','2024-12-31 13:06:49.489808+09:00'
); 
