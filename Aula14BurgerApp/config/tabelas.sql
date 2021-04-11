create database burgers_db;
use burgers_db;

create table restaurant_burger(
    id integer not null auto_increment,
    burger_name varchar(30) not null,
    is_favorite boolean default false,
    primary key(id)
)

insert into restaurant_burger (burger_name) 
values("Queijo Super"),("Queijo Supreme"),("Quejo Double");