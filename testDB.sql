CREATE TABLE 
    STATE (
        state_id SERIAL PRIMARY KEY,
        name text not null,
    )

INSERT INTO 
    state (name)
    VALUES (
        'standby'
    ),
    ( 
        'validated'
    ),
    (
        'deleted'
    );
    
ALTER TABLE furnitures ADD 
    state smallint REFERENCES state (state_id) DEFAULT 1;