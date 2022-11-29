drop procedure if exists creaRecord;
DELIMITER $$
create procedure creaRecord(start_index int)
BEGIN

	DECLARE name_ varchar(10) default 'lorenzo';
    
    
    DECLARE exit handler for sqlexception
		BEGIN
		ROLLBACK;
	END;

	DECLARE exit handler for sqlwarning
		BEGIN
		ROLLBACK;
	END;
   
	START TRANSACTION;
        while (start_index < 10) do
			insert into corso (codice) values (start_index);
			SET start_index = start_index + 1;
        END WHILE;
        
        
        
        select * from corso;
        
    COMMIT;

END; $$
DELIMITER ;