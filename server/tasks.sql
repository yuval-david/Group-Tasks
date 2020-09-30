create database tasksdb;

use tasksdb;

CREATE table family_members
(
memberID int auto_increment,
name varchar(255) not null,
nickname varchar(255) not null,
memberDescription text,
primary key(memberID)
);

CREATE table tasks
(
taskID int auto_increment,
taskDescription text,
date timestamp default now(),
member_id int,
primary key (taskID),
foreign key (member_id) references family_members(memberID)
);

INSERT INTO family_members
(name, nickname, memberDescription)
VALUES
("Smadar", "Smadi", "mother"),
("Eyal", "Eyali", "brother"),
("Yuval", "Yuvali", "sister"),
("Benyamin", "Beni", "uncle"),
("Mazal", "Savta", "grandmothoer");

INSERT INTO tasks
(taskDescription, member_id)
VALUES
("Wash the dishes", 3),
("Throw the garbage", 2),
("Clean the windows", 1),
("Cooking", 5);