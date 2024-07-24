CREATE TABLE orders (
   id INT PRIMARY KEY UNIQUE,
   pname VARCHAR(50),
   pnumber VARCHAR(15),
   pemail VARCHAR(100),
   paddress VARCHAR(200),
   ppin INT,
   pcity VARCHAR(60),
   pstate VARCHAR(50),
	dname VARCHAR(50),
   dnumber VARCHAR(15),
   demail VARCHAR(100),
   daddress VARCHAR(200),
   dpin INT,
   dcity VARCHAR(60),
   dstate VARCHAR(50),
   shiptype VARCHAR(15),
   weight INT,
   unit VARCHAR(10),
   schedules VARCHAR(20)
   
);