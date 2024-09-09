
Create database bookshop;
use bookshop;
Create table books(`id` int not null auto_increment primary key,title varchar(255) not null,`desc` varchar(255) NOT NULL,`cover` varchar(255) NOT NULL,`price` int not null);
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';
FLUSH PRIVILEGES;
