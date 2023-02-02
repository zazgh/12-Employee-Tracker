INSERT INTO department (id, name)
VALUES (01, "Front Office"),
        (02, "coaching staff"),
        (03, "team culture"),
        (04, "players");

INSERT INTO role (id, title, salary, department_id)
VALUES (001, "Executive vice president", 900000, 01),
        (002, "general manager", 800000, 01),
        (003, "head coach", 800000, 02),
        (004, "official mascot", 40000, 03),
        (005, "running backs", 800000, 04),
        (006, "wide receiver", 800000, 04);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Paul G", "Allen Trust", 001, NULL),
        (002, "John", "Schneider", 002, NULL),
        (003, "Pete", "Carroll", 003, 01),
        (004, "Blitz", "Hawk", 004, 01),
        (005, "DeeJay", "Dallas", 005, 01),
        (006, " D'Wayne", "Eskridge", 006, 01);
    


    