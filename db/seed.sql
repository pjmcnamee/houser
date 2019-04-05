DROP TABLE house IF EXISTS

create table house(
	id serial primary key,
	name varchar(30),
	address varchar(100),
	city varchar(100),
	state varchar(2),
	zip integer,
	img text,
	 decimal
);