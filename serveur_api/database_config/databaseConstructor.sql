CREATE TABLE
    colors (color_id serial PRIMARY KEY, name text);

CREATE TABLE
    categories (
        category_id serial PRIMARY KEY,
        name text not NULL
    );

CREATE TABLE
    conditions (
        condition_id serial PRIMARY KEY,
        name text not null
    );

CREATE TABLE
    materials (
        material_id serial PRIMARY KEY,
        name text not null
    );

CREATE TABLE
    roles (role_id serial PRIMARY KEY, name text not null);

CREATE TABLE
    users (
        user_id serial PRIMARY KEY,
        role smallint REFERENCES roles (role_id) DEFAULT 2,
        name text not null,
        surname text not null,
        email text not null,
        password text not null,
        phone smallint,
        address text
    );

-- ==== NEED TO WORK ON THIS ==== --
CREATE TABLE
    furnitures (
        furniture_id serial PRIMARY KEY,
        category smallint REFERENCES categories (category_id),
        material smallint references materials (material_id),
        condition smallint REFERENCES conditions (condition_id),
        color_main smallint REFERENCES colors (color_id),
        color_secondary smallint REFERENCES colors (color_id) DEFAULT 9,
        dimensions text not null,
        price integer not null,
        image,
        description text
    );

CREATE TABLE
    furniture_user (
        id serial PRIMARY KEY,
        furniture_id integer REFERENCES furnitures (furniture_id),
        user_id integer REFERENCES users (user_id)
    );

CREATE TABLE IF NOT EXISTS sessions (
        id serial PRIMARY KEY,
        userId integer REFERENCES users (user_id),

        expiresAt timestamp(3) with time zone NOT NULL,

        createdAt timestamp(3) with time zone DEFAULT now() NOT NULL,
    )
-- =========== END ============== --