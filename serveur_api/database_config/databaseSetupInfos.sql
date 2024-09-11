INSERT INTO
        colors (name)
VALUES
        ('Jaune'),
        ('Rouge'),
        ('Bleu'),
        ('Violet'),
        ('Orange'),
        ('Vert'),
        ('Doré'),
        ('Argenté'),
        (null);

INSERT INTO
        categories (name)
VALUES
        ('Chaise'),
        ('Fauteuil'),
        ('Table'),
        ('Canapé'),
        ('Armoires'),
        ('Lampes');

INSERT INTO
        conditions (name)
VALUES
        ('Usagé'),
        ('Bon état'),
        ('Très bon état'),
        ('Comme neuf');

INSERT INTO
        materials (name)
VALUES
        ('Bois'),
        ('Bambou'),
        ('Medium'),
        ('Métal'),
        ('Aluminium'),
        ('Plastique'),
        ('Verre'),
        ('Marbre'),
        ('Cuir'),
        ('Cuir synthétique'),
        ('Coton'),
        ('Lin'),
        ('Fibres');

INSERT INTO
        roles (name)
VALUES
        ('Admin'),
        ('Member'),
        ('Premium member');

-- Adding client as admin and first user --
INSERT INTO
        users (role, name, surname, email, password)
VALUES
        (
                1,
                'Laurélyne',
                'Fleury',
                'laurelyne@fleury.net',
                '$2b$10$VHLHWskAYIibIDAO2NebyuBIzeHnWpwtG4/fm.Q.KxYUaCVwHcgHu' --kittycat7
        );