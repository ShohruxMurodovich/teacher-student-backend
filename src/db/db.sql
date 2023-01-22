CREATE DATABASE exam;

CREATE TABLE users(
    user_id serial not null PRIMARY KEY,
    user_name varchar(64) not null,
    user_phone bigint,
    user_password varchar(32) not null,
    user_status int not null DEFAULT 3
);


CREATE TABLE courses(
    course_id serial not null PRIMARY KEY,
    course_name varchar(64) not null,
    course_price integer
);

CREATE TABLE groups(
    group_id serial not null PRIMARY KEY,
    group_title varchar(32) not null,

    course_id int not null REFERENCES courses(course_id),
    teacher_id int not null REFERENCES users(user_id)
);


CREATE TABLE student_groups(
    student_group_id serial not null PRIMARY KEY,
    student_id int REFERENCES users(user_id),
    group_id int REFERENCES groups(group_id)
);


CREATE TABLE homework(
    homework_id serial not null PRIMARY KEY,
    homework_title varchar(64) not null,
    homework_content text not null,
    group_id int REFERENCES groups(group_id)
);


insert into users(user_name, user_phone, user_password, user_status) values('admin', +998977777777, 'admin', 1);
insert into users(user_name, user_phone, user_password, user_status) values('Jons', +148968753696 , 'jons123', 2);
insert into users(user_name, user_phone, user_password, user_status) values('Feruz', +998900067892 , 'feruz123', 2);
insert into users(user_name, user_phone, user_password, user_status) values('Abdulaziz', +998992657418 , 'abdulaziz123', 2);
insert into users(user_name, user_phone, user_password, user_status) values('Umid', +998974567893 , 'umid123', 2);
insert into users(user_name, user_phone, user_password, user_status) values('Eshmat', +998986523172 , 'eshmat123', 3);
insert into users(user_name, user_phone, user_password, user_status) values('Toshmat', +998934526987 , 'toshmat123', 3);
insert into users(user_name, user_phone, user_password, user_status) values('Matqovul', +998976589746, 'matqovul123', 3);
insert into users(user_name, user_phone, user_password, user_status) values('Sherali', +998946397418, 'sherali123', 3);
insert into users(user_name, user_phone, user_password, user_status) values('Jorabek', +998946397479, 'jorabek123', 3);
insert into users(user_name, user_phone, user_password, user_status) values('Karim', +998946397414, 'karim123', 3);



insert into courses(course_name, course_price) values('Marketing', 650000);
insert into courses(course_name, course_price) values('Web programming', 800000);
insert into courses(course_name, course_price) values('Web design', 700000);
insert into courses(course_name, course_price) values('SMM', 450000);


insert into groups(group_title, course_id, teacher_id) values('n8', 1 , 2);
insert into groups(group_title, course_id, teacher_id) values('n10', 2 , 2);
insert into groups(group_title, course_id, teacher_id) values('n15', 2 , 3);
insert into groups(group_title, course_id, teacher_id) values('n18', 3 , 4);
insert into groups(group_title, course_id, teacher_id) values('n22', 4 , 5);

insert into student_groups(student_id, group_id) values(6, 1);
insert into student_groups(student_id, group_id) values(10, 1);
insert into student_groups(student_id, group_id) values(7, 2);
insert into student_groups(student_id, group_id) values(8, 3);
insert into student_groups(student_id, group_id) values(9, 4);
insert into student_groups(student_id, group_id) values(11, 5);


insert into homework(homework_title, homework_content, group_id) values('Media marketing', 'Bir balola qib keliw', 1);